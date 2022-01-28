import connection from '../database/database.js'


const findParticipant = async ({ name }) => {
	const { mongoClient, db } = await connection()

	const participant = await db.collection('participants').findOne({ name })

	mongoClient.close()
	return participant
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


export {
	findParticipant,
	insertParticipant,
}
