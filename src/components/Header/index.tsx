import React from 'react';
import { Button } from '@chakra-ui/react';
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

        <Button colorScheme="green" height={35}>
          Sign in / Sign up
        </Button>
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
