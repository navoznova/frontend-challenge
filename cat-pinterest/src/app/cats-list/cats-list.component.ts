import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';
import { ImagesProvider } from 'src/services/imagesProvider';
import { LocalStorageFavoriteImagesProvider } from 'src/services/favoriteImagesProvider';

@Component({
	selector: 'app-cats',
	templateUrl: './cats-list.component.html',
	styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
	catsImages: Image[] = [];
	favoriteImageIds: string[] = [];

	constructor(
		private imagesProvider: ImagesProvider, 
		private favoriteImagesProvider: LocalStorageFavoriteImagesProvider) {
	}

	ngOnInit(): void {
		this.initImages();
	}

	initImages(): void {
		const pageIndex = 0;
		const pageSize = 10;

		this.imagesProvider.getImages(pageIndex, pageSize)
			.subscribe(
				response => {
					this.catsImages = response;
				});
		this.favoriteImageIds = this.favoriteImagesProvider.get();
	}

	checkIsLiked(imageId:string): boolean{
		return this.favoriteImageIds.includes(imageId);
	}
}