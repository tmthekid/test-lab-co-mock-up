import React, { ChangeEvent, FC, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

const Home: FC<RouteComponentProps> = ({ history }) => {
  const [search, setSearch] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleClick = () => {
    history.push(`/results/${search}`);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        marginTop: '-5rem',
      }}
    >
      <img
        src="https://global-uploads.webflow.com/5ef13400d029f3b0a4f5b6ba/5f08bf35621be66833f183a7_logo-256x256.png"
        style={{ width: '10%' }}
      />
      <h1
        style={{ fontSize: '2rem', letterSpacing: '2px', marginBottom: '40px' }}
      >
        Online Verification System
      </h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          fontSize: '18px',
        }}
      >
        <div style={{ fontWeight: 'bold' }}>Certificate #</div>
        <FormControl style={{ marginLeft: '1rem' }}>
          <InputLabel htmlFor="my-input">Search</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            onClick={handleClick}
            style={{ marginTop: '1.5rem', background: 'green', color: '#fff' }}
          >
            Search
          </Button>
        </FormControl>
      </div>
    </div>
  );
};

export default Home;
