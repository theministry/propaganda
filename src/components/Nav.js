import React from 'react'

import { Box } from 'rebass'

import Container from './Container'
import NavLink from './NavLink'

const Nav = props =>
    <Box
        bg="background"
        color="text"
        fontFamily='body'
        as='nav'
    >
        <Container
            as='ul'
            display='flex'
            justifyContent='center'
            listStyle='none'
        >
            {/* <NavLink to={'/'} label={'home'} /> */}
            <NavLink to={'/studio'} label={'studio'} />
            <NavLink to={'/projects'} label={'projects'} />
            <NavLink to={'/contact'} label={'contact'} />
        </Container>
    </Box>

export default Nav