context('',() => {
	it('Efetuar uma compra de produto', () => {
		cy.visit('/');	
		let nomeProduto = 'Faded Short Sleeve T-shirts';
		cy.contains(nomeProduto).trigger('mouseover');
		cy.contains(nomeProduto).parent().siblings('div.button-container').children('a').first().click()
		cy.get(".button-container a[href$='controller=order']").click;
		cy.get(".cart_navigation a[href$='controller=order&step=1']").click();
		cy.get('#mail').type('semana-agilizei@mail.com');
		cy.get('#passwd').type('12345');
		cy.get('buttonSubmitLogin').click();
		cy.get('button[name=processAddress]').click();
		cy.get('[type=checkbox]#cgv').check();
		cy.get('button[name=processCarrier]').click();
		cy.get('.bankwire').click();
		cy.get('.cart_navigation button[type=submit]').find('span').contains('I confirm my order').click();
		cy.get('.cheque-ident strong').should('contain.text', 'Your order on My Store is complete.')
	});

});