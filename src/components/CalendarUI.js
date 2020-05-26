import React from 'react';
import {
  Container,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Template from './Templates/Dashboard';
import CalendarUIHeader from "./CalendarUIHeader/CalendarUIHeader";
import CalendarUIWeeks from "./CalendarUIWeeks/CalendarUIWeeks";
import CalendarUIDays from "./CalendarUIDays/CalendarUIDays";
import CalendarFooter from "./CalendarFooter/CalendarFooter";

const CalendarUI = () => (
  <Template pageTitle="Calendar UI" noPadding>
    <React.Fragment>
      <Container>
        <CalendarUIHeader />
      </Container>
      <Container>
        <CalendarUIWeeks />
      </Container>
      <Container>
        <CalendarUIDays />
      </Container>
      <Container>
        <CalendarFooter />
      </Container>
    </React.Fragment>
  </Template>
);

export default withRouter(CalendarUI);
