import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookModule } from 'ngx-facebook';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TopboxComponent } from './Components/topbox/topbox.component';
import { ClassComponent } from './Components/class/class.component';
import { SummaryComponent } from './Components/summary/summary.component';
import { BaseComponent } from './Components/base/base.component';
import { MapComponent } from './Components/map/map.component';
import { FbloginComponent } from './Components/fblogin/fblogin.component';
import { FbshareComponent } from './Components/fbshare/fbshare.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TopboxComponent,
    ClassComponent,
    SummaryComponent,
    BaseComponent,
    MapComponent,
    FbloginComponent,
    FbshareComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FacebookModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
