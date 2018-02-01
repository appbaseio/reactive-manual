import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import React from 'react';
import {colors, media} from 'theme';

const Footer = ({layoutHasSidebar = false}) => (
  <footer
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            paddingRight: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            paddingRight: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingRight: layoutHasSidebar ? 380 : null,
          },
        }}>
        <div
          css={{
            flexWrap: 'wrap',
            display: 'flex',
            width: '100%',
          }}>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>Docs</MetaTitle>
            <FooterLink to="/getting-started/">Quick Start</FooterLink>
            <FooterLink to="/components/textfield.html">
              Components
            </FooterLink>
            <FooterLink to="/advanced/reactivecomponent.html">
              Advanced
            </FooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>Community</MetaTitle>
            <ExternalFooterLink
              href="https://github.com/appbaseio/reactivesearch/"
              target="_blank"
              rel="noopener">
              Github
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://slack.appbase.io/"
              target="_blank"
              rel="noopener">
              Slack
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://twitter.com/appbaseio"
              target="_blank"
              rel="noopener">
              Twitter
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>Helpful Tools</MetaTitle>
            <ExternalFooterLink
              href="https://opensource.appbase.io/dejavu/"
              target="_blank"
              rel="noopener">
              Data browser
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://opensource.appbase.io/mirage/"
              target="_blank"
              rel="noopener">
              GUI Query Builder
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>More</MetaTitle>
            <ExternalFooterLink
              href="https://medium.appbase.io/"
              target="_blank"
              rel="noopener">
              Medium Publication
            </ExternalFooterLink>
            <ExternalFooterLink
              href="http://docs.appbase.io/"
              target="_blank"
              rel="noopener">
              Appbaseio Docs
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://gitter.im/appbaseio/reactivesearch"
              target="_blank"
              rel="noopener">
              Gitter
            </ExternalFooterLink>
            <ExternalFooterLink
              href="mailto:support@appbase.io"
              target="_blank"
              rel="noopener">
              Support Email
            </ExternalFooterLink>
          </FooterNav>
        </div>
      </div>
    </Container>
    <div
      css={{
        position: 'absolute',
        margin: '20px 0 0 0',
        padding: '10px 0',
        backgroundColor: colors.blueDark,
        textAlign: 'center',
        width: '100%',
        bottom: 0,
      }}
    >
      Made with <a href="https://github.com/gatsbyjs/gatsby" target="_blank">GatsbyJS</a>
      , <a href="https://github.com/reactjs/reactjs.org" target="_blank">Reactjs</a> and ❤️
    </div>
  </footer>
);

export default Footer;
