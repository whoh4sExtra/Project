const { register, login, getAllUsers } = require("../controllers/userController")
const { SendMsg, AllMsg } = require("../controllers/chatController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allusers/:id", getAllUsers)

router.post("/SendMsg/", SendMsg);
router.post("/AllMsg/", AllMsg);

module.exports = router;