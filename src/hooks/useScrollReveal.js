import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element enters viewport
 * and trigger entrance animations.
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return [ref, isVisible];
}

/**
 * Count-up animation hook for numbers
 */
export function useCountUp(endVal, duration = 1800, startNow = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startNow) return;

    let startTimestamp = null;
    const numericTarget = typeof endVal === 'number' ? endVal : parseInt(String(endVal).replace(/[^0-9]/g, ''), 10) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * numericTarget));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [endVal, duration, startNow]);

  return count;
}
