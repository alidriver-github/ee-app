import React, { Component, useEffect, useState } from 'react';
import { 
    Box,
    Button,
    Select
  } from 'grommet';

  import useTheme from "../hooks/useTheme";

  export default (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    >
        <SettingsTheme/>
        <SettingsSize/>

    </Box>
);

function SettingsSize() {
  const [value, setValue] = React.useState('medium');
  return (
    <Select
      options={['small', 'medium', 'large']}
      value={value}
      onChange={({ option }) => setValue(option)}
    />
  );
  }

  function SettingsTheme() {

    const { switchThemeWithString} = useTheme();
    return (
      <Box>
      <Button onClick={() => switchThemeWithString('theme1')}>theme1</Button>
      <Button onClick={() => switchThemeWithString('theme2')}>theme2</Button>
      </Box>
    );
    }