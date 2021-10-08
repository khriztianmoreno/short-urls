import React, { useState } from 'react';
import styled from '@emotion/styled';

import FormShorten from './FormShorten';

const Form = styled.form`
  position: relative;
  display: inline-block;
  width: 100%;
  letter-spacing: -1px;
`;
const Disclaimer = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 12px;
  margin: 8px 0 0 0;
  text-align: center;
  height: 25px;

  button {
    padding: 10px 30px;
    background-color: ${(props) => props.theme.colors.shamrock};
  }
`;

const getShortUrl = async (longUrl, setCallback) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: longUrl })
  };

  try {
    const result = await fetch('/api/shortUrl', payload);
    const { shortUrl } = await result.json();
    if (shortUrl) {
      setCallback({
        url: shortUrl,
        success: true,
        error: false,
      });
    }
  } catch (error) {
    setCallback({
      success: false,
      error: true,
    });
  }
};

const Shorter = () => {
  const [longUrl, setLongUrl] = useState('');
  const [callback, setCallback] = useState({ url: '', success: false, error: false });

  const submit = async (evt) => {
    evt.preventDefault();
    await getShortUrl(longUrl, setCallback);
  };

  return (
    <>
      <Form
        onSubmit={ submit }
        key={ callback.success ? Date.now() : 'copied' }
      >
        {
          !callback.success
            ? (
              <FormShorten
                setLongUrl={ setLongUrl }
                init
              />
            )
            : (
              <FormShorten
                url={ callback.url }
              />
            )
        }
      </Form>
      {
        !callback.success
          ? <Disclaimer>This is a service developed academically.</Disclaimer>
          : (
            <Disclaimer>
              <button
                type="button"
                onClick={ () => {
                  setCallback({ url: '', success: false, error: false });
                } }
              >
                New Shorten
              </button>
            </Disclaimer>
          )
      }
    </>
  );
};

export default Shorter;
