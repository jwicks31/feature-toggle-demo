import { compose } from 'lodash/fp';
import withFeatures from './withFeatures';
import { withRouter } from 'next/router';

export default compose(
  withFeatures,
  withRouter,
);