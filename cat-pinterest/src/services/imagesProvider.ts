import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagesProvider {
    constructor(private httpClient: HttpClient) { }

    getImages(pageIndex: number, pageSize: number) {
        // TODO validate incoming parameters
        const url = 'https://api.thecatapi.com/v1/images/search?limit=' + pageSize + '&page=' + pageIndex + '&order=Desc';
        return this.httpClient.get<any>(url);
    }
}