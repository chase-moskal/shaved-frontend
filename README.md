
# chase-moskal's shaved-frontend
## buildless minimalist web frontend forkable baseline

- [**es-module-shims**](https://github.com/guybedford/es-module-shims) *brings import maps support*
- [**importly**](https://github.com/chase-moskal/importly) *manages packages*
- [**unpkg.com cdn**](https://unpkg.com) *hosts dependencies*
- [**preact**](https://preactjs.com/) *renders components*
- [**htm**](https://github.com/developit/htm) *transforms jsx*
- [**mobx**](https://github.com/mobxjs/mobx) *observes state*

## no build, no bundling, no transpilation

- go all-native with es modules — oh so lean, oh so clean — very neat
- external dependencies are managed by *importly* and loaded from the unpkg cdn
- es-module-shims provides supports for import maps, which are necessary for rewriting bare specifiers (external dependencies)
- despite having no build step, we can still enjoy jsx syntax for our components via the [htm](https://github.com/developit/htm) transformer *(so awesome!)*
- using `mjs` extension retains possibility for isomorphic code sharing with node

## how to do

1. clone this project `git clone <GITURL>`
2. run `npm install` in the project
3. start the http server
	- start it in the project directory: `http-server`
	- browse to http://localhost:8080
4. code, reload, repeat, profit
