import { Router } from "express";
import { allPhotos, addPhoto, getPhoto, deletePhoto, updatePhoto } from "../controllers/photos.control";
import multer from "../libs/multer";
import multerUpdate from "../libs/multerUpdate"
import verifyToken  from "../middlewares/verify-token";
const router = Router()

router.route('/photos')
.get(verifyToken,allPhotos)
.post(multer.single('image'), addPhoto)

router.route('/photos/:id')
.get(getPhoto)
.delete(deletePhoto)
.put(multerUpdate.single('image'), updatePhoto)


export default router
