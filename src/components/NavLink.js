import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import { Flex, Link as RebassLink } from 'rebass'

const NavLink = props =>
    <Flex
        as='li'
        flex={1}
        textAlign='center'
        alignItems='center'
        height="60px"
    >
    <RebassLink
        exact to={props.to}
        as={RouterLink}
        flex={1}
        variant='nav'
    >
        { props.label }
    </RebassLink>
    </Flex>

export default NavLink
