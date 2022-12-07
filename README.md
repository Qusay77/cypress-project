# Cypress and Storybook Project focused on component packages
In other words its our take on [Monorepos](https://monorepo.tools/)
## _This Document is Under Heavy Construction!_

This setup aims to achieve the ability to automate, deploy and test standalone building blocks for constant review and feedback through their development.

# Stack
 Core 🔴
- ReactJs 18+
- Typescript 4.9+
- Parcel  2.8+

Additional

- Cypress 11.2+
- Storybook 6.5+
- Emotion JS 11.10+
- Webpack 5+/babel Build tools for Additional tech 

Addons

- Redux 8+ RTK 1.9+ & RTKQuery
- Reach Router 1.3.4
- Eslint
- Husky 8+

Package manager

- Yarn

## Concept

- Separate each Component or a bunch into their own folders and containers. 
 this allows them to be imported in a module syntax, and they are easily accessible from Storybook and Cypress files. eg:  
```js
import Button from '@ui/button'
```
- Cleaner Code and bundles, Unused modules are out of the picture. Enforced standard and practices
- Components are developed in a standalone environnement and are tested as they go 
- Components and their multiple variations are deployed separately from origin, making them available online for a lot of reasons.
- live deployment for changes or fixes without interfering with the entire structure, only pushing affected component

- allows for a lot of creativity to take place, instead of limiting client's wishes and developer time of 
 fear of breaking things and wasting time.


- Friendly for everyone involved, clients are free to make decisions.

- Developers can go in and out of the project without causing any technical dept for others. work would be easier to refactor and made obsolete if needed. also those components can be used out side of this project.

- QA and developers alike can automate tests as it fits them. using native tools like Cypress and outside testing frameworks for 3rd party tests.

- PM's can straight up pick what is being problematic from the live Component showroom, can make tasks to
create something, fix or change something, issues of components in their pages on origin 

## Developer Roadmap

Here are the steps and issues faced while pulling this project together

- Initializing a project without any build tool requires a lot of configuration to be done manually on the cost of less bloat.
- Installed React along side typescript and Eslint. any files containing `jsx` need to have `.tsx` extension, files lacking `jsx` have to be `.ts`, `js` and `jsx` files are allowed but are preferred against.
- eslint is an ongoing task as lint needs do grow and change, its been set alongside husky to enforce code style for consistency and clean code reviews.
- env vars handled in a basic sense until CI/CD takes place.
- Any building block is inside `src` directory, including the monorepo packages
- Added storybook and cypress, ready and configured for both vite and webpack in their own branches
- Added parcel and commands to handle repetitive tasks
- Setup addons like `ReachRouter` and `RTK/RTKQuery`
- Folder structure is a starter, and could have more additions later on


## Setup Tasks

Explaining major struggles when setting up some of used tech

- Reach Router needed to have a wrapper component to handle routes types
 ```js
 import { RouteComponentProps } from "@reach/router";

interface Routes extends RouteComponentProps {
	Component: React.ReactElement;
}

const PageRoute = ({ Component }: Routes) => {
	return Component;
};
```

- emotion js required specific ts config to make use of `css` prop
 ```json
 "compilerOptions": {
		"jsx": "react-jsx",
		"jsxImportSource": "@emotion/react"
	}
 ```
 
 - emotion js still requires use of pragma for `css` prop in any file its used
  ```js
  /** @jsxImportSource @emotion/react */
  ```

- Monorepo Packages require every package to have its own `package.json` file with at least the required minimum config added to them
 ```json
 {
	"name": "@packages/____",
	"main": "index.ts",
	"version": "0.1.0"
}
 ```
 - then root `package.json` file has to be put to private, and workspaces where the packages are.
 
 ```json
 {
    ...
     "private": true,
	 "workspaces": [
		"src/packages/**",
		"src/router/**"
	]
	...
}
 ```

 - Yarn easily does the linking and packages imported as their name in `package.json`


 - while Storybook was easy to kickstart, cypress needed a few tricks to get going, same with storybook when trying to load a package that has use of emotions `css` prop.
 -  Cypress need to have a plugin called `@cypress/webpack-preprocessor` its own webpack and ts config in its own folder. while for vite it needed `vite.config.js` to handle `emotion` plugin. 

-  Build config has to be passed to devServer in `cypress.config.ts`.

 -  One important thing to note is loading `React` components inside `.cy` files. they need to have `.tsx` extension
and the correct tsconfig fo it so

```json
{
	"extends": "../tsconfig.json",
	"compilerOptions": {
		"target": "es5",
		"lib": ["es5", "dom"],
		"types": ["cypress", "node"]
	},
	"include": ["**/*.ts", "**/*.tsx"]
}

```

Storybook had a crash that was caused by used emotion pragma, the solution was to add a `.babelrc` file to root as inside Storybook folder it had issues. 

```json
{
	"presets": [
		"@babel/preset-env",
		"@babel/preset-react",
		"@babel/preset-typescript",
		"@emotion/babel-preset-css-prop"
	]
}

```
 
 for both vite or webpack configs `@emotion/babel-preset-css-prop` is a package that needs to be installed.
 
 since all is running on those tools with both build tools, it was time to return the project's main build tool parcel, as it was smooth from the start, it had an issue with `.babelrc` file and its asking for it to be removed. since we cant move that file to storybook, `.parcelrc` was made with config to ignore `.babelrc`.
 
 and there we have it so far.

## Repeating Issues
- storybook crash with html-webpack-plugin missing error, could be cause for having both html-webpack-plugin abd @types/html-webpack-plugin
and yarn/npm cache issue, direct reason still unknown

## Future Considerations
- We might want to consider our styling again once more to make sure if its worth it
- We might look into using a Monorepo tool, if it has a clear advantage. current structure makes it a breeze to migrate
- Multiple environments are a must, so is CI/CD  

## Get Up and Running

- Clone Repo and make sure a yarn supported Node js version is installed and is being used
- `yarn` as it will link our custom modules into node_modules
- For Main app dev server do `yarn dev` for storybook do `yarn storybook` to run cypress do `yarn cy:open`
- Build commands are `yarn` followed by `prod | staging`  the names indicate the environment
-  Storybook build is ran by `yarn build-storybook`
-  `yarn lint` is also used by husky to Enforce code style, if husky's current config fails to work make sure to do `yarn prepare` 


## Effective in

- Webeyez

## Maintainers

Authors: Qusay

Developers: Qusay, Deyaa
