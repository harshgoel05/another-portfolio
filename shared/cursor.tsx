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
  function removeMouseCursor() {
    if (cursorRef.current == null) return;
    cursorRef.current.setAttribute('style', `display: none;`);
  }
  function addMouseCursor() {
    if (cursorRef.current == null) return;
    cursorRef.current.setAttribute('style', `display: block;`);
  }
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener('mousemove', mouseHoverHandler);
    document.addEventListener('mouseleave', removeMouseCursor);
    document.addEventListener('mouseenter', addMouseCursor);
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('mousemove', mouseHoverHandler);
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('mouseleave', removeMouseCursor);
      document.removeEventListener('mouseenter', addMouseCursor);
    };
  }, []);
  return <div className="cursor z-50" ref={cursorRef} />;
}
