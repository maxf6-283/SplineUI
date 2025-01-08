import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { UiModule } from './components/ui/ui.module';
import {App} from './app';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    UiModule
  ],
  exports: [App],
  bootstrap: [App],
})
export class AppModule {}
