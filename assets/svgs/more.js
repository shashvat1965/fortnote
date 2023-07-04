import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const MoreSVGComponent = (props) => (
    <Svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={50} height={50} rx={15} fill="#3B3B3B" />
        <Path d="M13 17H37" stroke="white" strokeWidth={4} strokeLinecap="round" />
        <Path d="M13 25H37" stroke="white" strokeWidth={4} strokeLinecap="round" />
        <Path d="M13 33H37" stroke="white" strokeWidth={4} strokeLinecap="round" />
    </Svg>
);
export default MoreSVGComponent;
