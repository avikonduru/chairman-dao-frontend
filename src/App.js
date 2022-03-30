import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import DAOCreationForm from './DAOCreationForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontFamily: [
        'proxima-nova',
        'sans-serif',
      ].join(','),
      fontSize: 12,
      fontWeight: 700,
    },
    background:{
      //purple
      default: '#4e3d66',
    },
    primary: {
      // Main orange (mulled wine)
      main: '#ed6c05',
      contrastText: "#ffffff"
    },
    secondary: {
      // Main green (christine)
      main: '#4e3d66',
    },
    warning: {
      // Warning color
      main: '#99c0ad',
      contrastText: "#4e3d66"
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
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300,
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DAOCreationForm/>    
    </ThemeProvider>
    

  );
}