<?php
/**
 * Mollie       https://www.mollie.nl
 *
 * @author      Mollie B.V. <info@mollie.nl>
 * @copyright   Mollie B.V.
 * @license     https://github.com/mollie/PrestaShop/blob/master/LICENSE.md
 *
 * @see        https://github.com/mollie/PrestaShop
 * @codingStandardsIgnoreStart
 */

namespace Mollie\Subscription\Handler;

use Mollie\Subscription\Utility\ClockInterface;
use MolRecurringOrder;

if (!defined('_PS_VERSION_')) {
    exit;
}

class CustomerAddressUpdateHandler
{
    /** @var ClockInterface */
    private $clock;

    public function __construct(ClockInterface $clock)
    {
        $this->clock = $clock;
    }

    /**
     * @param MolRecurringOrder[] $orders
     *
     * @throws \PrestaShopDatabaseException
     * @throws \PrestaShopException
     */
    public function handle(array $orders, int $newAddressId, int $oldAddressId): void
    {
        foreach ($orders as $order) {
            if ((int) $order->id_address_delivery === $oldAddressId) {
                $order->id_address_delivery = $newAddressId;
            }

            if ((int) $order->id_address_invoice === $oldAddressId) {
                $order->id_address_invoice = $newAddressId;
            }

            $order->date_update = $this->clock->getCurrentDate();

            $order->update();
        }
    }
}
