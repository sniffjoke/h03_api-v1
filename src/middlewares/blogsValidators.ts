import {body} from "express-validator";


export const nameBlogValidator = body('name')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 15}).withMessage('Количество знаков 1-15')

export const descriptionBlogValidator = body('description')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isLength({min: 1, max: 500}).withMessage('Количество знаков: 1-500')

export const websiteUrlValidator = body('websiteUrl')
    .isString().withMessage('Должно быть строковым значением')
    .trim()
    .isURL().withMessage('Введите валидный URL')
    .isLength({min: 1, max: 100}).withMessage('Количество знаков 1-100')
