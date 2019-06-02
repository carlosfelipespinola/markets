import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { BuyersModule } from './buyers/buyers.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZLMZthXxXiUMhRuIO1RA_JvHrarezlHg',
  authDomain: 'supermercadosonline-14c09.firebaseapp.com',
  databaseURL: 'https://supermercadosonline-14c09.firebaseio.com',
  projectId: 'supermercadosonline-14c09',
  storageBucket: 'supermercadosonline-14c09.appspot.com',
  messagingSenderId: '1035335065182',
  appId: '1:1035335065182:web:83101fecbda09663'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HomeModule,
    BuyersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
