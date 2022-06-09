import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';

@Component({
  selector: 'app-cats',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  catsImages: Image[] = [];

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
}