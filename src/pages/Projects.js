import React from 'react'

import Layout from '../containers/Layout'
import { Title, Paragraph } from '../components/Type'
import ProjectGrid from '../components/ProjectGrid'

const Projects = () => {
    return (
        <Layout nav container reversed>
            <Title>Selected Works:</Title>
            <Paragraph>A selection of our most recent projects.</Paragraph>
            <ProjectGrid />
        </Layout>
    )
}

export default Projects
