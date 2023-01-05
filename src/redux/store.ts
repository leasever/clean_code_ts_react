import { Character } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import { favoritesSlice, peopleSlice } from './states'

export interface AppStore { 
  people: Character[]
  favorites: Character[]
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
})
