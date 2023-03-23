import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';
const mysql = require("mysql2");
async function start() {
	// const connection = mysql.createConnection({
	// 	host: "mysql",
	// 	user: "root",
	// 	password: "root",
	// });

	// // Run create database statement
	// connection.query(
	// 	`CREATE DATABASE IF NOT EXISTS arts;`,
	// 	function (err, results) {
	// 		console.log(results);
	// 		console.log(err);
	// 	}
	// );

	// // Close the connection
	// connection.end();
	
	const PORT = process.env.PORT || 1234;
	const app = await NestFactory.create(AppModule);

	app.enableCors()

	app.useGlobalPipes(new ValidationPipe())
	await app.listen(PORT, () => console.log(`Server is running on PORT - ${PORT}`))
}


start();