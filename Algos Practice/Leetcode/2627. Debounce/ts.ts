type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (...args) {
    if (timeout === null) {
      timeout = setTimeout(() => {
        fn(...args);
        timeout = null;
      }, t);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args);
        timeout = null;
      }, t);
    }
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
