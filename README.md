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
