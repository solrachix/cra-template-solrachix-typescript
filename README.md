
<p align="center">
<a href="https://www.npmjs.com/package/cra-template-solrachix-typescript" style="text-decoration: none">
    <img alt="npm version" src="https://badge.fury.io/js/cra-template-solrachix-typescript.svg"/>
  </a>
  <br/>
  <a href="LICENSE" style="text-decoration: none">
    <img alt="License" src="https://img.shields.io/github/license/solrachix/cra-template-solrachix-typescript?color=3ADEFF&labelColor=24292E"/>
  </a>
  <a href="https://github.com/solrachix/cra-template-solrachix-typescript/issues" style="text-decoration: none">
    <img alt="Issues" src="https://img.shields.io/github/issues/solrachix/cra-template-solrachix-typescript?style=flat-square&logo=github&logoColor=white&color=3ADEFF&labelColor=24292E" />
  </a>
   <a href="#" style="text-decoration: none">
    <img alt="Issues" src="https://img.shields.io/github/stars/solrachix/cra-template-solrachix-typescript?style=flat-square&logo=github&logoColor=white&color=3ADEFF&labelColor=24292E" />
  </a>
   <a href="#" style="text-decoration: none">
    <img alt="Issues" src="https://img.shields.io/github/languages/top/solrachix/cra-template-solrachix-typescript?style=flat-square&logo=github&logoColor=white&color=3ADEFF&labelColor=24292E" />
  </a>
  
  
<p align="center">
  <a href="https://github.com/solrachix" target="_blank">
    <img alt="Made by Carlos Miguel" src="https://img.shields.io/badge/made%20by-Carlos_Miguel-informational?color=3ADEFF&labelColor=24292E">
  </a>
  <br/>
  <a href="https://github.com/solrachix" target="_blank" >
    <img alt="Github - Carlos Miguel" src="https://img.shields.io/badge/-solrachix-24292E?style=flat-square&logo=github&logoColor=white">
  </a>
  <a href="https://www.linkedin.com/in/carlos-miguel-380413197/" target="_blank" >
    <img alt="Linkedin - Carlos Miguel" src="https://img.shields.io/badge/-carlosmiguel-blue?style=flat-square&logo=Linkedin&logoColor=white">
  </a>
  <a href="mailto:carlos.miguel.oliveira.17@gmail.com" target="_blank" >
    <img alt="Email - Carlos Miguel" src="https://img.shields.io/badge/-carlos.miguel.oliveira.17@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white">
  </a>
</p>

<p align="center">
	 <a href="#💻-motivation">Motivation</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#ho-to-use">How to use</a>
&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	  <a href="#rocket-technologies">Technologies</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	  <a href="#information_source-how-to-clone">How to clone</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	  <a href="#🤔-how-to-contribute">How to contribute</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	  <a href="#memo-license">License</a>
</p>

Original Create React App README available [here](https://github.com/solrachix/cra-template-solrachix-typescript/blob/master/README_CRA.md)

## 💻 Motivation

You know the pain. You start a new project from scratch and need to configure it again and again. It needs routing, ok you setup Router, then you need styled components, ok now then you need axios, eslint... - ok, oh 😩 React boilerplate is taking so much time to type. Wait... what if you could have all the tools you want just from the beginning? I want to focus on building amazing projects and not spending hours configuring. That's why I've created this template. It's here for you to use.

## How to use

```bash
npx create-react-app your-project-name --template solrachix-typescript
```

Or

```bash
yarn create react-app your-project-name --template solrachix-typescript
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. For not having the option of devDependencies you will need to install some more libraries by running this command:
```bash
yarn add @types/react-router-dom @types/styled-components
```

### Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.

- `yarn eject` - exposes content of `react-script` package

- `yarn lint` - lints project files according to eslint rules, see below. Typical use case: continuous integration environments, Travis, CircleCI, etc.

- `yarn fix` - same as `yarn lint`, but also fixes errors, when possible. Typical use case: local development environment, git hooks.

## :rocket: Technologies
This project was developed with the following technologies:

- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Polished](https://github.com/styled-components/polished)
- [React](https://github.com/facebook/react)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Styled Components](https://styled-components.com/)
- [TypeScript](https://github.com/Microsoft/TypeScript)

## :information_source: How to clone
To clone and run this application, you will need [Git] (https://git-scm.com) installed on your computer.

### Install Under construction :construction:
```bash
  # Cloning the repository
  $ git clone https://github.com/solrachix/cra-template-solrachix-typescript

  # Accessing THIS project directory
  $ cd './cra-template-solrachix-typescript'

  # Installing the dependencies
  $ yarn OR npm install


```

## 🤔 How to contribute
- Fork it;
- Create a branch: `git checkout -b my-feature`;
- Submit your changes: `git commit -m 'feat: My new feature'`;
- Push your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.
After your merging request is made, you can delete your branch.

## :memo: License
This template is under the MIT license. See the file [LICENSE](LICENSE) for more details.


---

Done with :heart: Carlos Miguel :wave: