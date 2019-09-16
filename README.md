# eslint-config-jp

## Installation

Install the package with

```sh
npm install @jetloans/eslint-config-jp --save-dev

# or
yarn add @jetloans/eslint-config-jp -D
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "eslint-config-jp@latest" peerDependencies

# or
npx install-peerdeps --dev eslint-config-jp

# or
yarn add eslint-config-jp -D --peer
```

## Usage

Add the config to `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-jp"
  }
}
```

and to your `.eslintrc`:

```json
{
  "extends": "eslint-config-jp"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: 'eslint-config-jp',
}
```
