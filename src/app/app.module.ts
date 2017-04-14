import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DesignComponent} from './design/design.component';

import {AppRoutingModule} from './app-routing.module';

import {TextPartComponent} from './parts/text-part.component';
import {ImgPartComponent} from './parts/img-part.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,
    TextPartComponent,
    ImgPartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  entryComponents: [TextPartComponent, TextPartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
