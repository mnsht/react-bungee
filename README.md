# react-bungee

A small, modern React component to help you transition height

- Zero dependencies
- 1.1kb gzipped
- Uses React Hooks (>= 16.8.0)

[Play around with it in Storybook](https://mnsht.github.io/react-bungee/)

## Installation

`yarn add react-bungee`

## Usage

You'll need to keep track of what your current height is. You can do so using component state (`useState` or `this.state` will do) and then pass that value into the `height` props in the component below:

```jsx
<Bungee
  height={height}
  duration={1000}
  easing="linear"
  delay={0}
  className="my-box"
  style={{ background: 'lightGray' }}
  componentClassName="my-component"
  componentStyle={{ background: 'gray' }}
  onBefore={values => console.log('Before', values)}
  onAfter={values => console.log('After', values)}
>
  <p>Your content goes here</p>
</Bungee>
```

## Props

- **height** (_required_) - The current height of the component. This can be be `auto`, any percentage (e.g. `"50%"`), or any pixel value (e.g. `"250"` or `250`).

- **duration** (_default: 500_) - The duration (in milliseconds) of the height animation.

- **easing** (_default: "ease-in-out"_) - The easing function of the height animation.

- **delay** (_default: 0_) - The delay (in milliseconds) of the height animation.

- **className** - Any classes, if any, you want to attach to the container of your `children`.

- **style** - Any styles, if any, you want to attach to the container of your `children`.

- **componentClassName** - Any classes, if any, you want to attach to the container of the component. _Note: this applies classes to the parent of the element for `className`._

- **componentStyle** - Any styles, if any, you want to attach to the container of the component. _Note: this applies styles to the parent of the element for `style`._

- **onBefore** - An event listener that fires before the animation takes place. You're passed values, which contains the height value you've `given` and the `computed` height value (determined by the component). It looks such such: `{ given: 'auto', computed: '226px' }`.

- **onAfter** - An event listener that fires after the animation takes place. You're passed values, which contains the height value you've `given` and the `computed` height value (determined by the component). It looks such such: `{ given: 'auto', computed: '226px' }`.

## Contributing

1. `yarn install` - installs all dev dependencies
2. `yarn start` - starts the Rollup task to compile code as you save
3. `yarn storybook` - your storybook preview

Fork and PR at will!
