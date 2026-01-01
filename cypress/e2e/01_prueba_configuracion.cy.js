describe('Prueba inicial de configuracion', () => {

    it('Visita mi gitHub', () => {
        cy.visit('https://github.com/jjcruz99');
        cy.log("Visitar mi GitHub sin problemas")
    });

});