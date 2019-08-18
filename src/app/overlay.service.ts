import { Injectable, Injector } from '@angular/core';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ProjectOverlayComponent } from './projects/overlay/project-overlay.component';
import {Overlay, OverlayConfig, OverlayRef, PositionStrategy} from '@angular/cdk/overlay';
import { Project } from './Json/project.interface';
import { PROJECT_DATA_INJECTION_TOKEN } from './projects/overlay/project-overlay.token';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  private overlayCtrl: OverlayRef;

  constructor(private overlay: Overlay, private injector: Injector) {
    const centerPositionStrategy: PositionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const overlayConfig = new OverlayConfig({
      width: '80%',
      height: '90%',
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: centerPositionStrategy
    });
    this.overlayCtrl = this.overlay.create(overlayConfig);
    this.overlayCtrl.backdropClick().subscribe(_ => {
      console.log('BACKDROP');
      this.overlayCtrl.detach();
    });
  }

  private createInjector(data: any): PortalInjector {
    // Instantiate new WeakMap for our custom injection tokens
    const injectionTokens = new WeakMap();

    // Set custom injection tokens
    injectionTokens.set(OverlayRef, this.overlayCtrl);
    injectionTokens.set(PROJECT_DATA_INJECTION_TOKEN, data);

    // Instantiate new PortalInjector
    return new PortalInjector(this.injector, injectionTokens);
  }

  public openOverlay(project: Project) {
    const projectComponentPortal = new ComponentPortal(ProjectOverlayComponent, null, this.createInjector(project));
    this.overlayCtrl.attach(projectComponentPortal);
  }
}
