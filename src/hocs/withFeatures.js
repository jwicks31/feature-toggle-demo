import React from 'react';
import { FeatureToggles } from '@paralleldrive/react-feature-toggles';
import { getCurrentActiveFeatureNames } from '@paralleldrive/feature-toggles';
import { initialFeatures } from '../config/features';
import { useRouter } from 'next/router'
import hoistStatics from './hoistStatics';

const withFeaturesHOC = Component => props => {
  // const router = useRouter()
  // const req = {
  //   query: router.query,
  // };
  const features = getCurrentActiveFeatureNames({ initialFeatures });
  return (
    <FeatureToggles features={features}>
      <Component {...props} />
    </FeatureToggles>
  );
};

export default hoistStatics(withFeaturesHOC);