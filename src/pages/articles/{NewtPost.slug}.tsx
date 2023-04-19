import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'
import { Queries } from '../../types/graphql'
import HeaderInner from '../../components/HeaderInner';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import "../../styles/style.scss"

const ArticlePage = ({ data }: PageProps<Queries.ArticlePageQuery>) => {
  return (
    <>
    <div className='wrapper'>
      <header className='blog-header'>
          <HeaderInner />
          <div className="main-read">
            <h1>Tech Blog</h1>
          </div>
      </header>
      <main>
        <section>
          <div className="container">
            <div className='blog-detail'>
              <h1>{data.newtPost?.title}</h1>
              <div className="date"><i className="material-icons">schedule</i>{ new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(data.newtPost?.date))}</div>
              <div className="blog-detail-area" dangerouslySetInnerHTML={{ __html: data.newtPost?.body + '' }} />
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default ArticlePage

export const Head: HeadFC = () => <title>GATSBY BASE</title>

export const query = graphql`
  query ArticlePage($id: String) {
    newtPost(id: { eq: $id }) {
      title
      body
      date
    }
  }
`