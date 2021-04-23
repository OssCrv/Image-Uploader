import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { UploadingComponent } from './components/uploading/uploading.component';
import { UploadedComponent } from './components/uploaded/uploaded.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    UploadingComponent,
    UploadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
