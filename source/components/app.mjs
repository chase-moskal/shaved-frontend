
import {Component, html} from "../tools/component.mjs"

import "./clock.mjs"

export class App extends Component {
	render() {
		return html`
			<div>
				<sh-clock>clock proves everything works!</sh-clock>
			</div>
		`
	}
}

customElements.define("sh-app", App)
