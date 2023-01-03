module.exports = {
	extends: ['@antfu', 'prettier'],
	rules: {
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['index', 'home', 'default'],
			},
		],
	},
};
