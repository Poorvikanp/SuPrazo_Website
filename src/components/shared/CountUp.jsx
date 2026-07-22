import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ end, prefix = "", suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}