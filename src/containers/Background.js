import React from 'react'
import { Box } from 'rebass'
import Visualisation from '../components/Visualisation'

const Background = props => {
    return(
        <Box
            {...props}
            width='100%'
            height='100%'
            sx={{
                position: 'absolute',
                left: '0',
                top: '0',
                zIndex: -100
            }}
        >
            <Visualisation />
        </Box>
    )
}


export default Background