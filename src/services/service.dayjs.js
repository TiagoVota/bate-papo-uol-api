import dayjs from 'dayjs'


const timestampToTime = timestamp => dayjs(timestamp).format('HH:mm:ss')

const subtractSecondsTimestamp = (timestamp, secondsToSubtract) => {
	const dateDayjs = dayjs(timestamp)
	const subtractedDate = dateDayjs.subtract(secondsToSubtract, 'second')
	const timestampResult = subtractedDate.valueOf()

	return timestampResult
}


export {
	timestampToTime,
	subtractSecondsTimestamp,
}
