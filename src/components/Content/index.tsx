import React from 'react';

import { Container as DefaultContent } from './styles';

interface DefaultContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content: React.FC<DefaultContentProps> = ({ children, ...rest }) => (
  <DefaultContent {...rest}>{children}</DefaultContent>
);

export { Content };
