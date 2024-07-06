import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function ProgressBar2(props) {
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
                d="M8 .5a7.5 7.5 0 100 15V.5zm125 15h7.5V.5H133v15zm-125 0h125V.5H8v15z"
                fill="url(#paint0_linear_91_218)"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_91_218"
                    x1={8}
                    y1={8.5}
                    x2={133}
                    y2={8.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#03BADB" />
                    <Stop offset={0.925} stopColor="#03BADB" />
                    <Stop offset={1} stopColor="#fff" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}