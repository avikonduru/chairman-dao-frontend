import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import DAOCreationForm from './DAOCreationForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background:{
      //purple
      default: '#4e3b63',
    },
    primary: {
      // Main orange (mulled wine)
      main: '#ed6c05',
    },
    secondary: {
      // Main green (christine)
      main: '#e96c06',
    },
    warning: {
      // Warning color
      main: '#99c0ad',
    },
    info: {
      main: '#99c0ad',
    },
    success: {
      main: '#e96c06',
    },
    text: {
      primary: '#ffffff',
      disabled: '#f1edea',
    }
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DAOCreationForm/>    
    </ThemeProvider>
    

  );
}