import React from 'react';
import {
  Row, Col, Container,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faPalette, faMoneyBillWave, faCertificate, faPlus, faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import Template from './Templates/Dashboard';
import CalendarUIHeader from "./CalendarUIHeader/CalendarUIHeader";
import CalendarUIWeeks from "./CalendarUIWeeks/CalendarUIWeeks";
import CalendarUIDays from "./CalendarUIDays/CalendarUIDays";

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
    </React.Fragment>
  </Template>
);

export default withRouter(CalendarUI);
