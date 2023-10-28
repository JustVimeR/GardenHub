import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared.module";
import { MainPageComponent } from './main-page.component';


const mainPageRoutes = [
  {path: '', component: MainPageComponent}
]

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mainPageRoutes),
    SharedModule
  ]
})
export class MainPageModule { }