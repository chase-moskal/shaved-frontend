
# chase-moskal's shaved-frontend
## buildless minimalist web frontend forkable baseline

- [**importly**](https://github.com/chase-moskal/importly) *web package manager generates import maps*
- [**unpkg.com cdn**](https://unpkg.com) *hosts dependencies*
- [**es-module-shims**](https://github.com/guybedford/es-module-shims) *polyfill for import maps*
- [**lit-element**](https://github.com/Polymer/lit-element) *web component baseclass*
- [**lit-html**](https://github.com/polymer/lit-html) *renders jsx-style templates*

## no build, no bundling, no transpilation

- go all-native with es modules — oh so lean, oh so clean — very neat
- use lit-element and lit-html to write modern framework-agnostic web components
- external dependencies are managed by *importly* and are loaded from the unpkg cdn

## how to do

1. clone this project `git clone <GITURL>`
2. run `npm install` in the project
3. start the http server
	- start it in the project directory: `npm run http-server`
	- browse to http://localhost:5000
4. code, reload, repeat, profit

## why is there a package.json?

it's for dev-time dependencies, like `importly` and `serve`

in the future, when [web modules](https://github.com/nodejs/modules/issues/278) land in node — we won't need a `package.json` anymore 😎

## is unpkg good enough for production?

maybe not... i'm looking into integrating importly with `@pika/web`'s workflow for optimization
