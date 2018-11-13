var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function decoratedProperty(target, propertyKey) {
    console.log('Clase', target);
    console.log('Nombre de la propiedad', propertyKey);
}
function decoratedParam(target, propertyKey, parameterIndex) {
    console.log('Nombre del metodo', propertyKey);
    console.log('Clase', target);
    console.log('Posicion del parámetro', parameterIndex);
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
        this.exampleProperty = 'Hello World';
    }
    ExampleClass.prototype.sum = function (a, b) {
        return a + b;
    };
    __decorate([
        decoratedProperty
    ], ExampleClass.prototype, "exampleProperty", void 0);
    __decorate([
        __param(1, decoratedParam)
    ], ExampleClass.prototype, "sum", null);
    return ExampleClass;
}());
