import { z } from 'zod';

const fullNameSchema = z.string().min(2).max(255);
const emailSchema = z.string().email();
const messageSchema = z.string().min(10);
const phoneSchema = z.string().optional().refine(val => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/;
  return phoneRegex.test(val!);
});

const validateUserInputString = (zodStringSchema:z.ZodString, userInput:string) => {
    const validationResult = zodStringSchema.safeParse(userInput);
    return validationResult.success;
}

export const validateFullName = (userInput:string) => {
    return validateUserInputString(fullNameSchema, userInput)
}

export const validateEmail = (userInput:string) => {
    return validateUserInputString(emailSchema, userInput)
}

export const validateContactUsMessge = (userInput:string) => {
    return validateUserInputString(messageSchema, userInput)
}

export const validatePhone = (userInput:string) => {
    const validationResult = phoneSchema.safeParse(userInput);
    return validationResult.success;
}