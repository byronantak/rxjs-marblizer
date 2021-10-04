import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarbleDiagramComponent } from './components/marble-diagram/marble-diagram.component';
import { MarbleComponent } from './components/marble/marble.component';
import { FromDemoComponent } from './pages/from-demo/from-demo.component';
import { OfDemoComponent } from './pages/of-demo/of-demo.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MarbleDiagramComponent,
    MarbleComponent,
    OfDemoComponent,
    FromDemoComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
