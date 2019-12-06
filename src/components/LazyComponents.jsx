import React, { lazy, Suspense} from 'react';
import Loading from 'components/Loading';

const HelloWorld = lazy(() => import (/* webpackChunkName: "lazy-example" */ 'components/HelloWorld') );

export const HelloLazyWorld = () => (
  <Suspense fallback={<Loading />}>
    <HelloWorld />
  </Suspense>
);
