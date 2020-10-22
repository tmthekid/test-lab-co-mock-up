import React from 'react';
import Routes from './Routes';
import Container from '@material-ui/core/Container/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes />
      </Container>
    </div>
  );
};

export default App;
