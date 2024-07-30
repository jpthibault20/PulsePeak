import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const SuiviIcon = (props) => {

    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 32 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1 18l8.4-9.154 7.2 7.846L31 1m0 0H20.2M31 1v11.77"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}