/**
 * Yup schemas to validate objects
 */

import { InferType, object, string } from 'yup';

export type UserInput = InferType<typeof userSchema>;
export type Credentials = InferType<typeof credentialsSchema>;

/**
 * Schema to validate when an user wants to create an account
 */
export const userSchema = object({
  username: string().required('Username is required'),
  email: string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

/**
 * Schema to validate when an user wants to log in
 */
export const credentialsSchema = userSchema.pick(['email', 'password']);
