import React from 'react'

import { Link } from 'react-router-dom'
import { Flex, Heading, Text } from 'rebass'
import { ArrowLeft } from 'react-feather'

export const Back = props => {
    return (
        <Flex
            as={ Link }
            to={ props.to }
            flexDirection='row'
            alignItems='center'
            mb={2}
            letterSpacing='1px'
            textTransform='uppercase'

            variant='link'
        >
            <ArrowLeft size='18px'/>< Text as='span'>Back</Text>
        </Flex>
    )
}

export const Title = props => {
    return (
        <Heading
            as='h2'
            fontSize={5}
            mb={3}
            color='text'
            bg='textbackground'
            letterSpacing='1px'
        >{ props.children }</Heading>
    )
}

export const Subtitle = props => {
    return (
        <Heading
            as='h3'
            textSize={4}
            mb={3}
            color='text'
            bg='textbackground'
            letterSpacing='1px'
        >{ props.children }</Heading>
    )
}

export const Paragraph = props => {
    return (
        <Text
            as='p'
            mb={3}
            lineHeight='body'
            bg='textbackground'
            letterSpacing='1px'
        >{ props.children }</Text>
    )
}

export const ListItem = props => {
    return (
        <Text
            as='li'
            mb={2}
            lineHeight='body'
        >{ props.children }</Text>
    )
}

export const CardTitle = props => {
    return (
        <Heading
            as='h4'
            p={1}
            color='text'
            bg='textbackground'
        >
            { props.children }
        </Heading>
    )
}

export const CardSubTitle = props => {
    return (
        <Text
            p={1}
            color='gray'
        >
            { props.children }
        </Text>
    )
}

export const MetaTitle = props => {
    return (
        <Text
            p={1}
            color="gray"
            mt={2}
        >
            { props.children }
        </Text>
    )
}

export const MetaContent = props => {
    console.log(props.children+': '+props.to)
    return (
        <Text
            as={(props.to !== undefined) ? 'a' : 'p' }
            href={(props.to !== undefined) ? props.to : '' }
            fontWeight={(props.to !== undefined) ? 'bold' : 'body' }
            color={(props.to !== undefined) ? 'primary' : 'text' }
            p={1}
            display='block'
            sx={{
                textDecoration:'none'
            }}
        >
            { props.children }
        </Text>
    )
}