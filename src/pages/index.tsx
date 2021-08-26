import type { NextPage } from 'next'
import React from 'react'
import AppLayout from '../components/layouts/applayout'
import CreateNewProjectCard from '../components/projectcard/createprojectcard'
import ProjectCard from '../components/projectcard/projectcard'
import { Project } from '../data/models'
import { useAppSelector } from '../redux/hooks'
import { selectProjects } from '../redux/projectsSlice'

const HomePage: NextPage = () => {

  const projects: Project[] = useAppSelector(selectProjects)

  return (
    <AppLayout title="Home">
      <main className="maincontainer">
        <h1>All Projects</h1>
        {projects.map((project: Project) => (
          <ProjectCard  key={project.id} project={project}/>
        ))}
        <CreateNewProjectCard />
      </main>
    </AppLayout>
  )
}

export default HomePage
