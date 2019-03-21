
import {store} from "preact-easy-state"

export function createTimerController() {
	const timer = store({timestamp: Date.now()})

	const update = () => timer.timestamp = Date.now()
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
