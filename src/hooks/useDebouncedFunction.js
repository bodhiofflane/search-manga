import { useRef } from 'react';

export default function useDebouncedFunction(func, delay) {
    const ref = useRef(null);

    return (...args) => {
        clearTimeout(ref.current);
        ref.current = setTimeout(() => func(...args, delay));
    };
}
