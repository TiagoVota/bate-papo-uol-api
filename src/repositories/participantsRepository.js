import connection from '../database/database.js'


const findParticipant = async ({ name }) => {
	const { mongoClient, db } = await connection()

	const participant = await db.collection('participants').findOne({ name })

	mongoClient.close()
	return participant
}


const findParticipants = async () => {
	const { mongoClient, db } = await connection()

	const participants = await db.collection('participants').find({}).toArray()

	mongoClient.close()
	return participants
}


const insertParticipant = async ({ name, lastStatus }) => {
	const { mongoClient, db } = await connection()

	const participant = await db.collection('participants').insertOne({
		name,
		lastStatus,
	})

	mongoClient.close()
	return participant
}


const updateLastStatus = async ({ name, lastStatus }) => {
	const { mongoClient, db } = await connection()
	
	const participant = await db.collection('participants').updateOne(
		{ name },
		{ $set: { name, lastStatus } }
	)

	mongoClient.close()
	return participant
}


export {
	findParticipant,
	findParticipants,
	insertParticipant,
	updateLastStatus,
}
