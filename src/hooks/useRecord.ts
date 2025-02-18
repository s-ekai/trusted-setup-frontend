import { useQuery } from '@tanstack/react-query'
import api from '../api'

export default function useRecord() {
  return useQuery(['record'], async () => {
    return api.getCurrentState()
  })
}

export function useRecordAsString() {
  return useQuery(['recordAsString'], async () => {
    return api.getCurrentStateAsString()
  })
}