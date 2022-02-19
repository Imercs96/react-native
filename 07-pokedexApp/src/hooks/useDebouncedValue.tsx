import { useState, useEffect } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
  const [ deboucedValue, setDeboucedValue ] = useState(input)

  useEffect(() => {
    const timeout = setTimeout(() => setDeboucedValue(input), time);
    return () => clearTimeout(timeout)
  }, [ input ])
  
  return deboucedValue
}
