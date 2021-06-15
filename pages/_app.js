import Head from 'next/head';
import Header from '../components/Header';

import '../styles/reset.scss';
import '../styles/_global.scss';
import '../styles/_projects.scss';
import '../styles/_portfolio.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="main">
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#333" />
        <meta name="robots" content="index,follow" />
        <meta property="fb:admins" content="100001492124844" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" />

      </Head>
      <Header />
      <Component {...pageProps} />


      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
              ga('create', 'UA-43524143-1', 'auto');
              ga('send', 'pageview');
            `,
        }}
      />
    </div>
  )
}

export default MyApp;
