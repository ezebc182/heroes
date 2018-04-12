import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Photo } from '../models/photo';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';

@Injectable()
export class FirebaseUploadService {

  private PATH = 'img';
  constructor(private db: AngularFirestore) { }

  public uploadImage(photos: Photo[]) {
    const storageRef = firebase.storage().ref();

    for (const item of photos) {
      item.isUploading = true;
      if (item.progress >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.PATH}/${item.fileName}`)
      .put(item.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
         (snapshot: firebase.storage.UploadTaskSnapshot) =>
          (item.progress = (snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
          (error) => console.error('Error trying to upload photo', error)),
          () => {
            console.error('Photo was successfuly uploaded');
            item.url = uploadTask.snapshot.downloadURL;
            item.isUploading = false;
            this.storeImage({
              name: item.fileName,
              url: item.url
            });
      });


    }
  }

  private storeImage(image: {name: string, url: string}) {
     this.db.collection(`${this.PATH}`).add(image);
  }


}
