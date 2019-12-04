import React from 'react';
import { Box } from 'grommet';

export default (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand-secondary'
        pad={{ left: '48px', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);