import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesProvider } from 'src/services/imagesProvider';
import { LocalStorageFavoriteImagesProvider } from 'src/services/favoriteImagesProvider';
import { CatsListComponent } from './cats-list/cats-list.component';
import { ImageComponent } from './image/image.component';
import { HeaderComponent } from './header/header.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsListComponent,
    ImageComponent,
    HeaderComponent,
    LikeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ImagesProvider,
    LocalStorageFavoriteImagesProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
