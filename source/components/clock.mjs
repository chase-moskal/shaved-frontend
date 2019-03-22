
import {Component, html} from "../tools/component.mjs"

export class Clock extends Component {
	static get properties() {
		return {
			timestamp: {type: Number}
		}
	}

	constructor() {
		super()
		this.timestamp = Date.now()
		this.interval = null
	}

	connectedCallback() {
		super.connectedCallback()
		this.interval = setInterval(() => {
			this.timestamp = Date.now()
		}, 11)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		if (this.interval) {
			clearInterval(this.interval)
			this.interval = null
		}
	}

	render() {
		const {timestamp} = this
		return html`
			<style>
				:host { color: yellow; }
			</style>
			<p class="clock">
				<strong>${timestamp}</strong>
				<em> ← <slot></slot></em>
			</p>
		`
	}
}

customElements.define("sh-clock", Clock)
