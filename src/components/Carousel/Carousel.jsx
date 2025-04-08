import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { CarouselContainer, Inner, Indicadores, Prev, Next } from './styles';

export const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 6000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex, paused]);

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <CarouselContainer
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Indicadores>
        <Prev onClick={() => updateIndex(activeIndex - 1)}>
          ‹
        </Prev>
        
        <Inner style={{ transform: `translateX(-${activeIndex * 20}%)` }}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { width: '20%' });
          })}
        </Inner>

        <Next onClick={() => updateIndex(activeIndex + 1)}>
          ›
        </Next>
      </Indicadores>
    </CarouselContainer>
  );
};