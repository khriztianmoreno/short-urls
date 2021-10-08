import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'

function SEO({
  description,
  lang,
  meta,
  title,
}) {

  return (
    <Head>
      <title>URL Shortener by @khriztianmoreno</title>
      <meta name="description" content="URL shortener with an airtable backend" />
      <meta name="keywords" content="Shortener, next.js, khriztianmoreno" />
      <meta name="author" content="@khriztianmoreno <Cristian Moreno>" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
