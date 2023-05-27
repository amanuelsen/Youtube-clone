






// import axios from "axios";

// const baseurl = 'https://youtube-v31.p.rapidapi.com/captions';

// const options = {
//   params: {
//     maxResult: "50"
//   },
//   headers: {
//     'X-RapidAPI-Key': "e2674a881emsh28278d3a70d046cp1451c1jsn35d86e9d9ee7",
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// export const fetchFromapi = async (url) => {
//   const { data } = await axios.get(`${baseurl}/${url}`, options);
//   return data;
// };

import axios from "axios";
const BASEURL= 'https://youtube-v31.p.rapidapi.com';
const options = {
   
    url: BASEURL,
    params: {
    
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'e2674a881emsh28278d3a70d046cp1451c1jsn35d86e9d9ee7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromapi= async (url)=> {
  const {data}=  await axios.get(`${BASEURL}/${url}`, options)
  return data;
  }
