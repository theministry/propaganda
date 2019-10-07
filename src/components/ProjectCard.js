import React from 'react'

import { Box, Image } from 'rebass'
import { Link } from 'react-router-dom'

import { CardTitle, CardSubTitle } from '../components/Type'

const ProjectCard = props => {
    const project = props.project
    return (
        <Box px={2} py={2} width={1/2} >
            <Box
                p={1}
                as={ Link }
                to={ '/project/'+project.slug }
                sx={{
                    textDecoration:'none'
                }}
            >
                <Image src={`${process.env.PUBLIC_URL}/img/${project.slug}.jpg`} />
                <CardTitle>
                    { project.name }
                </CardTitle>
                <CardSubTitle>
                    { project.year }
                </CardSubTitle>
            </Box>
        </Box>
    )
}

export default ProjectCard
