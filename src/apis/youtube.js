import axios from 'axios';

const KEY = 'AIzaSyBKOvBcfCNzvxG_rswLUTVBNZHRPRrZtwg';

export default axios.create({
  
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    
    
    key: KEY,
  },
});
