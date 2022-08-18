import createUserRepository from "~/api/user.js";
export default (ctx, inject) => {
  const user = createUserRepository(ctx.$axios, ctx.env);
  const repository = {
    user: user("user"),
  };
  inject("repository", repository);
};
