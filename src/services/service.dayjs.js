import dayjs from 'dayjs'


const timestampToTime = (timestamp) => {
	console.log({ timestamp })
	return dayjs(timestamp).format('HH:mm:ss')
}


export {
	timestampToTime,
}
