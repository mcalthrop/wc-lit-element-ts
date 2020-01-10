# wc-lit-element-ts

## Purpose

Simple repo to demonstrate web components using [lit-element](https://lit-element.polymer-project.org/) and TypeScript.

Contains the minimum effort required to implement the `@customElement` and `@property` decorators, which are demonstrated in the [`my-element.ts`](./my-element.ts) file.

> Note: I haven't yet worked out why the `@types/form-data` package is required, but it won't compile without this.

## Usage

Install packages:

```sh
$ yarn install
```

Build:

```sh
$ yarn build
```

Or build with watch:

```sh
$ yarn build:watch
```

Run it locally:

```sh
$ yarn serve
```

And open your browser at http://localhost:8000/ .