import { Person } from '@/models'
import { removeFavorite } from '@/redux/states'
import { AppStore } from '@/redux/store'
import DeleteIcon from '@mui/icons-material/Delete'
import { Avatar, IconButton } from '@mui/material'
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
  const pageSize = 5
  const dispatch = useDispatch()
  const stateFavorites = useSelector((store: AppStore) => store.favorites)

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person))
  }
  const colums = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color='error'
              arial-label='favorites'
              component='label'
              onClick={() => handleClick(params.row)}
            >
              <DeleteIcon />
            </IconButton>
          }
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 200,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
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
          {
            <Avatar
              alt='Avatar Rick and Morty'
              src={params.value}
              sx={{ width: 48, height: 48 }}
            />
          }
        </>
      ),
    },
  ]
  return (
    <DataGrid
      rows={stateFavorites}
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

export default FavoriteTable
