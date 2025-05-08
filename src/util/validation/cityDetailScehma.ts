import * as Yup from 'yup';



const  detailedCityValidationSchema = Yup.object().shape({
  city:Yup.string()
       .required('city is requied'),
  details: Yup.object().shape({
    averagePrice: Yup.string()
      .required('Average price is required'),
      // .matches(/^\d+$/, 'Average price must be a number'),
    popularity: Yup.string()
      .required('Popularity is required'),
      // .matches(/^[A-Za-z]+$/, 'Popularity must contain only alphabetic characters'),
    availableProperties: Yup.string()
      .required('Available properties is required'),
      // .matches(/^\d+$/, 'Must be a valid number'),
    description: Yup.string()
      .required('Description is required'),
      // .min(240, 'Description must be at least 240 characters')
      
  }),
  about: Yup.object().shape({
    content: Yup.string()
      .required('About content is required')
      .min(800, 'About content must be at least 800 characters')
  }),

  image: Yup.mixed()
  .required('Image is required')
  .test('fileExists', 'Image is required', (value) => {
    return value !== null && value !== undefined;
  })
  .test('fileSize', 'File size too large (max 6MB)', (value) => {
    if (typeof value === 'string') return true;
    if (!value) return true; // Skip if no file
    const file = value as File;
    return file.size <= 6 * 1024 * 1024;
  })
  .test('fileType', 'Unsupported file format', (value) => {
    if (typeof value === 'string') return true;
    if (!value) return true; // Skip if no file
    const file = value as File;
    return ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(file.type);
  }),

  areas: Yup.array().of(
    Yup.object().shape({
      heading: Yup.string()
        .required('Area heading is required')
        .max(50, 'Heading cannot exceed 50 characters'),
      content: Yup.string()
        .required('Area content is required')
        .min(10, 'Area content must be at least 10 characters')
    })
  ),
  types: Yup.array().of(
    Yup.object().shape({
      heading: Yup.string()
        .required('Type heading is required')
        .max(50, 'Heading cannot exceed 50 characters'),
      content: Yup.string()
        .required('Type content is required')
        .min(10, 'Type content must be at least 20 characters'),
      price: Yup.string()
        .required('Price is required'),
          })
  )
});

export default detailedCityValidationSchema