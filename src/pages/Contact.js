import React from 'react'

import Layout from '../containers/Layout'
import ContactForm from '../components/ContactForm'
import { Title, Paragraph } from '../components/Type'

import studioData from '../data/studio.json'

const Contact = () => {
    const textData = studioData.contact

    return (
        <Layout nav container reversed>
            <Title>Contact:</Title>
            {textData.map(paragraph => ( <Paragraph> { paragraph } </Paragraph> ))}
            <ContactForm></ContactForm>
        </Layout>
    )
}

export default Contact
