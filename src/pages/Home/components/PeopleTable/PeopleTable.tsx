import { Character } from '@/models'
import { addFavorite } from '@/redux/states'
import { AppStore } from '@/redux/store'
import { Avatar, Checkbox, FormControlLabel, Skeleton } from '@mui/material'
import { red } from '@mui/material/colors'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Character[]>([])
  const [loaded, setLoaded] = useState(false)
  console.log('loaded ', loaded)
  const pageSize = 5
  const dispatch = useDispatch()
  const statePeople = useSelector((store: AppStore) => store.people)
  const favoritePeople = useSelector((store: AppStore) => store.favorites)

  const findPerson = (person: Character) =>
    !!favoritePeople.find((p) => p.id === person.id)
  const filterPerson = (person: Character) =>
    favoritePeople.filter((p) => p.id !== person.id)

  const handleChange = (person: Character) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person]
    dispatch(addFavorite(filteredPeople))
    setSelectedPeople(filteredPeople)
  }
  const colums = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <FormControlLabel
            control={
              <Checkbox
                size='small'
                checked={findPerson(params.row)}
                onChange={() => handleChange(params.row)}
              />
            }
            label={params.value}
          />
        </>
      ),
    },
    {
      field: 'species',
      headerName: 'Specie',
      flex: 1,
      minWidth: 90,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      flex: 1,
      minWidth: 90,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'image',
      headerName: 'Avatar',
      flex: 1,
      minWidth: 100,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {loaded ? (
            <Avatar>
              <Avatar alt='Avatar Rick and Morty' src={params.value} />
            </Avatar>
          ) : (
            <Skeleton variant='circular'>
              <Avatar src={params.value} onLoad={() => setLoaded(true)} />
            </Skeleton>
          )}
        </>
      ),
    },
  ]

  useEffect(() => {
    setSelectedPeople(favoritePeople)
  }, [favoritePeople])
  return (
    <DataGrid
      rows={statePeople}
      columns={colums}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  )
}

export default PeopleTable
