/* global Given, When, Then, cy */

Given(/I see that there are "([^"]*)" listings on one row on desktop/, screen => {
  // desktop screen
  cy.viewport('macbook-13');

  // get the first listing
  cy.get('[data-test-id="estate-item-0"]').then($item1 => {
    let coordsCompare1 = $item1[0].getBoundingClientRect();
    let coordsCompare2 = null;
    
    // compare it with fourth listing
    cy.get('[data-test-id="estate-item-3"]').then($item4 => {
      coordsCompare2 = $item4[0].getBoundingClientRect();

      expect(coordsCompare1.y).to.equal(coordsCompare2.y);
    });

    // compare it with fifth listing
    cy.get('[data-test-id="estate-item-4"]').then($item5 => {
      coordsCompare2 = $item5[0].getBoundingClientRect();

      expect(coordsCompare1.y).to.not.equal(coordsCompare2.y);
    });
  
  });
});

Given(/I see that there are "([^"]*)" listings on one row on tablet/, screen => {
  // desktop screen
  cy.viewport('ipad-2');

  // get the first listing
  cy.get('[data-test-id="estate-item-0"]').then($item1 => {
    let coordsCompare1 = $item1[0].getBoundingClientRect();
    let coordsCompare2 = null;

    // compare it with third listing
    cy.get('[data-test-id="estate-item-2"]').then($item3 => {
      coordsCompare2 = $item3[0].getBoundingClientRect();

      expect(coordsCompare1.y).to.equal(coordsCompare2.y);
    });

    // compare it with fourth listing
    cy.get('[data-test-id="estate-item-3"]').then($item4 => {
      coordsCompare2 = $item4[0].getBoundingClientRect();

      expect(coordsCompare1.y).to.not.equal(coordsCompare2.y);
    });
  
  });
});

Given(/I see that there are "([^"]*)" listings on one row on mobile/, screen => {
  // desktop screen
  cy.viewport('iphone-x');

  // get the first listing
  cy.get('[data-test-id="estate-item-0"]').then($item1 => {
    let coordsCompare1 = $item1[0].getBoundingClientRect();

    // get the second listing
    cy.get('[data-test-id="estate-item-1"]').then($item2 => {
      let coordsCompare2 = $item2[0].getBoundingClientRect();

      expect(coordsCompare1.y).to.not.equal(coordsCompare2.y);
    });
  
  });
});
