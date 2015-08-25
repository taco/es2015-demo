require('babel/polyfill')
import { log, fetch, spawn } from '../util'


export function generator() {
	
	function* go() {
		var result = yield fetch.promise('/products')
		log('complete generator', result.url)

		result = yield fetch.promise('/attributes')
		log('complete generator', result.url)

		result = yield fetch.promise('/categories')
		log('complete generator', result.url)

	}

	spawn(go)
}