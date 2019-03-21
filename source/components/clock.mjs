
import {html} from "htm-preact"

import {ViewComponent} from "../tools/view-component.mjs"

export class Clock extends ViewComponent {
	render() {
		const {timer} = this.props
		return html`
			<p class="clock">
				<strong>${timer.timestamp}</strong>
				<em> ← clock proves everything works!</em>
			</p>
		`
	}
}
