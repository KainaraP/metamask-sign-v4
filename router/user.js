const UserController = require("../controller/user");
// const authMiddleware = require("../middleware/auth");


module.exports = (router) => {
  router.post("/users/login", UserController.logIn);

  router.post("/users/signup", UserController.signUp);

  router.post("/users/nonce", UserController.nonce);
  router.post("/users/authMetamask", UserController.authMetamask);

  // router.patch("/users/profile", authMiddleware.auth, UserController.updateProfile);
}

