import React, { useState } from 'react';
import * as Yup from 'yup';

const profileSchema = Yup.object({

  businessName: Yup.string()
    .min(3, 'User ID must be at least 3 characters')
    .max(20, 'User ID must not exceed 20 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'User ID can only contain letters, numbers, and underscores')
    .required('User ID is required'),

  phone: Yup.string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      'Please enter a valid phone number (10 digits)'
    )
    .required('Phone number is required'),

  licenseNumber: Yup.string()
    .min(6, 'License number must be at least 6 characters')
    .max(20, 'License number must not exceed 20 characters')
    .matches(/^[A-Z0-9-]+$/, 'License number can only contain uppercase letters, numbers, and hyphens')
    .required('License number is required'),

  specialization: Yup.string()
    .min(3, 'Specialization must be at least 3 characters')
    .max(50, 'Specialization must not exceed 50 characters')
    .required('Specialization is required'),

  bio: Yup.string()
    .min(10, 'Bio must be at least 10 characters')
    .max(500, 'Bio must not exceed 500 characters')
    .required('Bio is required'),
});


export default profileSchema