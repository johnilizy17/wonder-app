import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase/firebase';

const App = () => {
  const dispatch = useDispatch();
  const routing = useRoutes(routes);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }));
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing }
    </ThemeProvider>
  );
};

export default App;
