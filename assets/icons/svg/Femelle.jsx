import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function Femelle(props) {
    return (
        <Svg
            width={props.width}
            height={props.height}
            viewBox="0 0 46 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M22.174 16.64a8.32 8.32 0 100-16.64 8.32 8.32 0 000 16.64zM45.41 42.713l-5.55-20.712c-.002-.016-.008-.032-.012-.048l-.098-.365-.014.004c-.506-1.579-1.968-2.729-3.715-2.729-.014 0-.026.004-.04.004v-.072H9.86v.068c-1.747 0-3.21 1.151-3.715 2.729l-.014-.004-.098.364c-.004.017-.01.033-.013.05L.47 42.713l.052.014c-.025.171-.052.342-.052.52a3.536 3.536 0 003.536 3.536 3.529 3.529 0 003.283-2.244l.025.007 4.07-15.193v.057h.033c.11-.5.536-.882 1.07-.882s.959.382 1.07.882h.033v.164c.002.025.015.047.015.072 0 .025-.013.047-.015.072v.155L7.073 54.199a1.887 1.887 0 00-.187.698l-.014.051.008.002c-.001.028-.008.054-.008.082 0 1.048.85 1.897 1.898 1.897h4.82v16.08a4.091 4.091 0 008.182 0v-16.08h2.326v16.08a4.09 4.09 0 008.182 0v-16.08h4.835a1.897 1.897 0 001.898-1.897c0-.028-.007-.055-.008-.082l.008-.002-.014-.051a1.887 1.887 0 00-.187-.698l-6.5-24.253.022-.006c-.027-.096-.06-.191-.06-.296 0-.616.5-1.118 1.118-1.118.525 0 .946.371 1.065.86l.043-.011 4.065 15.169.024-.007a3.53 3.53 0 006.819-1.292c0-.178-.027-.349-.052-.52l.055-.012z"
                fill={`#${props.color}`} />
        </Svg>
    )
}