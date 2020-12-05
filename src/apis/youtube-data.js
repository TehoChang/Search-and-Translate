import axios from 'axios'

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3/videos',
  params:{
    part:'contentDetails,statistics',
    key:'AIzaSyBKOvBcfCNzvxG_rswLUTVBNZHRPRrZtwg'
  }
})