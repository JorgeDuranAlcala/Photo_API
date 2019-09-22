import { Router } from "express";
import { allPhotos, addPhoto, getPhoto, deletePhoto, updatePhoto } from "../controllers/photos.control";
import multer from "../libs/multer";
import multerUpdate from "../libs/multerUpdate"
const router = Router()

router.route('/photos')
.get(allPhotos)
.post(multer.single('image'), addPhoto)

router.route('/photos/:id')
.get(getPhoto)
.delete(deletePhoto)
.put(multerUpdate.single('image'), updatePhoto)


export default router
