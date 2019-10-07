import React from 'react'
import { Box } from 'rebass'
import { Link } from 'react-router-dom'

const HomeButton = props =>
    <Box {...props}
        as={ Link }
        to='/'
        sx={{
            position: 'absolute',
            top: 2,
            left: 1,
            cursor: 'pointer',
            zIndex: 100,
            textDecoration: 'none'
        }}
    ><span role='img' aria-label='homebutton'>🚀</span></Box>

export default HomeButton