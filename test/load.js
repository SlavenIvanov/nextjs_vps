import http from 'k6/http';

export const options = {
	stages: [
		{ duration: '5s', target: 1000 },
		{ duration: '50s', target: 2000 },
		{ duration: '5s', target: 100 }, // scale down. Recovery stage.
	],
};

export default function () {
	// const res = http.get('http://209.38.140.77/'); //big
	const res = http.get('http://64.23.210.216/'); //small
	// const res = http.get('https://vps.ashleyrudland.com/');
	// const res = http.get('https://nextjsvps-production.up.railway.app/');
}
