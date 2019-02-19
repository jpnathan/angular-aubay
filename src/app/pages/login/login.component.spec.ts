import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginForm } from '../../forms/login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  const invalidForm = {
    username: 'teste',
    password: '1234'
  };

  const validForm = {
    username: 'aubay@aubay.com',
    password: '12345'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule.forRoot(),
        BrowserAnimationsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;

      component.form = new LoginForm();
      component.formInstance = component.form.getFormInstance();
      component.formControls = component.form.getFormControls();

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;

      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form to be invalid', () => {
    component.formInstance.setValue(invalidForm);
    expect(component.formInstance.invalid).toBeTruthy();
    expect(component.formInstance.hasError).toBeTruthy();
  });

  it('should form to be valid', () => {
    component.formInstance.setValue(validForm);
    expect(component.formInstance.valid).toBeTruthy();
  });

  it('should not do login', () => {
    component.formInstance.setValue(invalidForm);
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
    expect(component.formInstance.markAsTouched).toBeTruthy();
    expect(component.formInstance.invalid).toBeTruthy();
    expect(component.formInstance.hasError).toBeTruthy();
  });

  it('should do login successfully', () => {
    component.formInstance.setValue(validForm);
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
});
