import React from 'react';
import AppRouter from './AppRouter';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { useLocation } from 'react-router-dom';
import styles from 'styles/Layout.module.css';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function AppLayout(props) {
  const location = useLocation();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Encrypted JSON Data in Local Storage 
            </Typography>            
          </Toolbar>
        </AppBar>
      </Box>
      <div className={styles.main}>
        <AppRouter />
      </div>
    </>
  );
}
