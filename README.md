# hieuvh3011/react-native-template

## Introduction
Hi guys. This is a template I made for myself, since I have so much of pet projects and I'm so tired to re create project every times I had a new idea. You are welcome to use it. 

This template is inspire by [moove-it/react-native-template](https://github.com/moove-it/react-native-template). Therefore, you could see some similarity between my template and them. I create my own template because of their coding styles is not match to mine.

## Dependencies
- [Axios](https://github.com/axios/axios): for networking.
- [Prop-Types](https://github.com/facebook/prop-types): for checking type of your props.
- Full dependencies of [React-Navigation](https://reactnavigation.org/docs/hello-react-navigation): use to manage navigation of app.
- [Async-Storage](https://github.com/react-native-community/async-storage): use to store global data in your application.
- [Redux-Toolkit](https://redux-toolkit.js.org/): a new, recommended version of [Redux](https://redux.js.org/introduction/getting-started), make redux is easier to use.
- [React-Redux](https://github.com/reduxjs/react-redux): package to use Redux with React (and/or React Native).
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk): to dispatch asynchronous actions.
- [React-Native-Rename](https://github.com/junedomingo/react-native-rename): use to rename your project if you clone this template. 
- [React-Native-Localization](https://github.com/stefalda/ReactNativeLocalization): use for multiple language in your app.
- [React-Native-iPhoneX-helper](https://github.com/ptelad/react-native-iphone-x-helper): I used to use it to help me with problem in iPhone and android devices.
- [React-Native-Config](https://github.com/luggit/react-native-config): for configuration environments in your application.
- [Why-Did-You-Render](https://github.com/welldone-software/why-did-you-render): an amazing library comes from Welldone Software. It's help me a lot to prevent unnecessary re-render in my application. 
- [Jest](https://facebook.github.io/jest/): for testing.

## Usage
Step 1: clone project from git
```bash
$ git clone https://github.com/hieuvh3011/react-native-template.git
```
or you can clone by SSH:
```bash
$ git clone git@github.com:hieuvh3011/react-native-template.git
```
Step 2: install all dependencies:
```bash
$ yarn install
```
or
```bash
$ npm install
```
Step 3: rename project
```bash
$ npx react-native-rename YourProjectName
```
For now, I can not publish option 2 yet. I want to create it as a template, so you guys could run 
```bash
$ npx react-native init YourProjectName --template hieuvh3011/react-native-template
```
and it will create a project for you with my template. But at this moment, I don't know how to do that, to be honest. So, option 2 with a much more easier way will come to you in the future (perhaps). 

## Folder structure
As I mentioned above, this template is inspire by js template *react-native-template*. Hence, it follows project structure similar to *react-native-template* (and similar to almost all of react native project that I have ever seen):
- `src`: This folder is the main container of all the code inside of your application.
  - `actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Components folder contains all your application components.
    - `commons`: Folder to store any common component that you use through your app (such as a generic button, text fields, etc).
    - `MyComponent`: Each component should be stored inside it's own folder. Some of developers would like to split styles.js to a file. But for me, I am much more prefer with styling inside of component. Structure inside of this folder is completely depend on you. For me, I use this:
      - `MyComponent.js`: is a file code for main UI on screen.
      - `SomeSmallComponent.js`: is a file code for some small component in `MyComponent` screen. I split it so it make `MyComponent.js` shorter and easy to read.
      - `MyComponentViewModel.js`: This file control all of local states, navigation, logics, etc in `MyComponent`. It use **React Hook** to split UI and logic. You can read it at [here](https://medium.com/@sairysss/react-separating-responsibilities-using-hooks-b9c90dbb3ab9). If you are using Class instead of Hook, feel free to add [Recompose](https://github.com/acdlite/recompose) for similar function.
  - `utils`: Folder to store any kind of helper that you have, such as Themes, Colors, Dimensions, etc.
  - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`.
  - `store`: use to create store for all of global states in your application.
  - `api`: Folder to store all your network activities.
  - `business_logic`: Folder to store all your business logic (if it has).
  - `route`: folder that contain all of navigation in your application.
- `App.js`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.