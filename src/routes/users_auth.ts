import { Router } from "express"
import { registerUser, loginUser, getProfile } from "../controllers/auth.control"
import verifyToken from "../middlewares/verify-token"
const router = Router()

router.route('/profile')
.get(verifyToken, getProfile)

router.route('/register')
.post(registerUser)



router.route('/login')
.post(loginUser)

export default router