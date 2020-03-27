import React, { FunctionComponent, useState } from 'react';
import posed from 'react-pose';
import { Box } from 'bloomer';

import { H5, P } from './';
import { Checkbox } from './checkbox';

// const Box = posed.div({
//   normal: { height: '100px', ease: 'linear' },
//   expanded: { height: '100%', ease: 'linear' },
// });

const TextBox = posed.div({
  normal: { opacity: 0, transition: { duration: 300, ease: 'linear' } },
  //   expanded: { opacity: 1, transition: { duration: 300, delay: 200, ease: 'linear' } },
});

export const CharityBox: FunctionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const buttonText = expanded ? 'See less' : 'See more';
  const pose = expanded ? 'expanded' : 'normal';

  return (
    <Box
      style={{
        border: '2px solid #E5E5E5',
        // borderRadius: '8px',
        // marginTop: '12px',
        // marginBottom: '12px',
        // padding: '12px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div style={{ marginRight: '8px' }}>
        <Checkbox id="unchecked" label="Unchecked" />
      </div>

      <div>
        <H5>Breast Cancer Society</H5>
        <P lightWeight>Cancer, women, medical, mental health</P>
        <a
          style={{ fontFamily: 'Work Sans', fontSize: '0.8rem', color: '#0081CF' }}
          onClick={() => setExpanded(!expanded)}
        >
          {buttonText}
        </a>

        {expanded && (
          <div>
            <div
              style={{ borderTop: '2px solid #E5E5E5', marginTop: '8px', paddingBottom: '8px' }}
            />

            <TextBox pose={pose}>
              <P dark>
                We help women with breast cancer, fight the hard fight and give them support when
                they need it the most.
              </P>
            </TextBox>

            <a
              style={{
                fontFamily: 'Work Sans',
                fontSize: '0.8rem',
                color: '#0081CF',
                marginTop: '4px',
              }}
            >
              Visit website
            </a>
          </div>
        )}
      </div>
    </Box>
  );
};
