module.exports = {
	root: true,
	extends: '@react-native-community',
	rules: {
		indent: ['error', 2],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'sort-keys': ['error', 'asc', {caseSensitive: true, natural: false}],
		'comma-dangle': ['error', 'never']
	}
}
