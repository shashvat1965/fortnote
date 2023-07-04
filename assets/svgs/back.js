import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const BackSVGComponent = (props) => (
  <Svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={50} height={50} rx={15} fill="#3B3B3B" />
    <Path
      d="M29.585 15.585C28.805 14.805 27.545 14.805 26.765 15.585L17.585 24.765C16.805 25.545 16.805 26.805 17.585 27.585L26.765 36.765C27.545 37.545 28.805 37.545 29.585 36.765C30.365 35.985 30.365 34.725 29.585 33.945L21.825 26.165L29.585 18.405C30.365 17.625 30.345 16.345 29.585 15.585V15.585Z"
      fill="white"
    />
  </Svg>
);
export default BackSVGComponent;
