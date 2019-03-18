
import {view} from "../dependencies/preact-easy-state.mjs"
import {Component, html} from "../dependencies/htm-preact.mjs"

export const Clock = view(class extends Component {
	render() {
		const {timer} = this.props
		return html`
			<p class="clock">
				<strong>${timer.timestamp}</strong>
				<em> ← clock proves everything works!</em>
			</p>
		`
	}
})
