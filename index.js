const express = require("express");
const app = express();
const CronJob = require('cron').CronJob;

app.get('/', function (req, res) {
	console.log('Before job instantiation');
	const job = new CronJob('*/2 * * * * *', function () {
		const d = new Date();
		console.log('First get hour-minute :', d.getHours(), d.getMinutes());
	});

	const job2 = new CronJob('*/5 * * * * *', function () {
		const d = new Date();
		console.log('Second get date:', d.getDate());
	});
	console.log('After job instantiation');
	job.start();
	job2.start();
});

app.listen(3000, () => {
	console.log(`app listening on port 3000!`);
});