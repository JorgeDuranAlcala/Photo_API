import { Router } from "express"
import { registerUser, loginUser } from "../controllers/auth.control"
import post from "../controllers/post.control"
import verify from "../controllers/verify.control"
import verifyToken from "../middlewares/verify-token"
const router = Router()

router.route('/post')
.get(verifyToken,post)

router.route('/register')
.post(registerUser)

router.route('/login')
.post(loginUser)

export default router