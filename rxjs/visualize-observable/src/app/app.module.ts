import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarbleDiagramComponent } from './components/marble-diagram/marble-diagram.component';
import { MarbleComponent } from './components/marble/marble.component';


@NgModule({
  declarations: [
    AppComponent,
    MarbleDiagramComponent,
    MarbleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
