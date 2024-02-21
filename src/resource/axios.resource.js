import axios from 'axios'
import { endpoint, timeout, endpointDjango } from '../constants/api.constants'

export const instanceBase = axios.create({
  baseURL: endpoint,
  timeout: timeout
})

export const instanceDjango = axios.create({
  baseURL: endpointDjango,
  timeout: timeout
})
