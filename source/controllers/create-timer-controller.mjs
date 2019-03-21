
import {observable, action} from "mobx"

export function createTimerController() {
	const timer = observable({timestamp: Date.now()})
	const update = action(() => timer.timestamp = Date.now())
	let interval = null

	const stop = () => {
		if (interval !== null) clearInterval(interval)
		interval = null
	}

	const start = () => {
		stop()
		interval = setInterval(update, 1000/60)
	}

	return {timer, start, stop}
}
