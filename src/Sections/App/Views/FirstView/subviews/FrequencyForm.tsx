import React, { FunctionComponent } from 'react';
import { Select } from 'bloomer';

import { H4 } from '../components';
import { Steps } from '../step';
import { SignUpInfo } from '../models';

type Props = {
    next: () => void;
    updateInfo: (info: SignUpInfo) => void;
    info: SignUpInfo;
};

export const FrequencyForm: FunctionComponent<Props> = ({ next, info, updateInfo }) => (
  <div>
    <H4 style={{ marginTop: '16px', marginBottom: '16px' }}>How often would you like to donate?</H4>

    <Select onChange={e => { updateInfo({ ...info, frequency: (e.target as any).value }); next(); }}>
      <option value="selectFrequency" defaultChecked>
        Select frequency
      </option>
      <option onClick={() => console.log('daily')} value="daily">
        Daily
      </option>
      <option onClick={() => console.log('daily')} value="weekly">
        Weekly
      </option>
      <option onClick={e => console.log(e.currentTarget)} value="monthly">
        Monthly
      </option>
      <option onClick={e => console.log(e.currentTarget)} value="one-off">
        One off
      </option>
    </Select>
  </div>
);
