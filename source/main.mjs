
import {Clock} from "./components/clock.mjs"
import {render, html} from "./dependencies/htm-preact.mjs"
import {createTimerController} from "./controllers/create-timer-controller.mjs"

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
