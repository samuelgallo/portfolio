import Head from 'next/head';

const Projects = ({ data }) => {
  return (
    <div key={data[0].id}>

      <div className="portfolio">
        <Head>
          <title>{data[0].title} | Samuel Gallo - Full Stack Developer and Consultant</title>
          <meta property="og:title" content={data[0].title + ' | Samuel Gallo - Full Stack Developer and Consultant'} />
          <meta property="og:url" content={'https://samuelgallo.com/' + data[0].hash} />
          <meta name="description" content={data[0].description} />
          <meta property="og:description" content={data[0].description} />
          <meta property="og:image" content={'/images/' + data[0].image} />
        </Head>
        <div className="description">
          <h1 className="portfolio-title">{data[0].title}</h1>
          <p className="portfolio-descriptions">{data[0].description}</p>
          <span className="portfolio-platform">Platform: {data[0].platform}</span>
          <span className="portfolio-technologies">Technologies: {data[0].technologies}</span>
        </div>
        <div className="print">
          <img src={'/images/' + data[0].image} alt={data[0].title} loading="lazy" width="1200" />
        </div>
      </div>

    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch('https://samuelgallo.com/api')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { slug: post.hash },
  }));

  return { paths, fallback: false }
};

export const getStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`https://samuelgallo.com/api/?hash=${slug}`)
  const posts = await res.json();

  return {
    props: {
      data: posts
    }
  };
};

export default Projects;
