
// import {render} from "lit-element"

// import {Clock} from "./components/clock.mjs"
// import {createTimerController} from "./controllers/create-timer-controller.mjs"

// export function main() {
// 	const timerController = createTimerController()
// 	timerController.start()

// 	render(
// 		html`
// 			<div class="shaved-app">
// 				<${Clock} timer=${timerController.timer}/>
// 			</div>
// 		`,
// 		document.querySelector("#shaved-area")
// 	)
// }

import "./components/app.mjs"

export async function main() {
	console.log("🔥")
}
