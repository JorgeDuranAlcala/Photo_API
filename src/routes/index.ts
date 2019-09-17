import { Router } from "express";
import { allPhotos, addPhoto, getPhoto, deletePhoto, updatePhoto } from "../controllers/photos.control";
import multer from "../libs/multer";
const router = Router()

router.route('/photos')
.get(allPhotos)
.post(multer.single('image'), addPhoto)

router.route('/photos/:id')
.get(getPhoto)
.delete(deletePhoto)
.put(updatePhoto)

export default router
