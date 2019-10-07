import React from 'react'
import { Box } from 'rebass'

import colorbar from '../resources/colorbar.svg'

const Colorbar = props =>
    <Box {...props}
        sx={{
            position: 'absolute',
            top: '0',
            left: 'calc(50% - 25px)',
            cursor: 'pointer',
            width: '50px',
            height: '10px',
            zIndex: 100,
            backgroundImage: 'url('+colorbar+')',
            backgroundSize: 'cover'
        }}
    />

export default Colorbar