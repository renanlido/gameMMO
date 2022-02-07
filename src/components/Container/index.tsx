import React from 'react';

import { Container as DefaultContainer } from './styles';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <DefaultContainer {...rest}>{children}</DefaultContainer>
);

export { Container };
