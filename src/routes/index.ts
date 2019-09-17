import { Router } from "express";
import { allPhotos, addPhoto, getPhoto, deletePhoto, updatePhoto } from "../controllers/photos.control";
import multer from "../libs/multer";
import { registerUser } from "../controllers/users.control";
const router = Router()

router.route('/photos')
.get(allPhotos)
.post(multer.single('image'), addPhoto)

router.route('/photos/:id')
.get(getPhoto)
.delete(deletePhoto)
.put(updatePhoto)

router.route('/register')
.post(registerUser)

export default router
