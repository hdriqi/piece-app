module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		fontFamily: {
			title: ['Limelight', 'cursive'],
			body: ['Josefin Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				'primary-color': '#F52D3A',
				'secondary-color': '#F7F4ED',
			},
			boxShadow: {
				'bold': '4px 4px 0px #000000;'
			}
		},
	},
	variants: {},
	plugins: [],
}
