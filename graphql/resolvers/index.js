import postsResolvers from "./posts.js";
import usersResolvers from "./users.js";
import commentsResolver from "./comments.js";
import likesresolver from "./likes.js";

const resolvers = {
  Post: {
    likeCount(parent) {
      console.log(parent);

      return parent.likes.length;
    },
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolver.Mutation,
    ...likesresolver.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};

export default resolvers;
