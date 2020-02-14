import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card'


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
    </div>
  </Layout>
)

export default IndexPage
