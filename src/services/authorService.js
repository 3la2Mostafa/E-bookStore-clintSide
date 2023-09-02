import axios from "../config/axiosConfig";

export const getAuthors = async () => {
   try {
    const response = await fetch('https://alef-book-store-server.netlify.app/authors');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('result', data);
    return data;
  } catch (error) {
    console.log('error in getAuthors service -> ', error);
  }
}
