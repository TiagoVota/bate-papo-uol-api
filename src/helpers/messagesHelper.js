import { timestampToTime } from '../services/service.dayjs.js'


const makeEntryMessage = ({ name, timestamp }) => {
	const body = {
		from: name,
		to: 'Todos',
		text: 'entra na sala...',
		type: 'status',
		time: timestampToTime(timestamp),
	}

	return body
}


export {
	makeEntryMessage,
}
