require('babel/polyfill')
import { log, fetch } from '../util'

async function go() {
	var result = await fetch.promise('/products')
	log('complete await', result.url)

	result = await fetch.promise('/attributes')
	log('complete await', result.url)

	result = await fetch.promise('/categories')
	log('complete await', result.url)

}

export function await() {
	go()
}