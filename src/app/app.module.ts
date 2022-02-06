import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { DirectorsComponent } from './directors/directors.component';
import { ProblemsComponent } from './problems/problems.component';


@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    DirectorsComponent,
    ProblemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
