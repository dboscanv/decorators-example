function log(target: Object, propertyKey: string, descriptor: any) {
	console.log('Clase: ', target.constructor.prototype);
	console.log('Método: ', propertyKey);
	console.log('Property Descriptor: ', descriptor);

	descriptor.value = function (...args: any[]) {
		console.log('Argumentos de la funcion', args);
	}
	return descriptor;
}

class ExampleClass {
	@log
	outputSomething(something: string) {
		console.log(something);
	}
}

new ExampleClass().outputSomething('Parametro de prueba');