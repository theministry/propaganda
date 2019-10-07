import React from 'react'

import { Flex, Box } from 'rebass'

import Container from '../components/Container'
import Nav from '../components/Nav'

import { useSpring, animated } from 'react-spring'

const AnimatedBox = animated(Box)

const Layout = props => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })

    return(
        <Flex
            flexDirection= { props.reversed === true ? 'column-reverse' : 'column' }
            bg={ props.clear === true? '' : 'background' }
            height='100%'
            fontFamily='body'
            color='text'
        >
            <AnimatedBox flex={1} overflowY='scroll' as='main' py={4} style={fadeIn}>
                { props.container === true ? <Container width="100%" height="100%"> { props.children } </Container> : props.children }
            </AnimatedBox>
            { props.nav === true ? <Nav /> : '' }
        </Flex>
    )
}

export default Layout