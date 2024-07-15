import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export function ProgressBar({ width, height, percentage }) {
    const maxLength = 250;
    const filledLength = (percentage / 100) * maxLength;

    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 266 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M8 8h250"
                stroke="#F4F4F4"
                strokeWidth={15}
                strokeLinecap="round"
            />
            <Path
                d="M8 8h250"
                stroke="url(#paint0_linear_91_215)"
                strokeWidth={15}
                strokeLinecap="round"
                strokeDasharray={`${filledLength}, ${maxLength}`}
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_91_215"
                    x1={8}
                    y1={8.5}
                    x2={8 + filledLength}
                    y2={8.5}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#03BADB" />
                    <Stop offset={1} stopColor="#03BADB" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
