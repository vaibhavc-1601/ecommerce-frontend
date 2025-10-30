import axios from 'axios';
import { AxiosInstance } from './helper';


const getcategories = async (id = null) => {
  try {
    let API = "category";
    if (id !== null)
      API += `/${id}`;

    const response = await AxiosInstance.get(API);

    if (response.data?.success === true) {

      return response.data
    } else {
      return null;
    }
  } catch (error) {

    return null
  }
}

const getColors = async (id = null) => {
  try {
    let API = "Color";
    if (id !== null)
      API += `/${id}`;

    const response = await AxiosInstance.get(API);

    if (response.data?.success === true) {

      return response.data
    } else {
      return null;
    }
  } catch (error) {

    return null
  }
}

const getBrands = async (id = null) => {
  try {
    let API = "brand";
    if (id !== null)
      API += `/${id}`;

    const response = await AxiosInstance.get(API);

    if (response.data?.success === true) {

      return response.data
    } else {
      return null;
    }
  } catch (error) {

    return null
  }
}

const getproducts = async (id = null, categorySlug = null, colorSlug = null, brandSlug = null, min = null, max = null) => {
  try {
    let API = "product";
    if (id !== null)
      API += `/${id}`;
    const query = new URLSearchParams();
    if (categorySlug) query.append('categorySlug', categorySlug);
    if (colorSlug) query.append('colorSlug', colorSlug);
    if (brandSlug) query.append('brandSlug', brandSlug);
    if (min) query.append('min', min);
    if (max) query.append('max', max);


    const response = await AxiosInstance.get(API + `?${query.toString()}`);

    if (response.data?.success === true) {

      return response.data
    } else {
      return null;
    }
  } catch (error) {

    return null
  }
}
export { getcategories, getColors, getBrands, getproducts };