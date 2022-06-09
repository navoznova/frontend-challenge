import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageFavoriteImagesProvider {
    getIds(): string[] {
        // TODO
        return ["123", "321"];
        // throw new Error("Method not implemented.");
    }

}