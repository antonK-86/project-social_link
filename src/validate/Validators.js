export const required = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLength = (max) => (value) => {
  if (value && value.length > max) return `Must be ${max} simbols or less`;
  return undefined;
};

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} simbols or more` : undefined;
