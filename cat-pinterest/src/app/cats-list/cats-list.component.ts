import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';
import { ImagesProvider } from 'src/services/imagesProvider';

@Component({
	selector: 'app-cats',
	templateUrl: './cats-list.component.html',
	styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
	catsImages: Image[] = [];

	constructor(private imagesPrivoder: ImagesProvider) {
	}

	ngOnInit(): void {
		this.initImages();
	}

	initImages(): void {
		const pageIndex = 0;
		const pageSize = 10;
		this.imagesPrivoder.getImages(pageIndex, pageSize)
			.subscribe(
				response => {
					this.catsImages = response;
				});
	}
}