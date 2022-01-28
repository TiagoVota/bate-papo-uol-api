import dayjs from 'dayjs'


const timestampToTime = (timestamp) => dayjs(timestamp).format('HH:mm:ss')


export {
	timestampToTime,
}
