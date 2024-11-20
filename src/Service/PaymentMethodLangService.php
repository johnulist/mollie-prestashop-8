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

namespace Mollie\Service;

use Mollie\Adapter\Context;
use Mollie\Repository\MultiLangRepository;

if (!defined('_PS_VERSION_')) {
    exit;
}

class PaymentMethodLangService
{
    /** @var MultiLangRepository */
    private $multiLangRepository;

    /** @var Context */
    private $context;

    public function __construct(MultiLangRepository $multiLangRepository, Context $context)
    {
        $this->multiLangRepository = $multiLangRepository;
        $this->context = $context;
    }

    public function savePaymentTitleTranslation(string $idPaymentMethod, int $langId, string $translation)
    {
        if (empty($translation)) {
            return;
        }

        $id = $this->multiLangRepository->getExistingRecordId($idPaymentMethod, $langId) ?: 0;

        $multiLangObject = new \MolPaymentMethodLang();
        $multiLangObject->id = $id;
        $multiLangObject->id_lang = $langId;
        $multiLangObject->id_method = $idPaymentMethod;
        $multiLangObject->id_shop = $this->context->getShopId();
        $multiLangObject->text = $translation;
        $multiLangObject->save();
    }

    public function trans(string $idMethod)
    {
        return $this->multiLangRepository->getTextByLanguageAndMethod($this->context->getLanguageId(), $idMethod, $this->context->getShopId());
    }
}
