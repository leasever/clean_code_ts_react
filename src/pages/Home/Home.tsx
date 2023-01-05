import { addPeople } from '@/redux/states'
import { getCharacters } from '@/services'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PeopleTable } from './components/PeopleTable'

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const { results } = await getCharacters()
        dispatch(addPeople(results))
      }
      fetchMovies()
    } catch (error) {}
  }, [])
  return <PeopleTable />
}

export default Home
