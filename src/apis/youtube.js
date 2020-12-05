import axios from 'axios';

const KEY = 'AIzaSyDYctKXwkNQFBAP_FoKOP_0vpdK3IM1s8Y';

export default axios.create({ 
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {   
    key: KEY,
  },
});
