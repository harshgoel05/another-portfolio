/* eslint-disable consistent-return */
import { useEffect, useRef } from 'react';

export default function CustomCursor(): JSX.Element {
  const cursorRef = useRef(null);
  function clickHandler() {
    if (cursorRef.current == null) return;
    cursorRef.current.classList.add('expand');
    setTimeout(() => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.remove('expand');
    }, 500);
  }
  function mouseHoverHandler(e) {
    if (cursorRef.current == null) return;
    cursorRef.current.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
  }
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener('mousemove', mouseHoverHandler);
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('mousemove', mouseHoverHandler);
      document.removeEventListener('click', clickHandler);
    };
  }, []);
  return <div className="cursor" ref={cursorRef} />;
}
