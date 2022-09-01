import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageFavoriteImagesProvider {
    get(): string[] {
        // TODO
        return ["123", "321"];
        // throw new Error("Method not implemented.");
    }

    add(imageId: string, imageUrl: string) {
        localStorage.setItem(imageId, imageUrl);

        /*let favoriteImageIds = localStorage.getItem("favoriteImageIds") || [];
        if (!favoriteImageIds.includes(imageId)) {
            favoriteImageIds.push(imageId);
            localStorage.setItem("favoriteImageIds", favoriteImageIds); 
        }*/
    
    }
}