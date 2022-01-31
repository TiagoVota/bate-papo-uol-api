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


const findMessages = async ({ user, limit }) => {
	const { mongoClient, db } = await connection()

	const findFilter = {
		$or: [
			{ from: user },
			{ to: user },
			{ to: 'Todos' },
		]
	}

	const messages = limit
		? await db.collection('messages').find(findFilter).limit(limit).toArray()
		: await db.collection('messages').find(findFilter).toArray()

	mongoClient.close()
	return messages
}


export {
	insertMessage,
	findMessages,
}
