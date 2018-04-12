import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { FirebaseUploadService } from '../../services/firebase-upload.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
export interface Item {
  name: string;
  url: string;
}
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})

export class UploadFileComponent implements OnInit {
  isDropping = false;
  photos: Photo[] = [];
   private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(private _firebaseUpload: FirebaseUploadService, private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {}

  uploadImage($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this._firebaseUpload.uploadImage(this.photos);
  }

  clearPhotos() {
    this.photos = [];
  }
}
