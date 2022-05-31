import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  friends: Friend[] = [];

  constructor(private httpClient: HttpClient) { 
  }

  ngOnInit(): void {      
    this.getFriends();
  }

  getFriends(){
    this.httpClient.get<any>('https://api.thecatapi.com/v1/images/search').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }

}

export class Friend {
  constructor(
    public id: number,
    public url: string
  ) {
  }
}
