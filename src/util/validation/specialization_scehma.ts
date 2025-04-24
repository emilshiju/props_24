

import * as Yup from 'yup';

const specializationSchema = Yup.object({
  title: Yup.string()
    .required('title is required')
    .min(2, 'specialization name must be  2 characters'),
  description: Yup.string()
    .required('description is required')
    .min(2, 'specialization name must be 2 characters'),
});

export default specializationSchema
