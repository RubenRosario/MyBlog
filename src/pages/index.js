import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <p> The content will show up here.</p>
        <StaticImage src = "../images/download.jpeg" alt="Ruben picture"/>
    </Layout>
  )
}

export default IndexPage;

