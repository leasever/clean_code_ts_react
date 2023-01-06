import { addPeople } from '@/redux/states'
import { getCharacters } from '@/services'
import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { PeopleTable } from './components/PeopleTable'

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const { results } = await getCharacters()
        dispatch(addPeople(results))
        setLoading(false)
      }
      fetchMovies()
    } catch (error) {}
  }, [])
  return <>{loading ? <CircularProgress /> : <PeopleTable />}</>
}

export default Home
