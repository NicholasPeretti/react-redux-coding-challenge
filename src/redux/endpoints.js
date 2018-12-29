export const API_SERVER = 'http://localhost:3001'

export const GET_CARS = {
  url: `${API_SERVER}/cars`,
  method: 'GET'
}

export const GET_COLORS = {
  url: `${API_SERVER}/colors`,
  method: 'GET'
}

export default {
  GET_CARS,
  GET_COLORS
}
