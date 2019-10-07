import React from 'react'

import { Flex, } from 'rebass'

import ProjectCard from '../components/ProjectCard'
import projectData from '../data/projects.json'

const ProjectGrid = props => {
    const projects = projectData
    return (
        <Flex flexWrap='wrap' mx={-2}>
            {projects.map(project => (
                <ProjectCard project={project} />
            ))}
        </Flex>
    )

}

export default ProjectGrid