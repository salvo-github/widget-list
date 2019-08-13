import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angularmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { CarCardComponent } from './car-card/car-card.component';
import { InputComponent } from './forms-element/input/input.component';
import { SelectComponent } from './forms-element/select/select.component';
import { CardsComponent } from './cards/cards.component';

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    AppComponent,
    WidgetListComponent,
    CarCardComponent,
    InputComponent,
    SelectComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
