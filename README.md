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

    Angular CLI     Project Management  npm install -g @angular/cli@11

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

    Components      represents user-defined html element.

                    component = controller + template

                    @Component({
                        selector:'my-hello',
                        templateUrl:'mycomponent.html'
                    })
                    class HelloComponent {
                        welcoemMsg:string;

                        constructor(){
                            this.welcoemMsg="Hello World";
                        }
                    }

                    mycomponent.html
                    ---------------------
                        <h1>{{welcomeMsg}}</h1>

                    <my-hello></my-hello>           <h1>Hello World</h1>


    Directives       represents user-defined html attribute.
                    
                    @Directive({
                        selector:'myHighlight'
                    })
                    class HighLightDirective {
                       //code needed to high light the content of the hosting eleemnt
                    }
                    
                    <my-hello myHighlight="purple"></my-hello>   

                    in-built dirctive
                    ---------------------------
                        structural directive
                            ngIf
                            ngFor
                            ngSwitch
                                ngSwitchCase
                                ngDefault
                        
                        event directives
                            click
                            dblclick
                            blur
                            focus
                            change
                            ngSubmit

                        other directives
                            ngModel
                            ngForm
                            formControlName
                            routerLink
                            .............etc
    
    Pipes          are used to tranform valeus just before they are rendered on the screen.

                        inbuilt pipes

                            lowercase           {{username|lowercase}}
                            uppercase
                            number
                            percent
                            currency
                            date
                            aysnc
                            json

                    @Pipe({
                        name:'inwords'
                    })
                    class ConvertIntoWordsPipe{
                        //.......code needed to do the transformation
                    }

                    {{1234|inwords}}

    Services    are sued to accomidate bussienss logic
                    like client side validations, computation, rest api calls

                    @Injectable({
                        providedIn:'root'
                    })
                    class MyService{
                        //bussiness logic
                    }
    
    Gaurds          are special services that are used to safe gourd routes
    Interceptors    are special services that are used to do repetative tasks
                    before sending a rest api request or after receving a rest api response.

Angular CLI
------------------------------------------------------------------------

    is used to manage and work with our porject structure.

    ng new projectName

    cd projectName

    ng serve --port 8787 -o             used to execute the angular app on development server

    ng build                            trnspell and package the angular app into  'dist' folder

    ng g component componentName --skipTests        used to generate a new component without test cases
    ng g service serviceName --skipTests            used to generate a new service without test cases
    ng g module moduleName               used to generate a new module without test cases
    ng g pipe pipeName --skipTests                  used to generate a new pipe without test cases
    ng g directive directiveName --skipTests        used to generate a new directive without test cases
    ng g guard guardName --skipTests                used to generate a new guard without test cases
    ng g interceptor interceptorName --skipTests    used to generate a new interceptor without test cases
    ng g class className --skipTests                used to generate a new class without test cases
    ng g interface interfaceName                    used to generate a new interface

    ng test                             used to execute all our test cases.

Typescript
-----------------------------------------------------------
    
    interface MyInterface{
        field1:string;
        field2?:Date;

        method1():void;
    }
    
    class Dummy implements MyInterface{
        datamember : string;

        constructor(datamember:string,arg1:number,public arg2:number){
            this.datamember = datamemeber;
        }

        method1():void{
            this.datamember="";
            console.log(this.arg2);
        }
    }

 Angular Components
------------------------------------------------------------------   

    Styles
        Global Style
            styles.css

        Component level local style

    Data Binding

        interpolation
            {{ expression }}
        
        one-way data binding
            [attribute]="varName"

        event binding
            (event-directive)="funcCall()"

        two way data binding
            form elements only
            the value of a variable is loaded on to the form ele initially
            when ever the foem ekle value chagnes, the var value also gets updated.

            ngModel         FormsModule

            [(ngModel)]="field"

        style binding

            [style.cssProperty]="field"

            [class]="{'class1-name':true,'class2-name':false}"

Angular Pipes          
-------------------------------------------------------------
are used to tranform valeus just before they are rendered on the screen.

                        inbuilt pipes

                            lowercase           {{username|lowercase}}
                            uppercase
                            number
                            percent
                            currency
                            date
                            aysnc
                            json

 Angular Routing
 -------------------------------------------------------------

    RouterModule
            Routes      Route[]
                            path            urlSegment
                            component       ComponentObject
                            pathMatch       'startWith'|'full'
                            redirectTo
                            canActivate
                            canDeactivate
                            canLoad
                            children

            .forRoot(routes)            globally on the entire app
            .forChild(routes)           local to a given module only

            <router-outlet></router-outlet>

            routerLink              directive to be used as an attrb on 'a' element

            routerActiveLink        holding the name of class that has to be appleid to a link
                                    that is currently loaded on the page.

            Router                  is a service used to navigate programatically,
                                    .navigateByUrl("url")
                                    .navigate("path",{queryParams:{}...etc})

 Angular Service
 -------------------------------------------------------------

        a service is used to hold bussiness logic.

 Angular Dependency Injection
 -------------------------------------------------------------
    angular can create objects for all of its resources
    and supply them to the place where they are needed.

    Root Injector           root module
        one injector per modules                     providers:[]
            one injector per component               providers:[]
            one injector per pipe                    providers:[]
            one injector per directive ..etc.,       providers:[]

    @Injectable({
        providedIn:'root'
    })
    class MySerive{

    }

 Angular Forms
 -------------------------------------------------------------      

        Template Driven Forms

                    FormsModule
                        ngForm
                        ngModel

                    write as lot on the template side
                    we will a very less control over the form from the controller side
                    it is hard to test using any javascript testing library

        Model Driven Forms / Reactive Forms

                    ReactiveFormsModule
                        FormGroup
                        FormControl

                        formControlName
                        formGroup

                    write less on tempalte side and more on the controller side
                    as a result we have more programtic control on the form and its validations
                    custome validations are easy to intergrate
                    the validation can be done asynchronously
                    easier to test.

        Form Validation Properties 
        ------------------------------------

            on ngForm and FormGroup
                        valid           
                        invalid

            on ngModel  and   FormControl
                        touched     untouched
                        dirty       prestine
                        invalid     valid

                        errors
                        errors.required
                        errors.min
                        errors.max
                        errors.pattern
                        errors.minlength
                        errors.maxlength
                        errors.email
                        ...etc

 Angular Components With Attributes,Events and Passable Content.
 -----------------------------------------------------------------    

    Passable Content
        <ng-content></ng-content>

    Component Attriubtes
        @Input()

    Emiting Events
        EventEmiter        
        @Output()
        

RxJS
-------------------------------------------------------------------

    is a reactive javascript library.

        let job = (resolve,reject) => {
            //executed sucessfully we call 
            resolve(resultantData);

            //an error is encoutnred and the job did not eomplte.
            //then we call
            reject(err);
        }

        let p = new Promise(job);

        p.then(
            (resultantData) => {}, //on successful completion
            (err) => {} //when Error occurs
        );

        ----------------------------------------------------------------

        let job = (observer) => {

            observer.next(resultantData);

            observer.complete();

            observer.error(err);
        }

        let ob = new Observable(job);

        ob.subscribe(
            (resultantData) => {}, //onNext
            (err) => {}, //onError
            ()=>{} //onComplete
        )

        rxjs Operators
        ----------------------------------------------

            map
            filter
            merge
            joinFork
            catchError
                ...etc

Angular LifeCycle & Hooks
----------------------------------------------------------------------------------

        constructor
        ngOnChanges                      when the data-bound property variations happen (form control gets renewed )
        ngOnInit                         When Angular has completed the creation and introduction of components
        ngDoCheck                        whenever there is a vitality to review the input property of a component 
                ngAfterContentInit       when every content of the components gets introduced and checked for 
                                          the first time
                ngAfterContentChecked   
                ngAfterViewInit
                ngAfterViewChecked
        ngOnDestroy

Json-Server
------------------------------------------------------------------------------------

    is a fake rest api generating server, javascript library

    this library can be used to create fake rest api end point on a givne .json file.

    npm install json-server --save

    json-server --watch file.json --port 9090

HttpClient
------------------------------------------------------------------------------------

    HttpClientModule

        HttpClient
                    get(url)  :Observable
                    put(url,reqBody) :Observable
                    post(url,reqBody) :Observable
                    delete(url) :Observable
