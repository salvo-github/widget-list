import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [],
  providers: []
})
export class AngularMaterialModule {}
