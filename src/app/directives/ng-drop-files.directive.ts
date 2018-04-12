import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { Photo } from '../models/photo';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() photos: Photo[] = [];
  @Output() mouseOverElement: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseOverElement.emit(true);
    this.preventDefaultAndPropagation(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.mouseOverElement.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any) {
    this.loadPhoto();
    this.mouseOverElement.emit(false);
  }

  private loadPhoto() {
    const dataTransfered = this.getTransferedData(event);

    if (!dataTransfered) {
      return;
    }
    this.extractFiles(dataTransfered.files);
    this.preventDefaultAndPropagation(event);
  }

  private extractFiles(fileList: FileList): void {
    // tslint:disable-next-line:forin
    for (const prop in Object.getOwnPropertyNames(fileList)) {
      const tempFile = fileList[prop];

      if (this.fileCanBeLoaded(tempFile)) {
        const photo = new Photo(tempFile);
        this.photos.push(photo);
        return;
      }
    }
  }

  private getTransferedData(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private fileCanBeLoaded(file: File): boolean {
    return !this.isAlreadyDropped(file.name) && this.isImage(file.type);
  }

  private preventDefaultAndPropagation(event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private isAlreadyDropped(fileName): boolean {
    for ( const file of this.photos ) {

      if (file.fileName === fileName) {
        console.error(`The ${fileName} was already dropped`);
        return true;
      }

    }

    return false;
  }

  private isImage(fileType) {
    return (fileType === '' || fileType === undefined)
      ? false
      : fileType.startsWith('image');
  }
}
