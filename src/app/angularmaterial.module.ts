import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatInputModule, MatSelectModule, BrowserAnimationsModule],
  exports: [MatInputModule, MatSelectModule, BrowserAnimationsModule],
  declarations: [],
  providers: []
})
export class AngularMaterialModule {}
