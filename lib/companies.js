// lib/companies.js
import { fetchAPI } from './api';

export async function getCompanies() {
  try {
    const data = await fetchAPI('/companies?sort=order:asc');
    return data.data || [];
  } catch (error) {
    console.error('Error in getCompanies:', error);
    return [];
  }
}

export async function getCompanyBySlug(slug) {
  try {
    // Правильный фильтр для Strapi v4
    const data = await fetchAPI(`/companies?filters[slug][$eq]=${slug}`);
    
    // Возвращаем первый элемент или null
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error in getCompanyBySlug:', error);
    return null;
  }
}

export async function getAllCompanySlugs() {
  try {
    const data = await fetchAPI('/companies?fields[0]=slug');
    
    if (!data.data) {
      return [];
    }
    
    // Убедимся, что у каждого элемента есть slug
    return data.data
      .filter(company => company.slug) // фильтруем только с slug
      .map(company => ({
        slug: company.slug
      }));
  } catch (error) {
    console.error('Error in getAllCompanySlugs:', error);
    return [];
  }
}