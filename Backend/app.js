const express = require('express');
const cors = require('cors');

const app = express();
const sequelize = require('./model/bill');
const Router = require('./routes/route');

app.use(cors());
app.use(express.json());

app.use('/', Router);

sequelize.sync()
	.then(res => {
		app.listen(4000);
	})
	.catch(err => console.log(err));