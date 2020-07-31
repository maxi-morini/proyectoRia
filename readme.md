npm init
	crea package.json

npm install --save react0
	agrega cosas de react

mientras probada agregue a mano react-dom y react-scripts
	react-dom
		es para cosas web (no mobile(?))
		https://stackoverflow.com/questions/34114350/react-vs-reactdom
	react-scripts para que "npm start", "npm run-script start" y "npm run-script build" anden
		https://stackoverflow.com/questions/50722133/what-exactly-is-the-react-scripts-start-command
	supongo que se instalarian con
		npm install --save react-dom
		npm install --save react-scripts
	
serve
	es posible levantar las cosas compiladas en build (lo que iria en produccion)
	instalar serve globalmente: npm install -g serve
	"serve -s build" ó "cd en /build" -> "serve -s"
	
	
para que ande el servidor precisas instalarle el express el morgan lo puse para ver en consola despues lo sacaremos le das
npm i express morgan


Guia de instalacion Posta
	npm install
	npm run webpack
	npm run dev
