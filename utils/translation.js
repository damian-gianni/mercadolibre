
const language = 'es';
const TEXTS = [
	{
		key: 'search.placeholder',
		es: 'Buscar productos, marcas y más...',
		en: 'Search products, brands & more...'
	},
	{
		key: 'new',
		es: 'Nuevo',
		en: 'New'
	},
	{
		key: 'used',
		es: 'Usado',
		en: 'Used'
	}
];

export default (key) => {
	try {
		return TEXTS.find(t => t.key === key)[language]
	} catch (error) {
		console.log(`Error find the key: ${key}`);
		return key;
	}

};