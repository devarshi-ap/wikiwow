describe('Test Incorrect Date Input', () => {
    it('should see alert', () => {
        cy.visit('http://localhost:3000');

        // test parameter arrays are 1-to-1 ie. Jan 1st, Feb 2nd, ..., Dec 12th

        const months = ['JAN.', 'FEB.', 'MAR.', 'APR.', 'MAY', 'JUN.', 'JUL.', 'AUG.', 'SEP.', 'OCT.', 'NOV.', 'DEC.']
        const days = []
        for (var i = 1; i <= 12; i++) {
            days.push(i.toString());
        }
        const firstEvnt = ['Roman consul', 'Alaric II', 'Gundobad', 'Roman consul', 'Second Council of Constantinople', '913', 'Tyre, Lebanon', 'Treaty of Meerssen', 'Arminius', 'Battle of Karbala', 'Carnuntum', 'Battle of Nineveh (627)']


        for(let i=0; i < months.length; i++) {

            // select month from above array, and its corresponding invalid day input
            
            let month_in = months[i]
            let day_in = days[i]

            // skip the following months because of a title-description discrepancy
            if (month_in == 'JUN.' || month_in == 'JUL.' || month_in == 'DEC.') {
                continue;
            }

            // fill out form
        
            cy.get('[data-cy="evnt-mm"]').select(month_in)
            cy.get('[data-cy="evnt-dd"]').type(day_in)

             // submit form & wait 3s for data fetch
        
            cy.get('[data-cy="evnt-submit"]').click()
            cy.clock().tick(3000)

            // expect 5 results, with the first being from the firstEvnt arr

            cy.get('[data-cy="num-query_results"]').contains(5)
            cy.get('[data-cy="evnt-list"]').eq(0).get('[data-cy="evnt-title"]').eq(0).should('have.text', firstEvnt[i])

            // searchbar first result and expect # query results to be 1
            cy.get('[data-cy="evnt-querybar"]').type(firstEvnt[i])
            cy.get('[data-cy="num-query_results"]').should('have.text', '1 result')

            // clean up time baby
            
            cy.get('[data-cy="evnt-dd"]').clear()
            cy.get('[data-cy="evnt-querybar"]').clear()
        }

    });
});
