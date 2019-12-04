import React from 'react';
import { Box } from 'grommet';

export default (props) => {

    return (
        <Box
        tag='div'
        direction='row'
        align='center'
        justify='between'
        background='light-1'
        margin={{ left: '8px', right: '8px', bottom: '16px' }}
        pad={{ left: '24px', right: '24px', top: '24px' , bottom: '24px'}}
        border={{ style: "solid" , size: "0px"}}
        round={{ size: "0px" }}
        {...props}
        >
        </Box>
    )
    
}