import React from 'react'
import Layout from '../containers/Layout'

import { Image, Box } from 'rebass'

import { Title, Subtitle, Paragraph, ListItem } from '../components/Type'
import studioData from '../data/studio.json'

const Studio = () => {
    const texts = studioData;

    return (
        <Layout reversed nav container>
            <Title>About the Ministry:</Title>
            {texts.vision.map(paragraph => ( <Paragraph> { paragraph } </Paragraph> ))}
            <Image src='/img/sonosignitia.jpg' display='inline-block' width='100%' maxWidth='300px' my={3} />
            <Subtitle>Services</Subtitle>
            <Box as='ul' mb={4}>
                {texts.services.map(service => (
                    <ListItem> { service } </ListItem>
                ))}
            </Box>
        </Layout>
    )
}

export default Studio
