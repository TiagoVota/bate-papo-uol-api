import { timestampToTime } from '../services/service.dayjs.js'


const makeMessage = ({ from, to, text, type, timestamp }) => {
	const body = {
		from,
		to: to || 'Todos',
		text: text || 'entra na sala...',
		type: type || 'status',
		time: timestampToTime(timestamp),
	}

	return body
}


export {
	makeMessage,
}
