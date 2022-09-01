import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';

@Component({
	selector: 'app-like',
	templateUrl: './like.component.html',
	styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
	@Input() imageId: string = '';
	@Input() isLiked: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	/*
	TODO change class after click on like button
	getLikeClass(): string {
		return this.isLiked ? 'liked' : '';
	}*/

	addToFavourites(){
		return;
	}
}
