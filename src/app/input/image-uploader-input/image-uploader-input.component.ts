import { Observable, Subscription } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-image-uploader-input',
  templateUrl: './image-uploader-input.component.html',
  styleUrls: ['./image-uploader-input.component.scss']
})
export class ImageUploaderInputComponent implements OnInit, OnDestroy {

  private task: AngularFireUploadTask;
  public percentage: number = null;
  private snapshot: Observable<any>;
  private downloadUrlSubscription: Subscription;

  @Output()
  public uploadedImage: EventEmitter<string> = new EventEmitter();

  @Input()
  public size: number;

  public cardSize: string;
  public fontSize: string;

  public imgSrc: any;
  public imgUrl: string;

  constructor(private firestorage: AngularFireStorage) {
    if (!this.size) {
      this.cardSize = '150px';
      this.fontSize = '120px';
    } else {
      this.cardSize = `${this.size}px`;
      this.fontSize = `${this.size - 30}px`;
    }

  }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    if(this.downloadUrlSubscription) {
      this.downloadUrlSubscription.unsubscribe();
    }

    if (this.task) {
      if (this.isActive(this.snapshot)) {
        this.task.cancel();
      }
    }
  }

  onFileChanged(event) {
    const file = event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imgSrc = reader.result;
      };

      reader.readAsDataURL(file);
    }

    if(file) {
      this.startUpload(file);
    }
  }

  private startUpload(file: File) {
    const path = `file/${new Date().getTime()}_${file.name}`;
    this.task = this.firestorage.upload(path, file);
    const ref = this.firestorage.ref(path);
    this.task.percentageChanges().subscribe((p) => {
      this.percentage = p;
      if(this.percentage < 10) {
        this.percentage = 10
      }
    })
    this.snapshot = this.task.snapshotChanges();
    this.snapshot.pipe(
      finalize(() => {
        this.downloadUrlSubscription = ref.getDownloadURL().subscribe((url) => {
          this.imgUrl = url;
          this.uploadedImage.emit(this.imgUrl);
        })
      })
    ).subscribe();
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
