export const getFullUrl = (url: string) => {
  return import.meta.env.VITE_STRAPI_URL + url;
};
