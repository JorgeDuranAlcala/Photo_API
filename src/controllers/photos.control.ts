import { Request, Response } from "express";
import Photo from "../models/Photo";


export async function allPhotos(req:Request, res: Response): Promise<Response> {
    const photo = await Photo.find();
    return res.json(photo)
}

export async function getPhotoUser(req:Request | any, res: Response): Promise<Response> {

        const user = req.user_id;
        
        const photoU = await Photo.find({user});

        return res.json(photoU)
}

export async function getPhoto(req:Request, res: Response): Promise<Response> {

    const { id } = req.params;

    const photo = await Photo.findById(id, err => console.log(err))

    return res.json(
        photo
    )
}

export async function addPhoto(req:Request | any, res: Response): Promise<Response> {
    const { title, description } = req.body;
    const file = {
        title: title,
        description: description,
        imagePath: req.file.path,
        user: req["user_id"]
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
        let { title, description} = req.body
        const h = req.file
        let imgP
        const f = await Photo.findById(id)
            if (h === undefined || h === null ) {
                for(let key in f) {
                    imgP = f.get('imagePath')
                    const updated = await Photo.findByIdAndUpdate(id, { title, description, imagePath: imgP }, err => console.log(err))
                    return res.json(updated)
                }
            } else {
                imgP = req.file.path
                const updated = await Photo.findByIdAndUpdate(id, { title, description , imagePath: imgP  } ,err => console.log(err))
                return res.json({ updated, imgP })  
            }
}
