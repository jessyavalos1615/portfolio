import React from 'react';

import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';

import { HomePresentation } from './Style';
import { ButtonVariant } from '../../components/Button/ButtonTypes';
import { LabelSize } from '../../components/Label/LabelTypes';
import TypingLabel from '../../components/Label/TypingLabel/TypingLabel';

const Home = (): JSX.Element => {
  return (
    <>
      <HomePresentation>
        <Label size={LabelSize.xlargelabel} text="hi!" />
        <Label size={LabelSize.xlargelabel} text={`i'm jessy`} />
        <Label size={LabelSize.xlargelabel} text="web developer" />
        <TypingLabel
          size={LabelSize.mediumlabel}
          sequence={[
            'Software Engineer',
            2000,
            'Front-end Developer',
            2000,
            'Mobile App Developer',
            2000,
          ]}
          repeat={Infinity}
          style={{ marginTop: '17px', marginBottom: '67px' }}
        />
        <Button variant={ButtonVariant.default}>Contact Me!</Button>
      </HomePresentation>
    </>
  );
};

export default Home;
