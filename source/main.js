
import {ShavedClock} from "./components/shaved-clock.js"
import {registerComponents} from "./toolbox/register-components.js"

async function main() {
	registerComponents({ShavedClock})
	console.log("🔥")
}

main()
