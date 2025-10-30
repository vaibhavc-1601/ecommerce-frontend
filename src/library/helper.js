 import { toast } from 'react-toastify';
  import axios from 'axios';

function generateSlug(name) {
  return name
    .toLowerCase() // convert to lowercase
    .trim() // remove leading/trailing spaces
    .replace(/[^a-z0-9\s-]/g, '') // remove special characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-'); // remove multiple consecutive hyphens
}

     const notify = (msg,flag) => toast(msg,{type: flag ? 'success'  :'error'});

     const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
 
});



function getCookie(name) {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function formatIndianCurrency(amount) {
  return amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
  });
}



  
 export{generateSlug,notify, AxiosInstance,getCookie ,formatIndianCurrency};