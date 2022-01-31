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


const insertMessages = async ({ messages }) => {
	const { mongoClient, db } = await connection()

	await db.collection('messages').insertMany(messages)

	return mongoClient.close()
}


const findLastMessages = async ({ user, limit }) => {
	const { mongoClient, db } = await connection()

	const findFilter = {
		$or: [
			{ from: user },
			{ to: user },
			{ to: 'Todos' },
		]
	}

	const messages = limit
		? await db.collection('messages').find(findFilter)
			.sort({ _id: -1 }).limit(limit).toArray()
		: await db.collection('messages').find(findFilter)
			.sort({ _id: -1 }).toArray()

	mongoClient.close()
	return messages.reverse()
}


export {
	insertMessage,
	insertMessages,
	findLastMessages,
}
