import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CalendarIcon = (props) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 30 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8 26.28v-.137m7.875.137v-.137m0-7.314v-.138m7 .138v-.138M2.75 11.514h24.5M5.917 1v2.743M23.75 1v2.743m0 0H6.25C3.35 3.743 1 6.199 1 9.229v18.285C1 30.544 3.35 33 6.25 33h17.5c2.9 0 5.25-2.456 5.25-5.486V9.23c0-3.03-2.35-5.486-5.25-5.486z"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
};