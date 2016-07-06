# Vs2015Angular2Template
Angular 2 Template for Visual Studio 2015 with update 3

Steps:-

- Create a empty ".net core or ASP.Net" project.
- Add package.json file & add all the required dependencies.

package.json

    {
      "version": "0.0.1",
      "name": "vs2015-angular2-template",
      "dependencies": {
        "angular2": "2.0.0-beta.15",
        "systemjs": "^0.19.27",
        "es6-promise": "^3.1.2",
        "es6-shim": "^0.35.0",
        "reflect-metadata": "^0.1.3",
        "rxjs": "5.0.0-beta.2",
        "zone.js": "^0.6.12",
        "bootstrap": "^3.3.6",
        "jquery": "^2.2.3"
      },
      "devDependencies": {
        "gulp": "^3.9.1",
        "gulp-clean": "^0.3.2"
      }
    }

- Create "scripts" folder, here you will have all your *.ts files and tsconfig.json (all the *.js converted files will moved to "../wwwroot/appScripts/")

tsconfig.json

    {
      "compilerOptions": {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "module": "commonjs",
        "noEmitOnError": true,
        "noImplicitAny": false,
        "outDir": "../wwwroot/appScripts/",
        "removeComments": false,
        "sourceMap": true,
        "target": "es5",    
        "inlineSources": true
      },
      "exclude": [
        "node_modules",
        "typings/main",
        "typings/main.d.ts"
      ]
    }

- Add Gulp file which will take care of moving all the required files from node_modules to lib folder under wwwroot 
- Create index.html file & add all the required file reference from lib folder which is under wwwroot.

If you want to manually install all the packages

`npm install`

Note: Please install all the Updates from visual studio 2015 related to VS2015 update 3 and "DotNetCore.1.0.0.RC2-VS2015Tools.Preview1". Then only you will be able to run this Solution.
