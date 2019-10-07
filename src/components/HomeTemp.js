import React from 'react'

import { Flex, Box, Image } from 'rebass'

const HomeTemp = () => {
    return (
        <Flex
            width="100%"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width='100%'
                height='100%'
                maxWidth='500px'
                maxHeight='500px'
                sx={{
                    position:'relative'
                }}
            >
                <Image src='/img/moononly.png' sx={{ position:'absolute', top:'0', left:'0'}} maxWidth="100%" maxHeight="100%" />
                <Image src='/img/ministrylogo.svg' sx={{ position:'absolute', top:'0', left:'0'}} maxWidth="100%" maxHeight="100%" />
            </Box>
        </Flex>
    )
}

export default HomeTemp
