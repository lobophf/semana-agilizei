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
// Cypress.Commands.add("login", (email, password) => { ... })
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
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
	cy.setCookie(
		'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
			'R6xmma6F4U6edNQuu67M0sF74EIOeYh%2F3UqLR6z0ZYqEPqQ%2FL%2F6rzkjf47EztOVsPcuxhUoa3S3U2g1Rza7TQkfyMSnPfhsRtHFtkThBLpjPLobEOxnIooNKcMNsxHUuDJg2%2FE%2FN29Ipz9gLVEV9pEsPZ1hN4iWDgzXnlan0YvtAAtNsAG2gMGRuyWpadidpxbvs2WHkyAzqj5nRHBU03PBF1i9x9mffpqgwdlUDzqGOdzq4ugPZBPfpupnFUTovYIYZQ1uHNoJP9l15maoXapG6qrGlH3xN0yToXCyB%2FNjo2PRQHjzIc%2FYVfrZ%2FdzZVeWfIpccwBxKYMS%2BT6HK1mNwNZIqEknFzq6%2B%2Fb7ek4rIkAzhtFTTBCncc6KlKcl1HTIyNsafztQ%2BZkpyhJenfaQIpA7COVM%2BjRJBveF%2BdPV0dbGzAvhcphqUbHGtfBkv7IdeVVmLFNiQHr4qbfpi96sqBAKpEnKbWg%2FMIB14XPMM%3D000355'
	)
});
