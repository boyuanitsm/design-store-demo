import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DesignComponent} from './design/design.component';

import {AppRoutingModule} from './app-routing.module';

import {TextPart} from './parts/text.part';
import {ImgPart} from './parts/img.part';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    TextPart,
    ImgPart
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
