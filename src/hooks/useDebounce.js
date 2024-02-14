import { useRef } from "react";

export default function useDebounce(callback, delay) {
    const timeIdRef = useRef(null);
    return (...args) => {
        if (timeIdRef.current) {
            clearTimeout(timeIdRef.current);
        }
        timeIdRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
