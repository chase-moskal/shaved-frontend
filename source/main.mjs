
import {render} from "preact"

import {html} from "./tools/html.mjs"

import {Clock} from "./components/clock.mjs"
import {createTimerController} from "./controllers/create-timer-controller.mjs"

export function main() {
	const timerController = createTimerController()
	timerController.start()

	render(
		html`
			<div class="shaved-app">
				<${Clock} timer=${timerController.timer}/>
			</div>
		`,
		document.querySelector("#shaved-area")
	)
}
