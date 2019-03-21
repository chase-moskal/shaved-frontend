
# chase-moskal's shaved-frontend
## buildless minimalist web frontend forkable baseline

- [**unpkg.com cdn**](https://unpkg.com) *loads dependencies*
- [**preact**](https://preactjs.com/) *renders components*
- [**htm**](https://github.com/developit/htm) *transforms jsx*
- [**mobx**](https://github.com/mobxjs/mobx) *observes state*

## no build, no bundling, no transpilation

- go all-native with es modules — oh so lean, oh so clean — very neat
- using es-module-shims for import map functionality
- external dependencies are loaded from the unpkg cdn
- despite having no build step, we can still enjoy jsx syntax for our components via the [htm](https://github.com/developit/htm) transformer
- using `mjs` extension retains possibility for isomorphic code sharing with node

## how to do

1. clone this project
2. start/install http-server
	- install it: `npm install -g http-server`
	- start it in the project directory: `http-server`
	- browse to http://localhost:8080
3. code, reload, repeat, profit
