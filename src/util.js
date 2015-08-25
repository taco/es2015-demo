import $ from 'jquery'

export function log(...args) {
	var input = args.map(v => v.toString()).join(' ')
	$(`<li>${input}</li>`).appendTo('#log')
}

export function code(text) {
	$('#code').html(text)
}

export let fetch = {
	callback(url, cb) {
		log('<b>Calling</b>', url)
		setTimeout(() => {
			cb({ success: true, items: [1, 2, 3], url })
		}, 300 + Math.random() * 3000)
	},
	promise(url) {
		return new Promise((fulfill, reject) => {
			this.callback(url, results => fulfill(results))
		})
	}
}

export function spawn(generatorFunc) {
    function continuer(verb, arg) {
        var result;
        try {
            result = generator[verb](arg);
        } catch (err) {
            return Promise.reject(err);
        }
        if (result.done) {
            return result.value;
        } else {
            return Promise.resolve(result.value).then(onFulfilled, onRejected);
        }
    }
    var generator = generatorFunc();
    var onFulfilled = continuer.bind(continuer, "next");
    var onRejected = continuer.bind(continuer, "throw");
    return onFulfilled();
}