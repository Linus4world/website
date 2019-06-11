import { Injectable } from '@angular/core';
import { AlertType } from './alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  constructor() { }

  public activateAlert(type: AlertType, duration?: number) {
    const div = document.getElementById(type);
    div.style.opacity = '1';
    div.style.display = 'block';
    const that = this;
    setTimeout(function () { that.closeAlert(type); }, (duration === undefined) ? 5000 : duration);
  }

  public closeAlert(type: AlertType) {
    const div = document.getElementById(type);
    div.style.opacity = '0';
    setTimeout(function () { div.style.display = 'none'; }, 600);
  }
}
