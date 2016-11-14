### Instalar o MaterializeCSS 

#### Via terminal dentro da pasta do projeto, faça:
npm install materialize-css --save
npm install angular2-materialize --save
npm install jquery@^2.2.4 --save


#### Add scripts in angular-cli.json

"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/materialize-css/dist/js/materialize.js"
],


#### Import MaterializeModule in app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

#### Add these lines to header of index.html

<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

#### Import materialize.css in style.css

/* You can add global styles to this file, and also import other style files */
@import "../node_modules/materialize-css/dist/css/materialize.css";

#### [Fonte] (https://www.npmjs.com/package/angular2-materialize#installing--configuring-angular2-materialize-in-projects-created-with-angular-cliwebpack-100-beta11-webpack8)