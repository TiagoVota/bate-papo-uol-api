import connection from '../database/database.js'


const insertMessage = async ({ from, to, text, type, time }) => {
	const { mongoClient, db } = await connection()

	const message = await db.collection('messages').insertOne({
		from,
		to,
		text,
		type,
		time,
	})

	mongoClient.close()
	return message
}


const repositoryFunction = async ({ email, name, age }) => {
	const data = {
		email,
		name,
		age,
	}
	

	// const result = await connection.databaseFunction(data)
	const result = await data

	return result
}


export {
	insertMessage,
	repositoryFunction,
}
