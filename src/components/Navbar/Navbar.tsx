import { AppStore } from '@/redux/store'
import FavoriteIcon from '@mui/icons-material/Favorite'
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { CustomDialog } from '../CustomDialog'
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog'
import { FavoriteTable } from './FavoriteTable'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }
  const stateFavorites = useSelector((store: AppStore) => store.favorites)

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position='fixed'>
        <Container maxWidth='xs'>
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
              <Badge badgeContent={stateFavorites.length} color='success'>
                <FavoriteIcon fontSize='large'/>
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar
