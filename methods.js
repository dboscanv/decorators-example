var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target, propertyKey, descriptor) {
    console.log('Clase: ', target.constructor.prototype);
    console.log('Método: ', propertyKey);
    console.log('Property Descriptor: ', descriptor);
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('Argumentos de la funcion', args);
    };
    return descriptor;
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.outputSomething = function (something) {
        console.log(something);
    };
    __decorate([
        log
    ], ExampleClass.prototype, "outputSomething", null);
    return ExampleClass;
}());
new ExampleClass().outputSomething('Parametro de prueba');
