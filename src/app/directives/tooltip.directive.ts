import { Directive, Input, TemplateRef, Type } from '@angular/core';
import { ElementRef, Renderer2, Injector, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
    // We can pass string, template or component
    @Input() content: string | TemplateRef<any> | Type<any>;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

}
