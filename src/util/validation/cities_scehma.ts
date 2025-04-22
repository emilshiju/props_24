import * as Yup from 'yup';

const citySchema = Yup.object({
  city: Yup.string()
    .required('City is required')
    .min(2, 'City name must be at least 2 characters'),
  country: Yup.string()
    .required('Country is required')
    .min(2, 'Country name must be at least 2 characters'),
});

export default citySchema;
