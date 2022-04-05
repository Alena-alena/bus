import React, { ReactElement, useEffect } from 'react';
import { getBriefList } from '../../services/BriefDataService';

function BriefList(): ReactElement {
  useEffect(() => {
    getBriefList();
  }, []);

  return <h1>Hello!</h1>;
}

export default BriefList;
