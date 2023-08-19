/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../shared/components/loader';
import CookieAlert from '../shared/components/cookie-alert';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren'
  };
  const disableConsole = () => {
    console.log(
      '%c This place is where I was supposed to post job openings, but currently I need one :P , :)',
      'background: #212121; color: #f69510; padding: 6px; '
    );
    console.log(`
    _   _                _        ____            _ 
                                                                                    
    _   _                        _     
    | | | |   __ _   _ __   ___  | |__  
    | |_| |  / _\` | | '__| / __| | '_ \\ 
    |  _  | | (_| | | |    \\__ \\ | | | |
    |_| |_|  \\__,_| |_|    |___/ |_| |_|
    
    _   ___         _       ____     ___     ___   _ 
                                                                                             
                                                             `);

    console.log(
      "%c Let's talk, head to contact page and schedule a call with me!",
      'background: #212121; color: #f69510; padding: 6px;'
    );

    console.log = () => {};
    console.error = () => {};
  };

  return (
    <div>
      <Head>
        <title>Harsh Goel | Software Developer</title>
        <meta name="title" content="Harsh Goel | Software Developer" />
        <meta
          name="description"
          content="Harsh is a full stack developer who crafts beautiful web-apps, chrome extensions and apps."
        />
        <meta
          name="keywords"
          content="Harsh is a full stack developer who crafts beautiful web-apps, chrome extensions and apps."
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Harsh Goel" />
        <meta name="copyright" content="All rights reserved,2021. Harsh Goel" />
        <meta httpEquiv="content-language" content="en" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harshgoel.me/" />
        <meta property="og:title" content="Harsh Goel | Software Developer" />
        <meta
          property="og:description"
          content="Harsh is a full stack developer who crafts beautiful web-apps, chrome extensions and apps."
        />
        <meta
          property="og:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Harsh%20Goel&subtitle=Software%20Developer&fileType=jpeg&theme=dark&fontSize=180px"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harshgoel.me/" />
        <meta property="twitter:site" content="@harshgoel05" />
        <meta property="twitter:title" content="Harsh Goel | Software Developer" />
        <meta
          property="twitter:description"
          content="Harsh is a full stack developer who crafts beautiful web-apps, chrome extensions and apps."
        />
        {/* Use Billboard to get an OG Image */}
        <meta
          property="twitter:image"
          content="https://billboard.srmkzilla.net/api/blog?title=Harsh%20Goel&subtitle=Software%20Developer&fileType=jpeg&theme=dark&fontSize=180px"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2595CLJE11" />
        <script
          dangerouslySetInnerHTML={{
            __html: `       
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-2595CLJE11');`
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2472275,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
          }}
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <div className="page-transition-wrapper overflow-x-hidden min-h-screen">
            <motion.div
              transition={spring}
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              id="page-transition-container">
              <Component {...pageProps} key={router.pathname} />
            </motion.div>
          </div>
          <CookieAlert />
        </AnimatePresence>
      )}
      {disableConsole()}
    </div>
  );
}

export default MyApp;
