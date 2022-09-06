import React from "react";
import { animated } from "react-spring";
import useMove from "./useMove";

const Move = ({ children, ...animationConfig }) => {
  const [style, trigger] = useMove(animationConfig);

  return (
    <animated.div style={style} onMouseEnter={trigger} onClick={trigger}>
      {children}
    </animated.div>
  );
};

export default Move;
