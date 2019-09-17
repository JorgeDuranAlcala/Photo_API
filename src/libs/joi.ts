import  joi  from "@hapi/joi";
import  { User } from "../models/User";



    const schema = joi.object({
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

    export default schema




