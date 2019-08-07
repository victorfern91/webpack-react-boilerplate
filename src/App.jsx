import React from 'react';
import { includeHotReloadCapabilities } from 'utils/dev';

const App = () => <h1>Hello World!</h1>;

export default includeHotReloadCapabilities(App);
