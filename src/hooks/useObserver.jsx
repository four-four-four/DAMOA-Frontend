import { useEffect, useState } from 'react';
export const useObserver = (ref, options) => {
  const { rootMargin } = options;
  const [observerEntry, setObserverEntry] = useState(null);

  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setObserverEntry(entry);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.8, rootMargin }
    );

    observer.observe(ref.current);
  }, [ref, rootMargin]);

  return observerEntry;
};
