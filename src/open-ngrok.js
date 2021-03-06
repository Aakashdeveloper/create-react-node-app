#!/usr/bin/env node
import openBrowser from 'react-dev-utils/openBrowser'; // eslint-disable-line import/no-extraneous-dependencies

function openNgrok() {
	process.env.BROWSER = process.env.REAL_BROWSER || '';
	return openBrowser(process.env.NGROK_URL);
}

/* istanbul ignore next line */
if (require.main === module) {
	openNgrok();
}

export default openNgrok;
