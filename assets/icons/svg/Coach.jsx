import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CoachIcon = (props) => {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1 27.414c0-5.506 4.6-9.97 14-9.97s14 4.464 14 9.97C29 28.29 28.36 29 27.573 29H2.427C1.64 29 1 28.29 1 27.414zM20.25 6.25a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                stroke={props.color}
                strokeWidth={2}
            />
        </Svg>
    )
}