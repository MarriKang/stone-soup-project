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
     return queryInterface.bulkInsert('Projects', [
      {
        id: 1,
        creatorId: 1,
        creatorName: "Marri Kang",
        title: "Jazz for Cats",
        currFunds: 1025,
        goal: 10000,
        description: "A movie about a cat that learns how to play the trumpet. Inspiring.",
        status: "in-progress",
        imageURL: 'pretend-im-a-url',
        type: "film",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        creatorId: 2,
        creatorName: "John Smith",
        title: "Jazz for Cats 2",
        currFunds: 10,
        goal: 10000,
        description: "The sequel to the movie where a cat learns how to play the trumpet. And it's a videogame this time.",
        status: "in-progress",
        imageURL: 'pretend-im-a-url',
        type: "game",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 3,
        creatorId: 2,
        creatorName: "John Smith",
        title: "Jazz for Cats 3",
        currFunds: 0,
        goal: 10000,
        description: "The sequel to the game that was the sequel to the movie where a cat learns how to play the trumpet. In novel form.",
        status: "in-progress",
        imageURL: 'pretend-im-a-url',
        type: "book",
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
     return queryInterface.bulkDelete('Projects', null, {});
  }
};
