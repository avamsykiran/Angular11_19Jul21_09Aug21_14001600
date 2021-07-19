Angular 11
-------------------------------------------------
https://github.com/avamsykiran/Angular11_19Jul21_09Aug21_14001600.git



Lab Setup
---------------------------------------------------

    Chrome          Browser
    
    VSCode          IDE                 https://code.visualstudio.com/download
    
    NodeJS          Dev Platform        https://nodejs.org/en/

                                        node --version
                                        npm --version

    Angular CLI     Project Management  npm install -g @angular/cli

                                        ng --version

Pre-Requisites
-----------------------------------------------------

    HTML 5
        Basic Tags
        Form Elements
        Form Validation Attriubtes
        WebStorage Api

    Javascript (ES6)
        Javascript Basic Objects - String, Arrays, Math, Date
        Javascript DOM
            window
            document
        asyn and await and promise
        es6 modules
        template literals
        spread operator
        array prototype functions
        Destructred Assigment
        High Order Functions, Callbacks, Closures, Protoytpes and mixins
    
    CSS 3 (optional)
    Bootstrap (optional)

        ES6 and Node Examples
        -------------------------
        https://github.com/avamsykiran/ES6AndNode_14Jun2021_25Jun2021_11301330.git


Web App Evolution
--------------------------------------------------------------------

    Websites (static)           folder having staic html documents (pages)

    Dynamic Web Application     MiddleWare      +   integrated UI
                                Servlets and JSP
                                C# and ASP.Met  ..........etc

                                has programs that run on a server,
                                generate html dynamically each time a req is received.
                                the generated html is sent tp the browser as a resp.
                                browser ahs to unlaod the old page and reload the new one.

    Single Page Applications    Middleware     + Isolated UI

                                REST api       + SPA
                                Java/.net         angular/reactjs/vuejs/ember ...etc


                                the angular ui runs on the cleint machine and,
                                the html required is generated dynamically on the 
                                cleitn itelf and hence the entire page need not be
                                generated avery time, but only the differential content
                                is generated and loaded keeping the page
                                resposive and interactive 90% of the time.  

What is Angular?
---------------------------------------------------------------------

    angular is a SPA javascript framework.

    angularJS           javascipt

    angular2            typescript
    ....
    angular11


    typescript = Javascript + datatypes

Angular Features
-----------------------------------------------------------------------

    HTML Extendable - add custom elements and attributes
    Modular
    Light-weight
    supprots dynamic loading
    supports data binding
    supports virtual dom and optimized DOM updation
    supports routing
    On Stop solution for any SPA

Angular Archetecture
------------------------------------------------------------------------

    every angular resource is a class.
    each resource is marked witha specific decorator like
        @NgModule
        @Component
        @Directive
        @Pipe
        @Injectable ..etc

    Each decorator is suppleid with a json object having the resource specific configuarations
    and that json object is called meta-data.
    
    Modules
                is a logical group of components, directives,
                pipes, services, guards , interceptors and sub-modules.

                each and everu angular project must be contained
                inside a modules called Root Module .

                other modules that are imported into Root Module are
                called feature modules.

                @NgModule({
                    declarations:[
                        //comma seperated list of
                        //components, directive and pipes
                        //that must belong to the current module
                    ],
                    imports:[
                        //comma sperated list of
                        //other sub-modules
                    ],
                    exports:[
                        //comma seperated list of
                        //components, directive and pipes
                        //that must accessable from outside the current module.
                    ],
                    providers:[
                        //comma seperated list of services and interceptors
                         //that must belong to the current module
                    ],
                    bootstrap:[
                        //comma seperated list of
                        //components that must be appearing on the screen
                        //immediately after loading the current module.
                    ]
                })
                class MyRootModule {
                }

    Components
    Directives
    Pipes
    Services
    Gaurds
    Interceptors
