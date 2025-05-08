import * as Yup from 'yup';

const featurePropertieSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  
  price: Yup.number()
    .required('Price is required')
    ,
   city:Yup.string()
       .required('city is requied'),
  
  room: Yup.string()
    .required('Room is required'),
  
  sm: Yup.string()
    .required('SM is required'),
 
  
  bathroom: Yup.string()
    .required('Bathroom is required'),
});

export default featurePropertieSchema;
