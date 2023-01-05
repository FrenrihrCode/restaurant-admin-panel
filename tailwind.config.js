module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#EA6A12',
				'primary-ligth': '#F09557',
				'text-body': '#959895',
				'text-title': '#07143B',
			},
			fontSize: {
				body: [
					'16px',
					{
						lineHeight: '28px',
						letterSpacing: '0.02em',
						fontWeight: '400',
					},
				],
				title: [
					'40px',
					{
						lineHeight: '52px',
						letterSpacing: '0.02em',
						fontWeight: '700',
					},
				],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms')({ strategy: 'base' }),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
