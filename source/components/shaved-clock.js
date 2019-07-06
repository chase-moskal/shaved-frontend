
import {LitElement, html, css} from "lit-element"

export class ShavedClock extends LitElement {

	static get properties() {
		return {
			timestamp: {type: Number, reflect: true}
		}
	}

	static get styles() {
		return css`
			:host {
				color: yellow;
			}
		`
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
			<p class="clock">
				<strong>${timestamp}</strong>
				<em> ← <slot></slot></em>
			</p>
		`
	}
}
