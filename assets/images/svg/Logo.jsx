import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const Logo = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 187 190"
        width={props.width}
        height={props.height}
        fill="none"
        {...props}
    >
        <Path
            fill="#DFFFFA"
            stroke="#0097B2"
            strokeWidth={7}
            d="M183.5 95c0 50.587-40.347 91.5-90 91.5s-90-40.913-90-91.5 40.347-91.5 90-91.5 90 40.913 90 91.5Z"
        />
        <Path
            stroke="#0097B2"
            strokeWidth={7}
            d="M91.162 71.25s1.81.034 27.116-.475c25.304-.509 24.399 41.262 0 41.8h-14.96s-.776 5.7-3.113 26.6H76.362s1.243-7.6 1.243-9.5"
        />
        <Path
            stroke="#0097B2"
            strokeWidth={7}
            d="M114.5 63.5c0-9.5-9.78-10.775-15.39-10.775H63.58l-9.35 69.825h24.31L83 92H99.181C111.5 92 114.5 85 114.5 78.5"
        />
    </Svg>
)
