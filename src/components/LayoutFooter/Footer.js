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
            <FooterLink to="/getting-started">Quick Start</FooterLink>
            <FooterLink to="/docs/basic-components">
              Basic Components
            </FooterLink>
            <FooterLink to="/docs/map-components">
              Map Components
            </FooterLink>
            <FooterLink to="/docs/search-components">
              Search Components
            </FooterLink>
            <FooterLink to="/docs/advanced">
              Advanced
            </FooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>Community</MetaTitle>
            <ExternalFooterLink
              href="http://stackoverflow.com/questions/tagged/reactjs"
              target="_blank"
              rel="noopener">
              Stack Overflow
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discuss.reactjs.org"
              target="_blank"
              rel="noopener">
              Discussion Forum
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discord.gg/0ZcbPKXt5bZjGY5n"
              target="_blank"
              rel="noopener">
              Reactiflux Chat
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://www.facebook.com/react"
              target="_blank"
              rel="noopener">
              Facebook
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://twitter.com/reactjs"
              target="_blank"
              rel="noopener">
              Twitter
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>Resources</MetaTitle>
            <FooterLink to="/community/conferences.html">
              Conferences
            </FooterLink>
            <FooterLink to="/community/videos.html">Videos</FooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react/wiki/Examples"
              target="_blank"
              rel="noopener">
              Examples
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react/wiki/Complementary-Tools"
              target="_blank"
              rel="noopener">
              Complementary Tools
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>More</MetaTitle>
            <FooterLink to="/blog/">Blog</FooterLink>
            <ExternalFooterLink
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener">
              GitHub
            </ExternalFooterLink>
            <ExternalFooterLink
              href="http://facebook.github.io/react-native/"
              target="_blank"
              rel="noopener">
              React Native
            </ExternalFooterLink>
            <FooterLink to="/acknowledgements.html">
              Acknowledgements
            </FooterLink>
          </FooterNav>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
