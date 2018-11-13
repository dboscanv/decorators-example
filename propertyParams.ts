function decoratedProperty(target: Object, propertyKey: string) {
    console.log('Clase', target);
    console.log('Nombre de la propiedad', propertyKey);
}

function decoratedParam(target: Object, propertyKey: string, parameterIndex: number) {
    console.log('Nombre del metodo', propertyKey);
    console.log('Clase', target);
    console.log('Posicion del parámetro', parameterIndex);
}


class ExampleClass {
    @decoratedProperty exampleProperty: string = 'Hello World';

    sum(a: number, @decoratedParam b:number): number {
        return a+b
    }
}