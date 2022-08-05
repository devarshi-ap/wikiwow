describe('My name is Giovanni Giorgio...', () => {
    it('but everybody calls me Giorgio', () => {
        cy.visit('http://localhost:3000');

        const months = ['JAN.', 'FEB.', 'MAR.', 'APR.', 'MAY', 'JUN.', 'JUL.', 'AUG.', 'SEP.', 'OCT.', 'NOV.', 'DEC.']
        const days = []

        // populate above arrays

        for (var i = 1; i <= 31; i++) {
            days.push(i.toString());
        }

        // select random date values

        let randMonth = months[Math.floor(Math.random() * 12)]
        let randDay = days[Math.floor(Math.random() * 31)]

        // fill out form
        
        cy.get('[data-cy="evnt-mm"]').select(randMonth)
        cy.get('[data-cy="evnt-dd"]').type(randDay)

        // submit form & wait 3s for data fetch
        
        cy.get('[data-cy="evnt-submit"]').click()
        cy.clock().tick(3000)

        // click on 'see more' then 'see all'

        cy.get('[data-cy="evnt-see_more"]').click()
        cy.get('[data-cy="evnt-see_all"]').click()

        // click on jump2to text

        cy.get('[data-cy="evnt-jump2top"]').click()

    });
});
