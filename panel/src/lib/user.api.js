import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5003/api/v1'
})

const extractData = async (promise) => {
  const {data} = await promise;
  return data
}

export const getUserData =  async (userId) => {
  return extractData(api.get(`/user/${userId}`))
}

export  const updateUser = async (data) => {
return extractData(api.post(`/user`, data))
}