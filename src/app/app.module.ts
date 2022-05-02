// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
// Store
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { ToastEffects } from './store/toast/toast.effects';
import { reducers } from './store/root.reducer';
// Third Party
import { HotToastModule } from '@ngneat/hot-toast';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([RootEffects, ToastEffects]),
    HotToastModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
