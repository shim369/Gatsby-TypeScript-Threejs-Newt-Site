import React from 'react';
import { graphql, Link, HeadFC, PageProps } from 'gatsby';
import { Queries } from '../types/graphql';
import "../styles/style.scss"
import ThreeScene from '../components/ThreeScene';
import HeaderInner from '../components/HeaderInner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import about1 from "../images/about1.jpg"
import about2 from "../images/about2.jpg"
import about3 from "../images/about3.jpg"
import about4 from "../images/about4.jpg"
import astro from "../images/astro.webp"
import js from "../images/js.webp"
import next from "../images/next.webp"
import nuxt from "../images/nuxt.webp"
import py from "../images/py.webp"
import figma from "../images/figma.webp"

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {

  return (
    <>
    <ThreeScene />
    <div className='wrapper'>
    <header>
        <HeaderInner />
        <div className="main-read">
          <h1>WEB DEVELOPMENT</h1>
          <p>Gatsby + TypeScript + Three.js + Newt</p>
        </div>
    </header>
    <main>
      <section className="about" id="a01">
        <div className="container">
          <h1>About</h1>
          <div className="flex-box">
            <div className="flex-image">
              <img src={about1} alt="about1" />
              <img src={about2} alt="about2" />
              <img src={about3} alt="about3" />
              <img src={about4} alt="about4" />
            </div>
            <div className="flex-text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur laborum autem ea! Facere repellat, quas reiciendis dolores beatae ipsam libero amet vel in pariatur? Ipsa dolores dolore dolorum quas.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur laborum autem ea! Facere repellat, quas reiciendis dolores beatae ipsam libero amet vel in pariatur? Ipsa dolores dolore dolorum quas.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur laborum autem ea! Facere repellat, quas reiciendis dolores beatae ipsam libero amet vel in pariatur? Ipsa dolores dolore dolorum quas.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="a02">
        <div className="container skills">
          <h1>Skills</h1>
          <ul className="skills-detail">
            <li>
              <div className="skills-img">
                <img src={astro} alt="astro" />
              </div>
              <div className="skills-text">
                <h2>Astro</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
              </div>
            </li>
            <li>
              <div className="skills-img">
                <img src={js} alt="js" />
              </div>
              <div className="skills-text">
                <h2>JavaScript</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
              </div>
            </li>
            <li>
              <div className="skills-img">
                <img src={next} alt="next" />
              </div>
              <div className="skills-text">
                <h2>Next.js</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
              </div>
            </li>
            <li>
              <div className="skills-img">
                <img src={nuxt} alt="nuxt" />
              </div>
              <div className="skills-text">
                <h2>Nuxt.js</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
              </div>
            </li>
            <li>
              <div className="skills-img">
                <img src={py} alt="python" />
              </div>
              <div className="skills-text">
                <h2>Python</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
              </div>
            </li>
            <li>
              <div className="skills-img">
                <img src={figma} alt="figma" />
              </div>
              <div className="skills-text">
                <h2>Figma</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos facere voluptates libero!</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="blog" id="a03">
        <div className="container">
          <h1>Blog</h1>
          <div className="blog-area">
          {data.allNewtPost.edges
            .sort((a: { node: { date: Date } }, b: { node: { date: Date } }) => new Date(b.node.date).getTime() - new Date(a.node.date).getTime())
            .slice(0, 3)
            .map((edge: { node: { _id: string; title: string; slug: string; category: { name: string }; coverImage: { src: string }; date: Date; } }) => (
              edge.node.category.name === "Gatsby" && (
				      <div className="blog-card" key={edge.node._id}>
									<div className="img-category">
                    <img
                      src={edge.node.coverImage.src}
                      alt="gatsby base"
                    />
										<h3>Gatsby</h3>
									</div>
									<div className="date"><i className="material-icons">schedule</i>
									{ new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(edge.node.date))}</div>
									<h2>{edge.node.title}</h2>
									<Link to={`/articles/${edge.node.slug}`} className="btn-s">Read more</Link>
							</div>
              )
            ))}
			    </div>
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
    </div>
    </>
  );
};

export default IndexPage;


export const Head: HeadFC = () => <title>GATSBY BASE</title>

export const query = graphql`
  query IndexPage {
    allNewtPost {
      edges {
        node {
          _id
          title
          slug
          category {name}
          coverImage {src}
          date
        }
      }
    }
  }
`;
