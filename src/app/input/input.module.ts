import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploaderInputComponent } from './image-uploader-input/image-uploader-input.component';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ImageUploaderInputComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FlexLayoutModule
  ],
  exports: [ImageUploaderInputComponent]
})
export class InputModule { }
