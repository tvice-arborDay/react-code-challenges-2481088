import { useEffect, useRef } from 'react';

export default function FocusInput() {
  let inputFocusRef = useRef(null);
  
  useEffect(() => inputFocusRef.current.focus(), [])

  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input ref={inputFocusRef} name='focused-input'></input>
    </div>
  )
}
