import { Router } from "express";
import { allPhotos, addPhoto } from "../controllers/photoControl";
const router = Router()

router.route('/photos')
.get(allPhotos)
.post(addPhoto)

export default router
