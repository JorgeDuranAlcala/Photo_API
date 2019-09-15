import { Request, Response } from "express";
import Photo from "../models/Photo";

export async function allPhotos(req:Request, res: Response): Promise<Response> {
    const photo = await Photo.find();
    return res.send(photo)
}

export async function addPhoto(req:Request, res: Response) {
    const { title, description, imagePath} = req.body;

    const photo = {
        title,
        description,
        imagePath
    }
        res.json({
        photo,
        message: "Your photo is upload yet!!"
    })
}