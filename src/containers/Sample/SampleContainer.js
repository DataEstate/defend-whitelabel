// @flow

import React from "react";
import { EstatesProvider } from "src/context/Estates";
import { SampleComponent } from "src/components/Sample";

export const SampleContainer = () => {
  return (
    <EstatesProvider>
      <SampleComponent />
    </EstatesProvider>
  );
};

export default SampleContainer;
