import { Component, OnInit } from '@angular/core';
import { Photo } from '../../models/photo';
import { FirebaseUploadService } from '../../services/firebase-upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  file: Photo;
  constructor(private _firebaseUpload: FirebaseUploadService) { }

  ngOnInit() {
  }

  uploadImage($event) {
    $event.preventDefault();
    this._firebaseUpload.uploadImage(this.file);
  }
}
