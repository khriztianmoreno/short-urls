import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

function SEO() {
  return (
    <Head>
      <title>URL Shortener by @khriztianmoreno 👨🏼‍💻🇨🇴💻</title>
      <meta name="description" content="URL shortener with an airtable backend" />
      <meta name="keywords" content="Shortener, next.js, khriztianmoreno" />
      <meta name="author" content="@khriztianmoreno <Cristian Moreno>" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="image" content="https://res.cloudinary.com/khriztianmoreno/image/upload/v1633743241/km_site/logo.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kmz.im/" />
      <meta property="og:description" content="URL shortener with an airtable backend" />
      <meta property="og:image" content="https://res.cloudinary.com/khriztianmoreno/image/upload/v1633743241/km_site/logo.png" />
      <meta name="twitter:dnt" content="on" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@khriztianmoreno" />
      <meta name="twitter:title" content="URL Shortener by @khriztianmoreno 👨🏼‍💻🇨🇴💻" />
      <meta name="twitter:description" content="URL shortener with an airtable backend" />
      <meta name="twitter:image" content="https://res.cloudinary.com/khriztianmoreno/image/upload/v1633743241/km_site/logo.png" />
      <link rel="canonical" href="https://kmz.im/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
