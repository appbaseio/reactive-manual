// Polyfills for IE
import 'array-from';
import 'string.prototype.includes';
import 'string.prototype.repeat';

import React, {Component} from 'react';
import Flex from 'components/Flex';
import Footer from 'components/LayoutFooter';
import Header from 'components/LayoutHeader';
import {media} from 'theme';
import ExternalLinkSvg from 'templates/components/ExternalLinkSvg';

// Import global styles
import '../prism-styles';
import 'glamor/reset';
import 'css/reset.css';

class Template extends Component {
  render() {
    const {children, location} = this.props;

    let layoutHasSidebar = true;

    return (
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <Header location={location} />
        <Flex
          direction="column"
          shrink="0"
          grow="1"
          valign="stretch"
          css={{
            flex: '1 0 auto',
            marginTop: 60,
            [media.between('medium', 'large')]: {
              marginTop: 50,
            },
            [media.lessThan('medium')]: {
              marginTop: 40,
            },
          }}>
          {children()}
        </Flex>
        <div
          css={{
            position: 'fixed',
            bottom: 0,
            padding: 20,
            width: '100%',
            background: '#fff566',
            color: '#262626',
            fontWeight: '500',
            textAlign: 'center',
            zIndex: 9,
            boxShadow: '0 6px 12px 0 rgba(0,0,0,0.1)',
          }}>
          <h3 css={{fontSize: '1.4rem'}}>
            <span css={{marginRight: 5}}>🆕</span>Visit our new docs available
            at{' '}
            <a
              css={{
                color: '#1890ff',
                '&:hover': {
                  color: '#40a9ff',
                },
              }}
              target="_blank"
              href="https://docs.appbase.io/docs/reactivesearch/gettingstarted/">
              docs.appbase.io{' '}
              <ExternalLinkSvg
                cssProps={{
                  verticalAlign: -2,
                  display: 'inline-block',
                }}
              />
            </a>
          </h3>
        </div>
        <Footer layoutHasSidebar={layoutHasSidebar} />
      </div>
    );
  }
}
export default Template;
