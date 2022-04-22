import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartistModule} from 'ng-chartist';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
