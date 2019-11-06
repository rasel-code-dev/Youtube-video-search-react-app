import axios from 'axios'

const KEY = "AIzaSyBCmpWcOUJaDdnb2kZrPK3_AEAcmRR4c6o"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})
