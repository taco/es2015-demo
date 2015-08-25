import { log, fetch } from '../util'

export function callback() {
	log('Running <b>callbackTree</b>')

	fetch.callback('/products', ({success, items, url}) => {
		log('complete callback', url, success, items)

		fetch.callback('/attributes', ({success, items, url}) => {
			log('complete callback', url, success, items)

			fetch.callback('/categories', ({success, items, url}) => {
				log('complete callback', url, success, items)
			})
		})
	})

}