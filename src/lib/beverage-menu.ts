import data from "./beverage-menu.json";

// Transcribed from the two-page Nookaa Menu.pdf supplied by the brand.
export const beverageCategories = data.categories;
export const beverageAddOns = data.addOns;
export const menuNotes = data.notes;
export const featuredCategories = [data.categories[0], data.categories[6], data.categories[5]];
export function menuPrice(price: number) { return `₹${price}`; }
