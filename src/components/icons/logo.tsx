import type * as React from 'react'

type LogoProps = React.SVGProps<SVGSVGElement>

/** The HAWConnect app icon (rounded purple square with the white mark). */
const HawConnectLogo: React.FC<LogoProps> = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		aria-label="HAWConnect Logo"
		role="img"
		{...props}
	>
		<rect width="100" height="100" rx="20" fill="#40296C" />
		<g transform="translate(12 12) scale(.76)" color="white">
			<path
				d="M10 37V20a10 10 0 0 1 20 0v8c-8 1-15 4-20 9Z"
				fill="currentColor"
			/>
			<path
				d="M20 80V58c0-17 15-20 30-12s30 9 30-13V20"
				fill="none"
				stroke="currentColor"
				strokeWidth="20"
				strokeLinecap="round"
			/>
			<path
				d="M70 68c8-2 15-6 20-12v24a10 10 0 0 1-20 0Z"
				fill="currentColor"
			/>
		</g>
	</svg>
)

export default HawConnectLogo
