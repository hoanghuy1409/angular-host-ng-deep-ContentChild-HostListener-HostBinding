import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { AuFaInputComponent } from "./lib/au-fa-input/au-fa-input.component";
import { InputRefDirective } from "./lib/common/input-ref.directive";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let component: AuFaInputComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let emailField: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, InputRefDirective, AuFaInputComponent],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    emailField = el.query(By.css("#email-field"));
    fixture.detectChanges();
  });

  it("should create the test application", async(() => {
    expect(component).toBeTruthy();
  }));

  it("should create a font awesome email input", async(() => {
    expect(emailField).toBeTruthy();
  }));

  it("should include the correct email icon inside the email input", async(() => {
    expect(emailField.query(By.css("i.icon.fa.fa-envelope"))).toBeTruthy();
  }));

  it("should have projected the correct test input inside the email field", async(() => {
    expect(emailField.query(By.css("input.test-class"))).toBeTruthy();
  }));
});
