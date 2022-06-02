import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  catsImages: Image[] = [];
  catsImagesFavourite: Image [] = [];

  constructor(private httpClient: HttpClient) { 
  }

  ngOnInit(): void {      
    this.getImages();
  }

  getImages(){
    this.httpClient.get<any>('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc').subscribe(
      response => {
        this.catsImages = response;
      });
  }

  addToFavourites(event: any){
    let favouriteImgUrl = (<HTMLInputElement>event.target).src;
    let favouriteImgId = (<HTMLInputElement>event.target).alt;
    let favouriteImg = new Image(favouriteImgId, favouriteImgUrl);
    
    this.catsImagesFavourite.push(favouriteImg);

  }

  deleteFromFavourites(event: any){
  }
}

export class Image {
  constructor(public id: string, public url: string) {}
}