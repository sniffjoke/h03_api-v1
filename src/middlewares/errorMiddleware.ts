import {Post} from "../interfaces/post.interface";
import {Blog} from "../interfaces/blog.interface";
import {validationResult} from "express-validator";
import {Request, Response, NextFunction} from "express";

export type FieldNamesType = keyof Blog | keyof Post
export type OutputErrorsType = {
    errorsMessages: {
        message: string,
        field: FieldNamesType}[]
}


export const errorMiddleware = (req: Request, res: Response<OutputErrorsType>, next: NextFunction) => {
    const e = validationResult(req)
    if (!e.isEmpty()) {
        const eArray = e.array({onlyFirstError: true}) as { path: FieldNamesType, msg: string }[]
        console.log(eArray)
        res
            // .status(eArray && eArray[0].path === 'name' ? 400 : 404)
            .status(eArray && eArray.find(x => x.msg === 'Блог с заданным id не найден!') ? 404 : 400)
            .json({
                errorsMessages: eArray.map(x => ({field: x.path, message: x.msg}))
            })
        return
    }
    next()
}
