const { doRequest } = require ('httpreq');
const { promisify } = require ('es6-promisify');

let config = {
	timeout: 5000,
	idKeys: [
		'amgAlbumId',
		'amgArtistId',
		'amgVideoId',
		'id',
		'isbn',
		'upc'
	]
};

function httpError (err, res, message) {
	let error = new Error (message);

	error.code = res && res.statusCode;
	error.body = res && res.body;
	error.error = err;

	return error;
}

function httpResponse (err, res, callback, firstResult) {
	let data = res && res.body || '';
	let error = null;

	try {
		data = JSON.parse (data);

		if (!(data.results instanceof Array) || !data.results.length) {
			error = new Error ('no results');
		} else if (firstResult) {
			data = data.results [0];
		}
	} catch (e) {
		error = httpError (e, res, 'invalid response');
	}

	if (err) {
		error = httpError (err, res, 'http error');
	}

	if (error) {
		callback (error);
	} else {
		callback (null, data);
	}
}

function httpRequest (props, callback) {
	let firstResult = false;
	let options = {
		url: 'https://itunes.apple.com/search',
		method: 'POST',
		parameters: props.params || {},
		timeout: parseInt (props.timeout || config.timeout, 10),
		headers: {
			'User-Agent': 'itunessearchapi.js'
		}
	};

	doRequest (options, (err, res) => {
		httpResponse (err, res, callback, firstResult);
	});
}


module.exports = promisify ((params, timeout, callback) => {
	let options = {
		params: params || {}
	};

	if (typeof timeout === 'function') {
		callback = timeout;
		timeout = null;
	}

	if (!params || !(params instanceof Object)) {
		callback (new Error ('invalid params'));
		return;
	}

	options.params.version = params.version || 2;
	options.timeout = timeout;
	httpRequest (options, callback);
});
