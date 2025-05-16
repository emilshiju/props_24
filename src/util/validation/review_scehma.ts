

import * as Yup from 'yup';


export const userReviewSchema=Yup.object({
    name: Yup.string()
        .required('name is required'),
    content:Yup.string()
        .required('content is required'),
})