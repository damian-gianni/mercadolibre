const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const parseResponse = (data) => {
	try {
		const { available_filters, filters } = data;
		const categories = available_filters.concat(filters).filter(f => f.id === 'category')[0].values.map(c => c.name);
		const res = {
			author: {
				name: 'Damián',
				lastname: 'Gianni'
			},
			categories: categories,
			items: data.results.slice(0, 4).map(item => (
				{
					id: item.id,
					title: item.title,
					price: {
						currency: item.currency_id,
						amount: parseInt(item.price.toString().split(".")[0]),
						decimals: parseInt(item.price.toString().split(".")[1])
					},
					picture: item.thumbnail,
					condition: item.condition,
					free_shipping: item.shipping.free_shipping
				}
			))
		};
		return res;
	} catch (error) {
		return { error: error };
	}
}

const parseItem = (item, description) => {
	try {
		return {
			author: {
				name: 'Damián',
				lastname: 'Gianni'
			},
			item: {
				id: item.id,
				title: item.title,
				price: {
					currency: item.currency_id,
					amount: parseInt(item.price.toString().split(".")[0]),
					decimals: parseInt(item.price.toString().split(".")[1])
				},
				picture: item.pictures[0].url,
				condition: item.condition,
				free_shipping: item.shipping.free_shipping,
				sold_quantity: item.sold_quantity,
				description: description.plain_text
			}
		}
	} catch (error) {
		return {}
	}
}

app.prepare()
	.then(() => {
		const server = express()

		// CORS
		server.use(function (req, res, next) {
			res.header('Access-Control-Allow-Origin', '*');
			req.header('x_application_id');
			res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
			res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
			res.header('Allow', 'GET, POST');
			next();
		});

		server.get('/api/items', (req, res) => {
			const { query } = req.query;
			console.log(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
			fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
				.then(res => res.json())
				.then(data => {
					const nData = parseResponse(data);
					res.send(nData);
				})
				.catch(err => {
					res.redirect('/error');
				});
		})

		server.get('/api/items/:id', async (req, res) => {
			const itemData = await fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
				.then(res => res.json())
				.then(data => {
					return data;
				})
				.catch(err => {
					res.redirect('/error');
				});

			await fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`)
				.then(res => res.json())
				.then(data => {
					const item = parseItem(itemData, data);
					res.send(item)
				})
				.catch(err => {
					res.redirect('/error');
				});
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})


		server.listen(3000, (err) => {
			if (err) throw err
			console.log('> Ready on http://localhost:3000')
		})
	})
	.catch((ex) => {
		console.error(ex.stack)
		process.exit(1)
	})