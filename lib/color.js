const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const DanzzLog = (text, color) => {
	return !color ? chalk.yellow('[DANZZ] ') + chalk.green(text) : chalk.yellow('[CODING] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	DanzzLog
}
