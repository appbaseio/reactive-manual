import Container from 'components/Container';
import HeaderLink from './HeaderLink';
import Link from 'gatsby-link';
import React, {Component} from 'react';
import {colors, media} from 'theme';

import logoSvg from 'icons/logo.svg';
import SearchBox from 'components/SearchBox';
import SearchSvg from './SearchSvg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
    };
  }

  componentDidUpdate(nextProps) {
    if (this.props.location !== nextProps.location && this.state.showSearch) {
      this.setState({
        showSearch: false,
      });
    }
  }

  toggleSearch = () => {
    const showSearch = !this.state.showSearch;
    this.setState({
      showSearch,
    });
  };

  handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      this.toggleSearch();
    }
  }

  render() {
    const {location} = this.props;
    return (
      <header
        onKeyDown={this.handleKeyDown}
        css={{
          backgroundColor: colors.darker,
          color: colors.white,
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          top: 0,
          left: 0,
        }}>
        <Container>
          <div
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: 60,
              [media.between('small', 'large')]: {
                height: 50,
              },
              [media.lessThan('small')]: {
                height: 40,
              },
              [media.lessThan('medium')]: {
                justifyContent: 'space-between',
              },
            }}>
            <Link
              css={{
                display: 'flex',
                marginRight: 10,
                height: '100%',
                alignItems: 'center',
                color: colors.brand,

                ':focus': {
                  outline: 0,
                  color: colors.white,
                },

                [media.lessThan('small')]: {
                  flex: '0 0 auto',
                },
              }}
              to="/">
              <img
                src={logoSvg}
                alt="Reactive Manual Logo"
                css={{
                  height: 40,

                  [media.lessThan('small')]: {
                    height: 30,
                  },
                }}
              />
              <span
                css={{
                  color: 'inherit',
                  marginLeft: 10,
                  fontWeight: 700,
                  fontSize: 20,
                  lineHeight: '20px',
                  [media.lessThan('large')]: {
                    fontSize: 16,
                    marginTop: 1,
                  },
                }}>
                Reactive Manual
              </span>
            </Link>

            <nav
              css={{
                display: 'flex',
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'stretch',
                overflowX: 'auto',
                overflowY: 'hidden',
                WebkitOverflowScrolling: 'touch',
                height: '100%',
                width: '60%',

                [media.size('xsmall')]: {
                  flexGrow: '1',
                  width: 'auto',
                },
                [media.greaterThan('xlarge')]: {
                  width: null,
                },
                [media.lessThan('small')]: {
                  maskImage:
                    'linear-gradient(to right, transparent, black 20px, black 90%, transparent)',
                },
                [media.lessThan('medium')]: {
                  display: 'none',
                },
              }}>
              <HeaderLink
                isActive={location.pathname.includes('/getting-started/')}
                title="Getting Started"
                to="/getting-started/installation.html"
              />
              <HeaderLink
                isActive={location.pathname.includes('/basic-components/')}
                title="Basic Components"
                to="/docs/basic-components"
              />
              <HeaderLink
                isActive={location.pathname.includes('/map-components/')}
                title="Map Components"
                to="/docs/map-components"
              />
              <HeaderLink
                isActive={location.pathname.includes('/search-components/')}
                title="Search Components"
                to="/docs/search-components"
              />
              <HeaderLink
                isActive={location.pathname.includes('/advanced/')}
                title="Advanced"
                to="/docs/advanced"
              />
            </nav>
            {location.pathname !== '/' && (
              <div onClick={this.toggleSearch} role="button" tabIndex="0" css={{ cursor: 'pointer' }}>
                <SearchSvg />
              </div>
            )}
          </div>
        </Container>
        {this.state.showSearch && (
          <div
            css={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              color: 'black',
              height: '100vh',
              width: '100%',
              background: colors.blurred,
            }}>
            <div
              css={{
                paddingTop: 80,
              }}>
              <SearchBox />
            </div>
            <i
              className="fa fa-times"
              css={{
                color: colors.white,
                fontSize: '3em',
                cursor: 'pointer',
                position: 'absolute',
                textAlign: 'right',
                paddingRight: 20,
                paddingTop: 20,
                width: '100%',

                [media.greaterThan('medium')]: {
                  width: '90%',
                },
          
                [media.size('xxlarge')]: {
                  maxWidth: 1260,
                },
              }}
              onClick={this.toggleSearch}
              role="button"
              tabIndex="0"
            />
          </div>
        )}
      </header>
    );
  }
}

export default Header;
