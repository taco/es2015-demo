import { log, fetch } from '../util'

export function promise() {
	log('Running <b>promiseTree</b>')
	
	fetch.promise('/products')
		.then(function({success, items, url}) {
			log('complete promise', url, success, items)

			return fetch.promise('/attributes')
		})
		.then(function({success, items, url}) {
			log('complete promise', url, success, items)

			return fetch.promise('/categories')
		})
		.then(function({success, items, url}) {
			log('complete promise', url, success, items)
		})

}