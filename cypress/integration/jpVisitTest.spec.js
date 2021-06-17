describe('test mojej witryny', () => {
  it('Opens jakubpniak.com page', () => {
     const myPage = 'http://www.jakubpniak.com/'
     cy.visit(myPage)
     cy.url().should('include', myPage);

   })
  
  
  it('tests whether navigation works well', () => {
     cy.pause()

     cy.get('a').contains('START')
      .should('be.visible')
      .click()
     cy.get('a').contains('O MNIE')
      .should('be.visible')
      .click()
     cy.get('a').contains('PORTFOLIO')
      .should('be.visible')
      .click()
     cy.get('a').contains('KONTAKT')
      .should('be.visible')
      .click()
    
    
  })
  
  
  it('tests whether form works well', () => {
    
   
  // this event will automatically be unbound when this
  // test ends because it's attached to 'cy'
  /*cy.on('uncaught:exception', (err, runnable) => {
    expect(err.message).to.include('something about the error')

    // using mocha's async done callback to finish
    // this test so we prove that an uncaught exception
    // was thrown

    // return false to prevent the error from
    // failing this test
    return false
  })*/
       
    
    //sprawdza pole formularza z imieniem
    cy.get('input[id="name"]')
      .should('be.visible')
      .type('test')
    
    //sprawdza pole formularza z nr telefonu
    cy.get('input[id="phone"]')
      .should('be.visible')
      .type('123456789')
    
    //sprawdza pole formularza z adresem email
    cy.get('input[id="email"]')
      .should('be.visible')
      .type('test@o2.pl')
    
    //sprawdza pole formularza z treścią wiadomości
    cy.get('textarea')
      .should('be.visible')
      .type('wiadomosc testowa')
    
    //sprawdza przycisk Wyślij
    cy.get('button[id="sendBtn"]')
      .should('be.visible')
      .click()
    
    //sprawdza czy formularz został wysłany
    cy.get('p.status_ok').contains('Twój formularz został pomyślnie wysłany.')
      .should('be.visible')
    
    
    
    
  })
  
  
  
  
 })