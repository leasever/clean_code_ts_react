import FavoriteIcon from '@mui/icons-material/Favorite'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { CustomDialog } from '../CustomDialog'
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog'
import { FavoriteTable } from './FavoriteTable/FavoriteTable'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            leaserve React Test
          </Typography>
          <IconButton
            color='secondary'
            arial-label='favorites'
            component='label'
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
