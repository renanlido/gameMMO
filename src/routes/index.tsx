import { Route, BrowserRouter } from 'react-router-dom';
import { GameDetails } from '../pages/GameDetails';

import { Home } from '../pages/Home';
import { LatestNews } from '../pages/LatestNews';

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={GameDetails} path="/game-details" />
    <Route component={LatestNews} path="/latest-news" />
  </BrowserRouter>
);

export { Routes };
