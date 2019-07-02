import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { withKnobs, number, select, button } from '@storybook/addon-knobs';

import Bungee from './index';

import './sample-styles.css';

const store = new Store({
  height: 'auto'
});

const stories = storiesOf('Bungee', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const ranges = {
    range: true,
    min: 0,
    max: 5000,
    step: 50
  };

  const duration = number('Duration', 500, ranges);
  const easing = select('Easing', [
    'linear',
    'ease-in',
    'ease-out',
    'ease-in-out'
  ]);
  const delay = number('Delay', 0, ranges);

  button('Set height to 0px', () => store.set({ height: 0 }));
  button('Set height to auto', () => store.set({ height: 'auto' }));
  button('Set height to 150px', () => store.set({ height: 150 }));
  button('Set height to 50%', () => store.set({ height: '50%' }));

  return (
    <State store={store}>
      {({ height }) => (
        <Bungee
          className="my-box"
          style={{ background: 'lightGray' }}
          componentClassName="my-component"
          componentStyle={{ background: 'gray' }}
          height={height}
          duration={duration}
          easing={easing}
          delay={delay}
          onBeforeAnimation={values => console.log('Before animation', values)}
          onAfterAnimation={values => console.log('After animation', values)}
        >
          <p>This is something that has height...</p>
          <p>This is something that has height...</p>
          <p>This is something that has height...</p>
          <p>This is something that has height...</p>
          <p>This is something that has height...</p>
        </Bungee>
      )}
    </State>
  );
});
