# Alta de usuario
### La siguiente app esta construida en angular, la cual cuenta con la posibilidad de dar de alta a un nuevo usuario con un seguro automotriz.

## Como iniciar la aplicacion
Primero tienen que clonar el repositorio en su maquina, posteriormente instalar las dependencias del mismo con `npm i o npm install` y a continuacion les dejo
las formas que tienen para iniciar la app

### Run aplicacion
- "start": "ng serve",      ` npm start`
- "start:stubs": "concurrently \"ng serve --c=stubs --host 0.0.0.0 \" \"npm:stubs\"",    `npm run start:stubs`
- "start:dev": "ng serve --c=dev -o",     `npm run start:dev`
- "lint:app": "tslint \"src/**/*.ts\"",`npm run lint:app`
- "lint:app:fix": "tslint --fix \"src/**/*.ts\"",`npm run lint:app:fix`
- "lint:scss": "stylelint \"src/**/*.scss\"",`npm run lint:scss`
- "lint:scss:fix": "stylelint --fix \"src/**/*.scss\"",`npm run lint:scss:fix`

### Estructura
- app
- ---components
- ------------goodbye
- ------------high-user
- --------------------coverage-available
- --------------------personal-information
- --------------------summary
- --------------------vehicle-data
- ------------home
- ---features
- -----------input
- -----------select
- -----------spinner
- -----------card-coverage
- -----------card-summary
- -----------card-vehicle
- ---services
- assets
- environments

### Ambientes
Tenemos configurados los ambientes de stubs y dev. Tranquilamente podriamos configurar test, staging y prod (o los que se necesiten)
