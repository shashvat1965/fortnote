import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";
const SaveSVGComponent = (props) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={50} height={50} rx={15} fill="#3B3B3B" />
    <G clipPath="url(#clip0_56_64)">
      <Path
        d="M26.8175 22.1475L27.8525 23.1825L17.66 33.375H16.625V32.34L26.8175 22.1475ZM30.8675 15.375C30.5863 15.375 30.2937 15.4875 30.08 15.7012L28.0212 17.76L32.24 21.9787L34.2987 19.92C34.7375 19.4812 34.7375 18.7725 34.2987 18.3338L31.6663 15.7012C31.4413 15.4762 31.16 15.375 30.8675 15.375ZM26.8175 18.9638L14.375 31.4062V35.625H18.5938L31.0362 23.1825L26.8175 18.9638Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_56_64">
        <Rect
          width={27}
          height={27}
          fill="white"
          transform="translate(11 12)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SaveSVGComponent;
