# Cypress and Storybook Project focused on component packages
In other words its our take on [Monorepos](https://monorepo.tools/)
## _This Document is Under Heavy Construction!_

This setup aims to acheive the ability to automate, deploy and test standalone building blocks for constant review and feedback through their developement.

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
 this allows them to be imported in a module syntax, and they are easily accessable from Storybook and Cypress files. eg:  
```js
import Button from '@ui/button'
```
- Cleaner Code and bundles, Unused modules are out of the picture. Enforced standard and practices
- Components are developed in a standalone environnement and are tested as they go 
- Components and their multiple variations are deployed separatly from origin, making them available online for alot of reasons.
- live deployment for changes or fixes without interfering with the entire structure, only pushing affected component

- allows for alot of creativity to take place, instead of limiting client's wishes and developer time of 
 fear of breaking things and wasting time.


- Freindly for everyone envolved, clients are free to make decisicions.

- Developers can go in and out of the project without causing any technical dept for others. work would be easier to refactor and made obsolete if needed. also those components can be used out side of this project.

- QA and developers alike can autmate tests as it fits them. using native tools like Cypress and outside testing frameworks for 3rd party tests.

- PM's can straight up pick what is being problematic from the live Component showroom, can make tasks to
create something, fix or change something, issues of components in their pages on origin 

## Developer Roadmap

Here are the steps and issues faced while pulling this project togother

- TBD

## Future Considerations
- We might want to consider our styling again once more to make sure if its worth it
- We might look into using a Monorepo tool, if it has a clear advantage. currect structure makes it a breeze to migrate
 

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
