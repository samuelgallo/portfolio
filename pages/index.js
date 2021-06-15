import Head from 'next/head';

import ScrollAnimation from 'react-animate-on-scroll';

import Hero from '../components/Hero';

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <meta name="description" content="Hi, I'm Samuel Gallo, a full stack developer, experienced front end developer and Consultant." />
        <title>Samuel Gallo - Full Stack Developer and Consultant</title>
        <meta property="og:title" content="Samuel Gallo - Full Stack Developer and Consultant" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samuelgallo.com/" />
        <meta property="og:image" content="https://samuelgallo.com/images/samuel-gallo-image.png" />
        <meta property="og:description" content="Hi, I'm Samuel Gallo, a full stack developer, experienced front end developer and Consultant." />
      </Head>
      <Hero />
      <div className="thumbnails">
        {projects.map(project => <ScrollAnimation animateIn="fadeInUp" key={project.id}><a href={'/' + project.hash}><img loading="lazy" src={'/images/' + project.thumb} width="340" height="340" alt={project.title} /> <h2 className="thumbnails-title">{project.title}</h2></a></ScrollAnimation>)}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://samuelgallo.com/api/');
  const projects = await res.json();

  return {
    props: {
      projects
    }
  }
}
