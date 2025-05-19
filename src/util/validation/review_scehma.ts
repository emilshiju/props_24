

import * as Yup from 'yup';


export const userReviewSchema=Yup.object({
    name: Yup.string()
        .required('name is required'),
    content:Yup.string()
        .required('content is required'),
})

export const adminUserReviewSchema=Yup.object({
    name: Yup.string()
        .required('name is required'),
    content:Yup.string()
        .required('content is required'),
    profileId:Yup.string()
        .required('field is requied'),
    rating:Yup.string()
    .required('field is requied'),
})