import { useState, useEffect } from "react";

export function useIntersecionObserver() {
  const [observerInstance, setObserverInstance] = useState<IntersectionObserver>();

  const observeTarget = (callback: IntersectionObserverCallback, target: Element) => {
    const options = {
      threshold: 0.5,
    };
    
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target)
  }

  return {
    observeTarget
  }
}