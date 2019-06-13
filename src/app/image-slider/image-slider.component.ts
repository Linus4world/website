import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, AfterViewInit {

  @Input() images: string[];
  @Input() id: string;
  @Input() captions: string[];
  private slideIndex = 1;

  constructor() {
  }

  ngOnInit() {
    this.id = this.id.replace(/\s/g, '');
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }

  // Next/previous controls
  public plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  // Thumbnail image controls
  public currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  public showSlides(n: number) {
    let i: number;
    const slides = document.getElementsByClassName('aspect-ratio-box-inside ' + this.id);
    const dots = document.getElementsByClassName('dot ' + this.id);
    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
      (slides[i] as any).style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    (slides[this.slideIndex - 1] as any).style.display = 'block';
    if (dots[this.slideIndex - 1]) {
      dots[this.slideIndex - 1].className += ' active';
    }
  }

}
