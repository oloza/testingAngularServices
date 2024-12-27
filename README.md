============
intro
============
-unit testint
-end2end

router
servicios cli
kit para hacer testing

============
Jest vs Jasmine 
============
-jasmine se escribe las pruebas
-karma  corre las pruebas

- framework famoso para pruebas "jest"
- los framework de test la mayoria maneja la misma 	estructura

-jasmin lo maneja con "it"
-jest maneja "test"  
-los matched jasmin & jest
	expect(n).toBeNull();
	expect(n).toBeDefined();

-crear nuevo proyecto
-karma es el test runing	
-karma.conf.js
	lanza un navegador
-karma lee los archivos *.spec.ts
-"spec", son las especificaciones contratos, se puede cambiar a test pero .spec es por defecto
-correr el comando  
	ng test
-en linux y mac no debería haber probleams de correr en consola

[WSL]
	-pero en WSL debe hacerse algunos pasos adicionales	
	 ~/ sudo apt update && sudo apt -y upgrade && sudo apt -y autoremove
	 ~/ wget https:// dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
	 audo apt -y install ./google-chrome-stable_current_amd64.deb
	 	para verificar 
	 		google-chrome --version

	-ir al archivo karma y configurar
		browsers: ['ChromeHeadless']   //para servidores de integracion continua

============
test
============
-crear un archivo *.spec.ts 
-usar "describe" para iniciar las pruebas
-"it" para crear pruebas
-"expect" para comparar
-mantra de test las "3A"
	Arrange  //preparar
	Act
	Assert

============
Explorando matchers
============
-matchers son ayudas que te da el framework
	.toEqual(value) //compara si dos valores son iguales
	.not.toEqual(value) //compara si dos valores son diferentes 
	.toBe(value) //compara si dos valores son iguales
	.toBeFalsy() //compara si un valor es falso
	.toBeTruthy() //compara si un valor es verdadero
	.toBeDefined() //compara si un valor es definido
	.toBeUndefined() //compara si un valor es indefinido
	.toBeNull() //compara si un valor es nulo
	.toContain(value) //compara si un valor esta contenido en otro
	.toMatch(value) //compara si un valor esta contenido en otro
	.toBeLessThan(value) //compara si un valor es menor que otro
	.toBeGreaterThan(value) //compara si un valor es mayor que otro
	.toBeCloseTo(value, precision) //compara si un valor es cercano a otro
	.toThrow(error) //compara si una funcion lanza un error
-cuando no pruebas todo se llama happy path

============
Reporte de cobertura
============
-estadisticas de que linea de codigo no han sido ejecutadas 
- poner en modo no escucha  no watch no va a hacer live load (termina el proceso y no escucha cambios)
- configurar en karma.conf.js
	plugins: [
		...require('karma-coverage'),
		]
- execute	
	ng test --no-watch --code-coverage

-te crea una nueva carpeta llamada coverage	
"#x" 1x, 2x ... and so,  te indica cuantes veces se ha ejecutado esa linea al mandar las pruebas

-para correr solo los test que requieren antes del describe colar "f" de focus (Jasmine)
-el reporte de covertura te puede indicar que casos faltan probar resaltadolo

-configurar un umbral minimo de cobertura para las pruebas (karma.conf.js)
	coverageReporter: {
		dir: ...
		subdir: '...',
		reporters: [
			...
		],
		check: {                  -- from here
			global: {
				statements: 80,   --cada sentencia que se este ejecunta 80 %
				branches: 80,  --80%
				functions: 80,  --80%
				lines: 80,
			},
		}

============
Mocha report
============
- log mas amigable recomendaod por la comunidad 
	npm install karma-mocha-reporter --save-dev
-configurar en karma.conf.js	
	plugins:[
		require('karma-mocha-reporter'),
	]
   ...
   reporters: ['mocha'],   --quitar 'progress','kjhtml'

-se puece encapsular los "it" en un "describe" para mejor lectura

============
Pruebas unitarias para servicios
============
-crear un servicio
ng g s services/value

-para el observable
import { of } from 'rxjs';

-cada "it" es un escenario de prueba, deberia ser insolada, es decir, no afectar ni depender de otro "it"
-el siguiente comando es ejecutado antes de una prueba
	beforeEach(() => {
		service = new ValueService();
	})

============
Servicios con dependencias
============	
-testear servicios con dependencias
-crear un servicio extra
	ng g s services/master
- en angular la inyeccion de dependencias se hace en el constructor y utiliza el patron singleton
-tipos mocks o tipo fake
-los fakes son la manera menos aconsejable por el mantenimioento que se le debe dar

============
Spies
============
-para  saber si dentro un servicio se llamo a un metodo en especifico
-no intersa lo que devuelve sino que se llame
-se puede "espiar" cuantas veces fue llamado un metodo
- MOCKING
	-son objetos simulados (pseudo-objetos mock object, objectos de pega imitan objetos reales)

============
Usando las herramientas de Angular
============
-angular tiene una suite amplia para testing
-importar un paquete de angular, te ayuda a crear un modulo para 
	import{TestBed} from '@angular/core/testing';
	...
	TestBed.configureTestingModule({
		providers: [ valueService ]
			...
		imports: [
			RouterTestingModule,
			...
		],

-se inyecta el servicio en lugar de instanciar , por el patron singleton
	service= TestBed.inject(ValueService);

============
TestBed + Spies
============		
-simpre hay que hacer una prueba de que el servicio fue creado de forma correcta
	it('should be create',()=>{})

-implementar los spies
	beforeEach(() => {
    const spy =  jasmine.createSpyObj('ValueService', ['getValue']);
	...
	providers: [
        MasterService,
        { provide: ValueService, useValue: spy }
      ]
	...
	valueServiceSpy=TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;	  