# Node To-Do App in Typescript

Node To-Do App is a sample application which demonstrates the CRUD operations written in Typescript. This sample app can be used as a reference for creating similar applications.

### Tech

To-Do App uses a number of open source projects to work properly, includes the following major dependancies:

* [node.js] - Node.js JavaScript runtime 
* [Express] - fast node.js network app framework for API development
* [Mongoose] -  a MongoDB object modeling tool designed to work in an asynchronous environment.
* [Winston] - A logger for just about everything.
* [Morgan] - HTTP request logger middleware for node.js
* [Eslint] - a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [ts-node] - TypeScript execution and REPL for node.js, with source map support.
* [typescript] - a language for application-scale JavaScript.
* [rimraf] - The UNIX command rm -rf for node.

### Installation and Running the App

CD to project directory, then Install the dependencies and devDependencies and start the server. This will run the `build` script first and then start the node server from the new build.

```sh
$ npm install -d
$ npm start
```
If you want to run the application in dev mode, run:
```sh
$ npm run start:dev
```
In the dev mode, we use `ts-node` to compile and run the Typescript source code. Meanwhile `nodemon` will be used to monitor the file changes. TS-Node does have its use-cases, however here we use it strictly as a development tool, not a deployment strategy. 

For starting the server in production environments, run:

```sh
$ npm install --production
$ NODE_ENV=production npm start #For Linux based systems
or
$ SET NODE_ENV=production npm start #For Windows systems
```

### Lint

[ESLint](https://eslint.org/) is a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

A [.eslintrc.json](<(https://eslint.org/docs/user-guide/configuring)>) file (alternatively configurations can we written in Javascript or YAML as well) is used describe the configurations required for ESLint. Below is the .eslintrc.json file which we are using.

```javascript
{
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```

Currently, we are using [Airbnb's Javascript Style Guide](https://github.com/airbnb/javascript) which is used by many JavaScript developers worldwide.

We can run the lint by running the following:
```sh
$ npm run lint
```

### Todos

 - Write Tests
 - Add swagger API documentaion
 - Review and Make improvement to the code base
 - Improve Linting

### Warning
Development on this repo is still not yet fully completed. Major code changes may happen anytime. But still it's ready to use for production.

   [node.js]: <http://nodejs.org>
   [Mongoose]: <https://www.npmjs.com/package/mongoose>
   [Winston]: <https://www.npmjs.com/package/winston>
   [Express]: <https://www.npmjs.com/package/express>
   [Morgan]: <https://www.npmjs.com/package/morgan>
   [Eslint]: <https://www.npmjs.com/package/eslint>
   [Jest]: <https://www.npmjs.com/package/jest>
   [Supertest]: <https://www.npmjs.com/package/supertest>
   [swagger-jsdoc]: <https://www.npmjs.com/package/swagger-jsdoc>
   [Swagger UI Express]: <https://www.npmjs.com/package/swagger-ui-express>
   [ts-node]: <https://www.npmjs.com/package/ts-node>
   [typescript]: <https://www.npmjs.com/package/typescript>
   [rimraf]: <https://www.npmjs.com/package/rimraf>
