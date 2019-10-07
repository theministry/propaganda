import React from 'react'

import { findIndex } from 'lodash'
import { Image, Box } from 'rebass'

import Layout from '../containers/Layout'
import { Back, Title, Paragraph, MetaTitle, MetaContent } from '../components/Type'

import projectData from '../data/projects.json'

const generateMeta = (meta, name) => {
    if (meta.length === 0) {return false}
    else return (
        <>
        <MetaTitle>{ name +':' }</MetaTitle>
        {meta.map(item => ( <MetaContent to={item.url}> { item.name } </MetaContent>))}
        </>
    )
}

const Project = ({ match }) => {
    const p = findIndex(projectData, function(o) { return o.slug === match.params.slug})
    const projectInfo = projectData[p]

    return (
        <Layout nav reversed container>
            <Back to='/projects' />
            <Image src={`${process.env.PUBLIC_URL}/img/${projectInfo.slug}.jpg`} display='inline-block' width='100%' maxWidth='300px' my={3} />
            <Title>{ projectInfo.name }</Title>
            {projectInfo.description.map(paragraph => ( <Paragraph> { paragraph } </Paragraph> ))}
            <Box mb={4}>
            <MetaTitle>Year:</MetaTitle>
            <MetaContent>{projectInfo.year}</MetaContent>
            { generateMeta(projectInfo.clients, 'Clients') }
            { generateMeta(projectInfo.collaborators, 'Collaborators') }
            { generateMeta(projectInfo.powered, 'Powered by') }
            </Box>
        </Layout>
    )
}

export default Project