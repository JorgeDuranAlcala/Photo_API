import { Router } from "express"
import { registerUser, loginUser } from "../controllers/auth.control"
import post from "../controllers/post.control"
import verify from "../controllers/verify.control"
const router = Router()

router.route('/post')
.get(verify,post)

router.route('/register')
.post(registerUser)

router.route('/login')
.post(loginUser)

export default router