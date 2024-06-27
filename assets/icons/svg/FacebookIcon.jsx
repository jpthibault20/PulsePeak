import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
export const FacebookIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 35 35"
        fill="none"
        {...props}
    >
        <Path
            fill="url(#a)"
            d="M17.5 2.917C9.446 2.917 2.917 9.446 2.917 17.5S9.446 32.083 17.5 32.083c8.055 0 14.583-6.529 14.583-14.583S25.555 2.917 17.5 2.917Z"
        />
        <Path
            fill="#fff"
            d="M19.474 21.365h3.774l.593-3.834h-4.367v-2.095c0-1.593.52-3.005 2.01-3.005h2.394V9.085c-.42-.056-1.31-.18-2.991-.18-3.51 0-5.568 1.853-5.568 6.076v2.551H11.71v3.834h3.608v10.538c.715.106 1.439.18 2.182.18.672 0 1.327-.062 1.974-.15V21.366Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={7.287}
                x2={29.615}
                y1={7.287}
                y2={29.615}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#2AA4F4" />
                <Stop offset={1} stopColor="#007AD9" />
            </LinearGradient>
        </Defs>
    </Svg>
)