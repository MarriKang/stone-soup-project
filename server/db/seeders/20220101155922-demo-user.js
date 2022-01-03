'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Users', [
      {
        id:  1,
        firstName: 'Marri',
        lastName: 'Kang',
        email: 'myemail@site.com',
        password: 'mypassword',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id:  2,
        firstName: 'John',
        lastName: 'Smith',
        email: 'johnsmith@site.com',
        password: 'johnspassword',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id:  3,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@site.com',
        password: 'janespassword',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id:  4,
        firstName: 'Areum',
        lastName: 'Kang',
        email: 'areum@site.com',
        password: 'areumspassword',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
