import * as Yup from 'yup';

const featurePropertieSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),
  
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be a positive number')
    .min(1, 'Price must be at least 1'),
   city:Yup.string()
       .required('city is requied'),
  
  room: Yup.string()
    .required('Room is required')
    .min(1, 'Room must be at least 1 character'),
  
  sm: Yup.string()
    .required('SM is required')
    .min(1, 'SM must be at least 1 character'),
  
  bathroom: Yup.string()
    .required('Bathroom is required')
    .min(1, 'Bathroom must be at least 1 character'),
});

export default featurePropertieSchema;
