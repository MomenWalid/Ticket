import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ChartsComponent } from './charts/charts.component';
import { TableComponent } from './table/table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ClipboardModule } from 'ngx-clipboard';
import { QRCodeModule } from 'angularx-qrcode';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AppComponent, CardComponent, ChartsComponent, TableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgApexchartsModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    QRCodeModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
