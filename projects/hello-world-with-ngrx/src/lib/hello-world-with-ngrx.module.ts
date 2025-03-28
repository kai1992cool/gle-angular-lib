import { CommonModule, AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HelloWorldEffects } from './+state/hello-world.effects';
import { HelloWorldFacade } from './+state/hello-world.facade';
import * as fromHW from './+state/hello-world.reducer';
import { HelloWorldWithNgrxComponent } from './hello-world-with-ngrx.component';

@NgModule({
  imports: [
    CommonModule,
    AsyncPipe,
    StoreModule.forFeature(
      fromHW.HW_FEATURE_KEY,
      fromHW.hwReducer
    ),
    EffectsModule.forFeature([HelloWorldEffects])
  ],
  providers: [HelloWorldFacade],
  declarations: [HelloWorldWithNgrxComponent],
  exports: [HelloWorldWithNgrxComponent, CommonModule]
})
export class HelloWorldWithNgrxModule { }