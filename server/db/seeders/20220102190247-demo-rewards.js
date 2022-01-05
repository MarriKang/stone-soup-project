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

     return queryInterface.bulkInsert('Rewards', [
      {
        id: 1,
        price: 25,
        description: "You will receive a digital copy of the movie.",
        ProjectId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        price: 50,
        description: "A digital copy of the movie, as well as a copy of the soundtrack.",
        ProjectId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 3,
        price: 1000,
        description: "We send you an actual cat that can play the trumpet.",
        ProjectId: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 4,
        price: 10,
        description: "You will receive a digital copy of the game.",
        ProjectId: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 5,
        price: 500,
        description: "A copy of the game, as well as a Sega Genesis to play it on.",
        ProjectId: 2,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 6,
        price: 25,
        description: "We send you a copy of the book.",
        ProjectId: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 7,
        price: 45,
        description: "A copy of the book, as well as the original manuscript.",
        ProjectId: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 8,
        price: 20000,
        description: "The cat from the book comes alive and makes you a five course meal.",
        ProjectId: 3,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 9,
        price: 20000,
        description: "You don't even get anything. You just pay.",
        ProjectId: 4,
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
     return queryInterface.bulkDelete('Rewards', null, {});
  }
};
