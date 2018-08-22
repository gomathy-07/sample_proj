import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { Sample2Component } from './sample2/sample2.component';
import { FormsModule } from '@angular/forms';
import { Sample1Component } from './sample1/sample1.component';


const appRoutes:Routes=[

  {path:'',component:Sample1Component},
  {path:'sample2',component:Sample2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    Sample2Component
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
