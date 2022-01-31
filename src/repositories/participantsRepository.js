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


const findParticipantsBelowLastStatus = async ({ timeLimit }) => {
	const { mongoClient, db } = await connection()
	
	const participants = await db.collection('participants')
		.find({ lastStatus: { $lt: timeLimit } }).toArray()

	mongoClient.close()
	return participants
}

const deleteParticipantsByIdList = async ({ participantsIds }) => {
	const { mongoClient, db } = await connection()
	
	await db.collection('participants')
		.deleteMany({ _id: { $in: participantsIds}})
	return mongoClient.close()
}


export {
	findParticipant,
	findParticipants,
	insertParticipant,
	updateLastStatus,
	findParticipantsBelowLastStatus,
	deleteParticipantsByIdList,
}
