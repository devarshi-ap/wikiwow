describe('Test Incorrect Date Input', () => {
    it('should see alert', () => {
        cy.visit('http://localhost:3000');

        // HTML number input tag already limits between 1-31
        // this test case takes into true negative inputs like Feb 31, which the UI allows, but is invalid in the API call.
        const months = ['FEB.', 'APR.', 'JUN.', 'SEP.', 'NOV.']
        const days = [30, 31, 31, 31, 31]

        for(let i=0; i < months.length; i++) {
            
            // select month from above array, and its corresponding invalid day input
            
            let month_in = months[i]
            let day_in = days[i]

            // fill out form
        
            cy.get('[data-cy="evnt-mm"]').select(month_in)
            cy.get('[data-cy="evnt-dd"]').type(day_in)

             // submit form & wait 3s for data fetch
        
            cy.get('[data-cy="evnt-submit"]').click()
            cy.clock().tick(3000)

            // expect alert window

            cy.on('window:alert', (str) => {
                expect(str).to.equal('Input Valid Date!')
            })

            // clean up time baby
            
            cy.get('[data-cy="evnt-dd"]').clear()
        }

    });
});
