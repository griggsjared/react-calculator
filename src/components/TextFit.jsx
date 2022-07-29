import textFit from "textfit";
import { useRef, useEffect } from "react";

const TextFit = ({className, children}) => {

  const ref = useRef(null);

  useEffect(() => {
    textFit(ref.current)
  }, [ref, children]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default TextFit;
