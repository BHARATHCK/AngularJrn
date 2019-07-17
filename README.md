# RedditClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## INSTALLATION

Clone the repo using below command :

```
git clone https://github.com/BHARATHCK/AngularJrn.git && cd AngularJrn

```

Install all the necessary dependencies :

```
npm install

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Hosting the application

You can use any hosting service as you like, but when you ran `npm install` Now server got installed as it is one of the dependency until and unless you changed it in package.json
So, to use now server:

First, build the project as follows:

```
ng build

```
To, use PWA feature, build the project in production as production is set to true and PWA features are built only in prod builds

```
ng build --prod=true

```
Then move to dist directory and host using now

```
cd dist
cd AngularJrn
now

```
Get your email verified and you are good to go :smile:

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
