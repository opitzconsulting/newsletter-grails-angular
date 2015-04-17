#Grails und AngularJS - das Beste von Server und Client vereint

Demo-Code zum Vortrag "Grails und AngularJS - das Beste von Server und Client vereint" von Stefan Glase und Kerry Walder.

##Abstract
Aufbauend auf den Vortrag ["Rapid Application Development mit Grails und AngularJS"](https://github.com/opitzconsulting/tasklist-grails-angular),
von Stefan Scheidt und Stefan Glase, soll dieser Vortrag die Integration der beiden Technologien demonstrieren und Stärken sowie Schwächen herausstellen.
Anhand eines fiktiven Anwendungsfall wird der Fokus auf Security, Informationsaustausch zwischen den beiden Andungsteilen
sowie eine integrierte Entwicklung gelegt.

##Entwicklungsumgebung
[Grails](https://grails.org/) wird zur Ausführung der Applikation benötigt und muss zuvor installiert werden.

Die Abhängigkeiten der Angular-App werden mit [Bower](http://bower.io/) installiert. Bower wird durch den
[Node](https://nodejs.org/) Paket manager [npm](https://www.npmjs.com/) installiert und benötigt zusätzlich
[Git](http://git-scm.com/) auf dem System.

Nach der Installation von Bower können die Dependencies wie folgt geladen werden:
```
cd <project-root>/grails-app/assets/javascript/angular-app
bower install
```

Nach der Installation von Grails und der Angular-Abhängigkeiten kann das Grails Command Line Interface mittels
```
cd <project-root>
grails
```
gestartet werden.

In der Grails-CLI wird die App mittels
```
run-app
```
gestartet.

Anschließend ist die Applikation über die URL http://localhost:8080 zu erreichen.
