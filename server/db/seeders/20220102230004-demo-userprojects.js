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
     return queryInterface.bulkInsert('User_Projects', [
      {
        ProjectId: 1,
        UserId: 4,
        amntPaid: 1025,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        ProjectId: 2,
        UserId: 3,
        amntPaid: 10,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        ProjectId: 3,
        UserId: 1,
        amntPaid: 25,
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
     return queryInterface.bulkDelete('User_Projects', null, {});
  }
};
