import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Validation form
export const ValidateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Generate initials for differents users
export const getInitials = (name) => {
  if (!name) return "";
  
  const word = name.split(" ");
  let initials = "";

  for (let i = 0; i < Math.min(word.lenght, 2); i++) {
    initials += word[i][0];
  }

  return initials.toUpperCase();
}