import React, { useState, useEffect, useRef } from 'react';

const determineHeight = (height, ref) => {
  if (!ref.current) return;

  const measuredHeight = ref.current.scrollHeight;

  height = height.toString();

  if (height === 'auto') return `${measuredHeight}px`;
  else if (height.includes('%'))
    return `${measuredHeight *
      (height.substr(0, height.indexOf('%')) / 100)}px`;
  else return `${height}px`;
};

export default ({
  height,
  children,
  componentClassName,
  componentStyle,
  duration = 500,
  easing = 'ease-in-out',
  delay = 0,
  onBeforeAnimation,
  onAfterAnimation,
  ...props
}) => {
  const containerRef = useRef(null);
  const [computedHeight, setComputedHeight] = useState(
    determineHeight(height, containerRef)
  );

  useEffect(() => {
    const newHeight = determineHeight(height, containerRef);
    const allHeights = { given: height, computed: newHeight };

    if (onBeforeAnimation) onBeforeAnimation(allHeights);

    setComputedHeight(newHeight);

    if (onAfterAnimation)
      setTimeout(() => onAfterAnimation(allHeights), delay + duration);
  }, [height]);

  const componentStyles = {
    height: computedHeight,
    overflow: 'hidden',
    transition: `height ${duration}ms ${easing} ${delay}ms`,
    ...componentStyle
  };

  return (
    <div
      ref={containerRef}
      style={componentStyles}
      className={componentClassName}
    >
      <div {...props}>{children}</div>
    </div>
  );
};
