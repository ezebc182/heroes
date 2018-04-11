import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Photo } from '../models/photo';

@Injectable()
export class FirebaseUploadService {

  private PATH = 'img';
  constructor(private db: AngularFirestore) { }

  public uploadImage(image: Photo) {
   console.log(image);
  }

  private storeImage(image: {name: string, url: string}) {
     this.db.collection(`${this.PATH}`).add(image);
  }


}
