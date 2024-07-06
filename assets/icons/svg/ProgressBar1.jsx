import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function ProgressBar1(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 266 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8 8h250"
                stroke="#F4F4F4"
                strokeWidth={15}
                strokeLinecap="round"
            />
            <Path
                d="M8 .5a7.5 7.5 0 100 15V.5zm62.5 15H78V.5h-7.5v15zM8 15.5h62.5V.5H8v15z"
                fill="url(#paint0_linear_91_215)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_91_215"
                    x1={8}
                    y1={8.5}
                    x2={70.5}
                    y2={8.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#03BADB" />
                    <Stop offset={0.85} stopColor="#03BADB" />
                    <Stop offset={1} stopColor="#F4F4F4" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}