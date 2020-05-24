import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Footer from '../UI/Footer';
import PageTitle from '../UI/PageTitle';

const Template = ({ pageTitle, children, noPadding }) => (
  <Fragment>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <PageTitle title={pageTitle} />
    <div className={noPadding ? null : 'py-3 py-md-5'}>
      {children}
    </div>
    <Footer />
  </Fragment>
);

Template.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
  noPadding: PropTypes.bool,
};

Template.defaultProps = {
  pageTitle: 'ReactStarterKit',
  noPadding: false,
};

export default Template;
