import { NgModule, ChangeDetectionStrategy, Component, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgFor } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ScheduleComponent } from './schedule/schedule.component';
import {MatCardModule} from '@angular/material/card';
import {JsonPipe, registerLocaleData} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import es from '@angular/common/locales/es';
import { CompanysComponent } from './companys/companys.component';
import { ContactComponent } from './contact/contact.component';


registerLocaleData(es);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    CompanysComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    JsonPipe,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
    NgFor,
    MatMenuModule
  ],
  providers: [{provide:LOCALE_ID, useValue:'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
