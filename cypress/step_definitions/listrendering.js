/* global Given, When, Then, cy */

Given(/I see that there are "([^"]*)" listings on one row on (desktop|tablet|mobile)/, (screen, device) => {
  const viewport = device === 'desktop' 
                    ? 'macbook-13'
                    : device === 'tablet'
                      ? 'ipad-2'
                      : 'iphone-x'; 
  // desktop screen
  cy.viewport(viewport);

  // get the first listing
  cy.get('[data-test-id="estate-item-0"]').then($item1 => {
    let coordsCompare1 = $item1[0].getBoundingClientRect();
    let coordsCompare2 = null;

    // if desktop
    if (device === 'desktop') {
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
    }

    // if tablet
    if (device === 'tablet') {
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
    }

    // if mobile
    if (device === 'mobile') {
      // compare with second listing
      cy.get('[data-test-id="estate-item-1"]').then($item2 => {
        let coordsCompare2 = $item2[0].getBoundingClientRect();

        expect(coordsCompare1.y).to.not.equal(coordsCompare2.y);
      });
    }
      
  });
});