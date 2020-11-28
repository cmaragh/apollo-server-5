const randomString = require("randomstring");

const resolvers = {
  Query: {
    async allLinks(root, args, { models }) {
      return models.Link.findAll();
    }
  },

  Mutation: {
    async createLink(root, { url, slug }, { models }) {
      return models.Link.create({
        url,
        slug: (await slug) === "" ? randomString.generate(4) : slug
      });
    }
  }
};

module.exports = resolvers;
