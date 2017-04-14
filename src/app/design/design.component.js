"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var part_item_1 = require("../parts/part-item");
var img_part_component_1 = require("../parts/img-part.component");
var text_part_component_1 = require("../parts/text-part.component");
var workspace_directive_1 = require("./workspace.directive");
var DesignComponent = (function () {
    function DesignComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DesignComponent.prototype.ngAfterViewInit = function () {
        this.parts = this.getParts();
        for (var _i = 0, _a = this.parts; _i < _a.length; _i++) {
            var part = _a[_i];
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(part.component);
            var componentRef = this.workspaceHost.viewContainerRef.createComponent(componentFactory);
            componentRef.instance.data = part.data;
        }
    };
    DesignComponent.prototype.getParts = function () {
        return [
            new part_item_1.PartItem(text_part_component_1.TextPartComponent, { text: 'TextPartComponet text' }),
            new part_item_1.PartItem(img_part_component_1.ImgPartComponent, { src: 'https://angular.io/resources/images/logos/angular/angular.svg' })
        ];
    };
    return DesignComponent;
}());
__decorate([
    core_1.ViewChild(workspace_directive_1.WorkspaceDirective)
], DesignComponent.prototype, "workspaceHost", void 0);
DesignComponent = __decorate([
    core_1.Component({
        selector: 'app-design',
        templateUrl: './design.component.html',
        styleUrls: ['./design.component.css']
    })
], DesignComponent);
exports.DesignComponent = DesignComponent;
