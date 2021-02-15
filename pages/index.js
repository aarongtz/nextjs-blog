import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'



import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
   const allPostsData = getSortedPostsData()
   return {
      props: {
         allPostsData
      }
   }
}


export default function Home({ allPostsData }) {
   return (
      <Layout home>
         <Head>
            <title>{siteTitle}</title>
         </Head>
         <section className={utilStyles.headingMd}>
            <p>Hola, mi nombre es <b>Aarón Gutiérrez</b> y soy ingeniero de software, me puedes contactar en <a href="https://twitter.com/aarongtrz" target="_blank">Twitter</a>.</p>
            <p>
               Este es un sitio web de prueba
            </p>
         </section>
         <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
               {allPostsData.map(({ id, date, title }) => (
                  <li className={utilStyles.listItem} key={id}>
                     <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                     </Link>
                     <br />
                     <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                     </small>
                  </li>
               ))}
            </ul>
         </section>
      </Layout>
   )
}
