import 'cypress-file-upload';
import 'cypress-iframe';

//const compareSnapshotCommand = require('cypress-visual-regression/dist/command');
//compareSnapshotCommand({
//  capture: 'fullPage'
//});


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 // Cypress.Commands.add("login", () => {
 //   cy.get('#email').type('${{ secrets.SIMONAS_EMAIL }}',{delay: 0})
 //   cy.get('#passwd').type('${{ secrets.SIMONAS_PASS }}',{delay: 0})
 //   cy.get('#submit_login').click()
 // })
 Cypress.Commands.add("login_mollie17_test", () => {
   Cypress.env()
   cy.get('#email').type((Cypress.env('demousername')),{delay: 0, log: false})
   cy.get('#passwd').type((Cypress.env('demopassword')),{delay: 0, log: false})
   cy.get('#submit_login').click()
 })
 Cypress.Commands.add("login_mollie16_test", () => {
   Cypress.env()
   cy.get('#email').type((Cypress.env('demousername')),{delay: 0, log: false})
   cy.get('#passwd').type((Cypress.env('demopassword')),{delay: 0, log: false})
   cy.get('.row-padding-top > .btn').click().wait(500)
   cy.visit('https://demo.invertus.eu/clients/mollie16-test/admin1/index.php?controller=AdminMollieModule')
 })
 Cypress.Commands.add("prestashop_admin_localhost_1771", (url) => {
   cy.visit('/admin1771/index.php')
 })
 Cypress.Commands.add("mollie_test17_admin", (url) => {
   cy.visit('https://mollie1770test.invertusdemo.com/admin1/index.php')
 })
 Cypress.Commands.add("mollie_test16_admin", (url) => {
   cy.visit('https://demo.invertus.eu/clients/mollie16-test/admin1/index.php?controller=AdminMollieModule')
 })
 Cypress.Commands.add("ps16_random_user", (randomuser) => {
   // Creating random user all the time
   const uuid = () => Cypress._.random(0, 1e6)
   const id = uuid()
   const testname = `testemail${id}@testing.com`
   cy.get('#email_create').type(testname, {delay: 0})
   cy.get('#SubmitCreate > span').click()
   cy.get('#id_gender1').check()
   cy.get('#customer_firstname').type('AUT',{delay:0}).as('firstname')
   cy.get('#customer_lastname').type('AUT',{delay:0}).as('lastname')
   cy.get('#passwd').type('123456',{delay:0}).as('pasw')
   cy.get('#submitAccount > span').click()
   cy.get('#company').type('123456',{delay:0}).as('company')
   cy.get('#vat-number').type('123456',{delay:0}).as('vat number')
   cy.get('#address1').type('ADDR',{delay:0}).as('address')
   cy.get('#address2').type('ADDR',{delay:0}).as('address2')
   cy.get('#postcode').type('54469',{delay:0}).as('zip')
   cy.get('#city').type('CIT',{delay:0}).as('city')
   cy.get('#id_country').select('Lithuania').as('country')
   cy.get('#phone').type('+085',{delay:0}).as('telephone')
   cy.get('#phone_mobile').type('+000',{delay:0}).as('telephone2')
 })
 Cypress.Commands.add("camelia_dev2_admin_login", () => {
cy.visit('https://dev2.camelia.lt/prisijungti?back=my-account')
cy.get('.col-lg-6 > .form-control').type('')
cy.get('.input-group > .form-control').type('***')
cy.get('#submit-login').click()
cy.get('.custommer-account-links').should('exist').as('Successfully logged in')
  })
  Cypress.Commands.add("square_PS17_BO_login", (email, password) => {
  cy.visit('https://square17.invertusdemo.com/admin1/')
  Cypress.env()
  cy.get('#email').type((Cypress.env('demousername')),{delay: 0, log: false})
  cy.get('#passwd').type((Cypress.env('demopassword')),{delay: 0, log: false})
  cy.get('#submit_login').click().wait(1000)
  cy.visit('https://square17.invertusdemo.com/admin1/index.php?controller=AdminSquareSettings')
  cy.get('.btn-continue').click()
   })
Cypress.Commands.add("square_PS17_guest_user", (email, password) => {
  cy.visit('https://square17.invertusdemo.com/en/art/4-16-the-adventure-begins-framed-poster.html')
  cy.get('.add > .btn').click()
  cy.get('.cart-content-btn > .btn-primary').click()
  cy.get('.text-sm-center > .btn').click()
  // Creating random user all the time
  cy.get(':nth-child(1) > .custom-radio > input').check()
  cy.get('#customer-form > section > :nth-child(2) > .col-md-6 > .form-control').type('AUT',{delay:0})
  cy.get(':nth-child(3) > .col-md-6 > .form-control').type('AUT',{delay:0})
  const uuid = () => Cypress._.random(0, 1e6)
  const id = uuid()
  const testname = `testemail${id}@testing.com`
  cy.get(':nth-child(4) > .col-md-6 > .form-control').type(testname, {delay: 0})
  cy.get(':nth-child(6) > .col-md-6 > .input-group > .form-control').type('123456',{delay:0})
  cy.get(':nth-child(9) > .col-md-6 > .custom-checkbox > label > input').check()
  cy.get(':nth-child(11) > .col-md-6 > .custom-checkbox > label > input').check()
  cy.get('#customer-form > .form-footer > .continue').click()

  cy.get(':nth-child(6) > .col-md-6 > .form-control').type('123456',{delay:0})
  cy.get(':nth-child(7) > .col-md-6 > .form-control').type('123456',{delay:0}).as('vat number')
  cy.get(':nth-child(8) > .col-md-6 > .form-control').type('ADDR',{delay:0}).as('address')
  cy.get(':nth-child(10) > .col-md-6 > .form-control').type('54469',{delay:0}).as('zip')
  cy.get(':nth-child(11) > .col-md-6 > .form-control').type('CIT',{delay:0}).as('city')
  cy.get(':nth-child(12) > .col-md-6 > .form-control').select('Lithuania').as('country')
  cy.get(':nth-child(13) > .col-md-6 > .form-control').type('085',{delay:0}).as('telephone').wait(1000)
  cy.get('.form-footer > .continue').click()
  cy.get('#js-delivery > .continue').click()
})
Cypress.Commands.add("mollie_1752_test_demo_module_dashboard", (url) => {
  cy.visit('https://demo.invertus.eu/clients/mollie17-test/admin1/index.php?controller=AdminModules&configure=mollie')
})

Cypress.Commands.add("mollie_1752_test_login", () => {
  Cypress.env()
  cy.get('#email').type((Cypress.env('demousername')),{delay: 0, log: false})
  cy.get('#passwd').type((Cypress.env('demopassword')),{delay: 0, log: false})
  cy.get('#submit_login').click()
  cy.get('#subtab-AdminMollieModule > .link > span').click()
})
Cypress.Commands.add("mollie_16124_test_faster_login_DE_Orders_Api", () => {
  cy.visit('https://demo.invertus.eu/clients/mollie16-test/en/login?back=my-account')
  cy.get('#email').type((Cypress.env('FO_username')),{delay: 0, log: false})
  cy.get('#passwd').type((Cypress.env('FO_password')),{delay: 0, log: false})
  cy.get('#SubmitLogin > span').click()
  cy.visit('https://demo.invertus.eu/clients/mollie16-test/en/home/10-test1.html')
  cy.get('.exclusive > span').click()
  cy.get('.button-medium > span').click()
})
Cypress.Commands.add("mollie_16124_test_faster_login_DE_Payments_Api", () => {
  cy.visit('https://demo.invertus.eu/clients/mollie16-test/en/login?back=my-account')
  cy.get('#email').type((Cypress.env('FO_username')),{delay: 0, log: false})
  cy.get('#passwd').type((Cypress.env('FO_password')),{delay: 0, log: false})
  cy.get('#SubmitLogin > span').click()
  cy.visit('https://demo.invertus.eu/clients/mollie16-test/en/home/9-test1.html')
  cy.get('.exclusive > span').click()
  cy.get('.button-medium > span').click()
})
Cypress.Commands.add("mollie_1770_test_faster_login_DE_Orders_Api", () => {
  cy.visit('https://mollie1770test.invertusdemo.com/en/login?back=my-account')
  cy.get('.col-md-6 > .form-control').type((Cypress.env('FO_username')),{delay: 0, log: false})
  cy.get('.input-group > .form-control').type((Cypress.env('FO_password')),{delay: 0, log: false})
  cy.get('#submit-login').click()
  cy.visit('https://mollie1770test.invertusdemo.com/en/women/2-brown-bear-printed-sweater.html')
  cy.get('.add > .btn').click()
  cy.get('.cart-content-btn > .btn-primary').click()
  cy.get('.text-sm-center > .btn').click()
})
Cypress.Commands.add("mollie_1770_test_faster_login_DE_Payments_Api", () => {
  cy.visit('https://mollie1770test.invertusdemo.com/en/login?back=my-account')
  cy.get('.col-md-6 > .form-control').type((Cypress.env('FO_username')),{delay: 0, log: false})
  cy.get('.input-group > .form-control').type((Cypress.env('FO_password')),{delay: 0, log: false})
  cy.get('#submit-login').click()
  cy.visit('https://mollie1770test.invertusdemo.com/en/men/1-hummingbird-printed-t-shirt.html')
  cy.get('.add > .btn').click()
  cy.get('.cart-content-btn > .btn-primary').click()
  cy.get('.text-sm-center > .btn').click()
})
Cypress.Commands.add("mollie_1752_test_faster_login_DE_Payments_Api", () => {
   cy.visit('https://demo.invertus.eu/clients/mollie17-test/en/login?back=my-account')
   cy.get('.col-md-6 > .form-control').type((Cypress.env('FO_username')),{delay: 0, log: false})
   cy.get('.input-group > .form-control').type((Cypress.env('FO_password')),{delay: 0, log: false})
   cy.get('#submit-login').click()
   cy.visit('https://demo.invertus.eu/clients/mollie17-test/en/home/20-testproduct1.html')
   cy.get('.add > .btn').click()
   cy.get('.cart-content-btn > .btn-primary').click()
   cy.get('.text-sm-center > .btn').click()
 })
 Cypress.Commands.add("mollie_1752_test_faster_login_DE_Orders_Api", () => {
    cy.visit('https://demo.invertus.eu/clients/mollie17-test/en/login?back=my-account')
    cy.get('.col-md-6 > .form-control').type((Cypress.env('FO_username')),{delay: 0, log: false})
    cy.get('.input-group > .form-control').type((Cypress.env('FO_password')),{delay: 0, log: false})
    cy.get('#submit-login').click()
    cy.visit('https://demo.invertus.eu/clients/mollie17-test/en/home/21-testproduct1.html')
    cy.get('.add > .btn').click()
    cy.get('.cart-content-btn > .btn-primary').click()
    cy.get('.text-sm-center > .btn').click()
  })
 Cypress.Commands.add("square_PS16_BO_login", () => {
 cy.visit('https://square16.invertusdemo.com/admin1/')
 Cypress.env()
 cy.get('#email').type((Cypress.env('demousername')),{delay: 0, log: false})
 cy.get('#passwd').type((Cypress.env('demopassword')),{delay: 0, log: false})
 cy.get('#submit_login').click().wait(1000)
 cy.visit('https://square16.invertusdemo.com/admin1/index.php?controller=AdminSquareSettings')
 cy.get('.btn-continue').click()
  })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
