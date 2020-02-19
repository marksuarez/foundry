import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'
import Tester from '../components/Tester'
import Section from '../components/Section'
import Cell from '../components/Cell'

import staticdata from '../../staticdata.json'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="Hero">
          <div className="HeroGroup">
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site. Now go build something great.</p>
            <Link to="/video/">Go to Video</Link>
          </div>
      </div>
      <Tester min={0} max={500}/>
      <div className="Cards">
        <div className="CardGroup">
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
          <Card 
            title="React for Designers"
            text="12 sections"
            image={require('../images/gatsby-astronaut.png')} 
          />
        </div>
      </div>
      <Section
        image={require('../images/gatsby-astronaut.png')}
        logo={require('../images/gatsby-icon.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." />
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}  
    </div>
  </Layout>
)

export default IndexPage
