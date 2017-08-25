import { Component, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, OnDestroy } from '@angular/core';
import { ViewChild, ViewChildren, QueryList, AfterViewInit, OnChanges } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { AlertTwoComponent } from './alert-two/alert-two.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, AfterViewInit, OnChanges {
  /*
      get a reference to the template element with
      the ViewChild decorator that also takes a local variable as parameter.

      The default return from the ViewChild decorator is the component instance
      or the DOM element, but in our case, we need to get the element as ViewContainerRef .

      ViewContainerRef stores a reference to the template element ( our container )
      and also exposes an API to create components.
  */
  // @ViewChild('alertContainer', {read: ViewContainerRef }) container;
  @ViewChild('alertContainer', {read: ViewContainerRef }) container;
  @ViewChildren(AlertTwoComponent) alerts: QueryList<AlertComponent>;
  @ViewChildren('div') divs: QueryList<any>;
  @ViewChildren('alertContainer2', {read: ViewContainerRef }) container2: QueryList<any>;


  componentRef: ComponentRef<any>[] = [];
  isOn = true;

  constructor( private resolver: ComponentFactoryResolver ) { }

  /*
    The ComponentFactoryResolver service exposes one important method, resolveComponentFactory.
    The resolveComponentFactory() method takes a component and returns a ComponentFactory.
    The resolveComponentFactory() method takes a component and returns the recipe for how to create a component.
  */

  // createComponent(type) {
  //   // console.log(this.container);
  //   const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);

  //   /*
  //       We are calling the createComponent() method with the recipe.
  //       Internally this method will call the create() method from the factory and will append
  //       the component as a sibling to our container.
  //   */
  //   this.componentRef = this.container.createComponent(factory);

  //   // Now we have a reference to our new component, and we can set the type Input.
  //   this.componentRef.instance.type = type;

  //   // this.componentRef.instance.output.subscribe(event => console.log(event));
  //   this.componentRef.instance.output.subscribe((event) => {
  //     console.log(event);
  //     if (event === 'add') {
  //       this.createComponent('success');
  //     }
  //     if (event === 'remove') {
  //       this.removeComponent();
  //     }
  //   });
  // }

  createComponent(type) {
    this.isOn = false;
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);

    this.container2.forEach((item) => {
      const myVar = item.createComponent(factory);
      // myVar.instance.type = type;
      this.componentRef.push(myVar );
      console.log(this.componentRef);

    });

    // this.componentRef.instance.output.subscribe(event => console.log(event));
    // this.componentRef.instance.output.subscribe((event) => {
    //   console.log(event);
    //   if (event === 'add') {
    //     this.createComponent('success');
    //   }
    //   if (event === 'remove') {
    //     // this.removeComponent();
    //     this.componentRef.destroy();
    //     console.log(this.componentRef);
    //   }
    // });

  }



  removeComponent() {
    if (!this.isOn) {
      console.log(this.componentRef);
      const length = this.componentRef.length;
      this.componentRef[length - 1].destroy();
      console.log(this.componentRef);
      this.componentRef.pop();
      console.log(this.componentRef);
    }
    this.isOn = true;
  }

  ngOnDestroy() {
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
    this.divs.forEach(div => console.log(div));
    // this.container2.changes.subscribe((change) => {
    //   console.log(change);
    // });
  }


}
