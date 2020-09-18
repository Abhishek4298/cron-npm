const express = require("express");
const app = express();
const CronJob = require('cron').CronJob;

app.get('/', function (req, res) {
	new CronJob('* * * * * *', function () {
		console.log("staring cron");
	}, null, true, 'America/Los_Angeles');
});

app.listen(3000, () => {
	console.log(`app listening on port 3000!`);
});