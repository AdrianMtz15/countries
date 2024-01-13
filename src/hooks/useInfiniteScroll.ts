import { useEffect, useState } from "react"
import { useStore } from '@src/store';
import { useIntersecionObserver } from "./useIntersectionObserver";

export function useInfiniteScroll() {
  const observerRef = useStore((state) => state.observerRef);
  const allCountries = useStore((state) => state.allCountries);
  const renderCountries = useStore((state) => state.renderCountries);
  const setRenderCountries = useStore((state) => state.setRenderCountries);

  const [initialPosition, setInitialPosition] = useState<number>(0);
  const [targetIndex, setTargetIndex] = useState<number>(25);

  const { observeTarget } = useIntersecionObserver();

  const minCountries = 50;
  const maxCountries = 200;

  useEffect(() => {
    const newCountries = allCountries.slice(0, targetIndex*2);
    setRenderCountries(newCountries);
  }, [targetIndex]);

  useEffect(() => {
    if(observerRef?.current) {
      observeTarget(handleScrollDirection, observerRef.current);
    }
  }, [observerRef]);


  const handleScrollDirection: IntersectionObserverCallback = (entries) => {    
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        const isElementIntersecting = entry.isIntersecting;
        const valueOfY = entry.boundingClientRect.y;
    
        if(isElementIntersecting) {
          setInitialPosition(valueOfY);
        } else {
          handleTargetIndex(valueOfY);
        }
      }
    });
  }

  const handleTargetIndex = (lastPosition: number) => {
    if(initialPosition > lastPosition) {
      incrementTargetIndex();
    } else {
      reduceTargetIndex();
    }
  }

  const incrementTargetIndex = () => {
    const numOfRenderCountries = renderCountries.length + 50;
    
    if(numOfRenderCountries <= maxCountries) {
      setTargetIndex(numOfRenderCountries/2);
    }
  }

  const reduceTargetIndex = () => {
    const numOfRenderCountries = renderCountries.length - 50;

    if(numOfRenderCountries >= minCountries) {
      setTargetIndex(numOfRenderCountries/2);
    }
  }

  return {
    handleScrollDirection,
    targetIndex
  }
  

}