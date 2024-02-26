describe("Herokuapp", () => {
  let tests = [
    { testName: "Test1", email: "oleg.pron.000@gmail.com", password: "password000" },
    { testName: "Test2", email: "oleg.pron.111@@gmail.com", password: "Пароль Кирилиця" },
    { testName: "Test3", email: "oleg.pron.111gmail.com", password: "%:*(№(вв)(" }
  ];

  tests.forEach(testItem => {
    it(`Perform search with text: ${testItem.testName}`, () => {
      cy.visit("https://sanitarskyi-ngx-admin.herokuapp.com");
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[class="menu-title ng-tns-c141-9"]').click();
      cy.get('[class="menu-title ng-tns-c141-11"]').click();
      cy.get('[id="inputEmail1"]').type(testItem.email);
      cy.get('[id="inputPassword2"]').type(testItem.password);
      
    });
  });
});