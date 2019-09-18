import  joi  from "@hapi/joi";
import  { IUser } from "../models/User";



    const schemaR = joi.object({
        username: joi.string()
            .min(6)
            .required(),
        email: joi.string()
            .min(6)
            .required(),
        password: joi.string()
            .min(6)
            .required()
    })

    const schemaL = joi.object({
        email: joi.string()
            .min(6)
            .required(),
        password: joi.string()
            .min(6)
            .required()
    })

    export { schemaL, schemaR }




