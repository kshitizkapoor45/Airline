import axios from 'axios'

export const api = axios.create({
	baseURL: "http://localhost:8080/airline"
})

export const getAllData = async() =>{
    try {
      const response = await api.get("/getFlights")
      return response.data
    } catch (error) {
      console.error(error)
      return []
    }
  }
  