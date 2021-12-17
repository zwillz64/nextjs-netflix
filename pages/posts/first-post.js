import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>IST 363</title>
          <meta name="description" content= "This the summary of the page for SEO"></meta>
        </Head>
        <h1>First post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    )
  }