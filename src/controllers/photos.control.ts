import { Request, Response } from "express";
import Photo from "../models/Photo";

export async function allPhotos(req:Request, res: Response): Promise<Response> {
    const photo = await Photo.find();
    return res.send(photo)
}

export async function getPhoto(req:Request, res: Response): Promise<Response> {

    const { id } = req.params;

    const photo = await Photo.findById(id, err => console.log(err))

    return res.json(
        photo
    )
}

export async function addPhoto(req:Request, res: Response): Promise<Response> {
    const { title, description } = req.body;

    const file = {
        title: title,
        description: description,
        imagePath: req.file.path
    }

    const newPhoto = new Photo(file)
    await newPhoto.save()

       return res.json({
        newPhoto,
        message: "Your photo is upload yet!!"
    })

}

export async function deletePhoto(req:Request, res: Response): Promise<Response> {

        const { id } = req.params;
        
        const dltPhoto = await Photo.findByIdAndRemove(id, err => console.log(err));
        
        return res.json({
            message:"Your photo has been deleted",
            dltPhoto
        })
    }
    
    export async function updatePhoto(req:Request,res:Response) {
    
        const { id } = req.params;
        const { title, description} = req.body
        const { path } = req.file
        try {
            const updated = await Photo.findByIdAndUpdate(id, { title, description, path } ,err => console.log(err))
            return res.json(
                updated
                )
        } catch(error) {
            console.log(error)
        }

}