import {body, param} from "express-validator";
import blogService from "../services/blogService";
import {Post} from "../interfaces/post.interface";
import postService from "../services/postService";

export const titlePostValidator = body('title')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 30}).withMessage('Количество знаков 1-30')

export const contentPostValidator = body('content')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 1000}).withMessage('Количество знаков: 1-1000')

export const shortDescriptionPostValidator = body('shortDescription')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 100}).withMessage('Количество знаков: 1-100')

export const blogIdValidator = body('blogId')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .custom(async blogId => {
        const blog = await blogService.findBlogById(blogId)
        if (blog) {
        return !!blog
        } else {
            throw new Error('Not found')
        }
    }).withMessage('Блог не найден!')
    .isLength({min: 1})

export const idPostValidator = param('id')
    .custom(async postId => {
        const post: Post | null = await postService.findPostById(postId)
        if (!post) {
            throw new Error('Not found')
        } else {
            return !!post
        }
        // return !!blog
    }).withMessage('Пост с заданным id не найден!')

