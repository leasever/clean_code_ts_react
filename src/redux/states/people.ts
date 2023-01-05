import { LocalStorageTypes } from '@/data'
import { Character } from '@/models'
import { getLocalStorage, setLocalStorage } from '@/utilities'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Character[] = []

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageTypes.PEOPLE, state)
      return action.payload
    },
  },
})

export const { addPeople } = peopleSlice.actions

export default peopleSlice.reducer
