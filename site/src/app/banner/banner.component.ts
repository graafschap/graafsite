import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {
  @ViewChild("banner_myVideo") bannerVideo: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  /**
   * Just make sure that the video is played and the sound is muted.
   */
  ngAfterViewInit(): void{
    this.bannerVideo.nativeElement.muted = true;
    this.bannerVideo.nativeElement.play();
  }
}
