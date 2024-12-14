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
