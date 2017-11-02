
import { NgModule } from '@angular/core';

import { HotjarComponent } from './hotjar.component';
export * from './hotjar.component';

import { HotjarService } from './hotjar.service';
export * from './hotjar.service';

export { HotjarConfig } from './hotjar.interface';

@NgModule({
  declarations: [
    HotjarComponent
  ],
  imports: [],
  providers: [
    HotjarService
  ],
  exports: [
    HotjarComponent
  ]
})
export class HotjarModule { }
