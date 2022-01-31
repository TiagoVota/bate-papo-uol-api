const reservedWords = [
	'todos',
	'privado'
]

const isReservedWord = name => reservedWords.includes(name.toLowerCase())


export {
	isReservedWord,
}
