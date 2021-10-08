import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Input = styled.input`
  color: ${(props) => props.theme.colors.prussianBlue};
  border: 4px solid ${(props) => (props.isCopied
    ? props.theme.colors.shamrock : 'transparent')};
  font-size: 1em;
  float: left;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  padding: 0 110px 0 20px;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0);
  transition: all .25s ease-out;
  outline: unset;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  margin-top: -30px;
  right: 0;
  @media (min-width: 420px) {
    width: auto;
  }
  height: 60px;
  font-size: 1em;
  color: ${(props) => props.theme.colors.white};
  text-transform: lowercase;
  cursor: pointer;
  box-shadow: none;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 20px;
  background-color: ${(props) => (props.isCopy
    ? props.theme.colors.shamrock : props.theme.colors.azureRadiance)};
  outline: 0;

  &:hover {
    background-color: ${(props) => (props.isCopy
    ? props.theme.colors.jungleGreen : props.theme.colors.scienceBlue)};
  }
`;

const FormShorten = (props) => {
  const { setLongUrl, url, init } = props;
  const [isCopied, setOnCopy] = useState(false);

  return (
    <>
      {
        init
          ? (
            <>
              <Input
                id="longURL"
                type="url"
                placeholder="Paste long url and shorten it"
                name="longURL"
                onChange={ ({ target }) => { setLongUrl(target.value); } }
                required
              />
              <Button type="submit">Shorten</Button>
            </>
          )
          : (
            <>
              <Input
                id="shortUrl"
                type="url"
                name="shortUrl"
                value={ url }
                onChange={ ({ target }) => { setLongUrl(target.value); } }
                disabled
                isCopied={ isCopied }
              />
              <CopyToClipboard
                text={ url }
                onCopy={ () => { setOnCopy(true); } }
              >
                <Button type="button" isCopy={ isCopied }>
                  { !isCopied ? 'Copy' : 'Copied' }
                </Button>
              </CopyToClipboard>
            </>
          )
      }
    </>
  );
};

FormShorten.propTypes = {
  url: PropTypes.string,
  setLongUrl: PropTypes.func,
  init: PropTypes.bool,
};

FormShorten.defaultProps = {
  url: '',
  setLongUrl: () => {},
  init: false,
};

export default FormShorten;
