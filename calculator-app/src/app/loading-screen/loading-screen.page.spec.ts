import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

import { LoadingScreenPage } from './loading-screen.page';

describe('LoadingScreenPage', () => {
  let component: LoadingScreenPage;
  let fixture: ComponentFixture<LoadingScreenPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingScreenPage ],
      imports: [
        AppRoutingModule,
        IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingScreenPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    spyOn(router, 'navigate')
    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['calculator']);
  });
});
