import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Male(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 38 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M18.807 16.993a8.272 8.272 0 100-16.544 8.272 8.272 0 000 16.544zM34.47 19.217v-.04H4.834v.027A3.895 3.895 0 00.94 23.071H.937V46.51h.039a3.477 3.477 0 106.954 0h.008V30.148h.009a1.104 1.104 0 011.1-1.064c.599 0 1.079.473 1.104 1.064h.009v42.905a4.067 4.067 0 008.136-.005V51.444h.03a1.127 1.127 0 112.253 0h.029v21.604a4.07 4.07 0 008.137 0V30.148a1.11 1.11 0 112.222 0v16.363h.038a3.478 3.478 0 106.956 0h.007V23.072c.002-2.015-1.535-3.654-3.498-3.855z"
                fill={`#${props.color}`} />
        </Svg>
    )
}