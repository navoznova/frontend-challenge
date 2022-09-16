import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageFavoriteImagesProvider } from 'src/services/favoriteImagesProvider';

@Component({
	selector: 'app-like',
	templateUrl: './like.component.html',
	styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
	@Input() imageId: string = '';
	@Input() imageUrl: string = '';
	@Input() isLiked: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	/*
	TODO change class after click on like button
	getLikeClass(): string {
		return this.isLiked ? 'liked' : '';
	}*/
}
