import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CustomRoute from './Route';
// import PrivateRoute from './PrivateRoute';

// Containers

// Components
import Calendar from '../components/CalendarUI';
import Error from '../components/UI/Error';

/**
 * All of the routes
 */
const Index = () => (
  <Switch>
    <Route path="/" exact component={Calendar} />

    {/* 404 */}
    <Route
      render={(props) => (
        <Error {...props} title="404" content="Sorry, the route you requested does not exist" />
      )}
    />
  </Switch>
);

export default Index;
