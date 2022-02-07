import React from 'react';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Container, Nav, NavWrapper, HeaderContent } from './styles';

import newWorldMMO from '../../assets/images/newWordLogo.png';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  banner?: boolean;
  bgImage?: string;
  pageName?: string;
}

const Header: React.FC<HeaderProps> = ({ banner, bgImage, pageName }) => (
  <Container bgImage={bgImage}>
    <header />
    <Nav>
      <NavWrapper>
        <h1>{pageName || 'DEVmmo'}</h1>

        <div>
          <Link
            as={ReactLink}
            to="/"
            display="flex"
            flexDirection="row"
            gap="5px"
            alignItems="center"
            justifyContent="center"
          >
            <FaHome />
            Go to home
          </Link>

          <Link as={ReactLink} to="/latest-news">
            Latest News
          </Link>
        </div>
      </NavWrapper>
    </Nav>
    {banner && (
      <HeaderContent>
        <img src={newWorldMMO} alt="New Wordl MMO" />
        <span>The best of MMO!</span>
      </HeaderContent>
    )}
  </Container>
);

export { Header };
