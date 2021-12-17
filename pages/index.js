import Head from 'next/head'
import Image from 'next/image'

import Card from '../components/card'
import Col from '../components/col'
import Container from '../components/container'
import Layout from '../components/layout'
import Row from '../components/row'

import {getAllMovies} from '../lib/api'

/*
const movies = [
  {
    title: "Ghostbusters: Afterlife",
    image: "ghostbusters.jpg",
    rating: "PG-13"
  },
   
  {
    title: "Marvel's Eternals",
    image: "eternals.jpg",
    rating: "PG-13"
  },
  {
    title: "Encanto",
    image: "encanto.jpg",
    rating: "G"
  },
  {
    title: "Resident Evil: Welcome to Raccoon City",
    image: "resident-evil.jpg",
    rating: "R"
  },
  {
    title: "House of Gucci",
    image: "house-of-gucci.jpg",
    rating: "R"
  }, 
  {
    title: "C'mon C'mon",
    image: "cmon-cmon.jpg",
    rating: "PG-13"
  }
]; //movie array end
*/

export async function getStaticProps(){

  const movies = await getAllMovies();

  return{
    props : {
      movies
    }
  }
}

export default function Home({movies}) {
  console.log({movies});
  return (
    <Layout>
      <Head>
        <title>IST 363 Netflix</title>
      </Head>

      <main>
        <Container>
          <Row>
            {movies.nodes.map((movie, index) =>{
              const {title, featuredImage, slug} = movie;
              return <Col key={index} xs ="6" sm="6" md="4" lg="3">
                <Card 
                  title={title}
                  featuredImage={featuredImage}
                  slug={slug} 
                />
              </Col>
            })}
          </Row>
        </Container>
      </main>
    </Layout>
  )
}
