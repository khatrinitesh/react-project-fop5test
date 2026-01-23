export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePassword = (password) => password.length >= 6;

export const isAdminCredentials = (email, password) =>
  email === "admin@example.com" && password === "admin123";
