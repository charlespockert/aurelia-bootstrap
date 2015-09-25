export class App {
  configureRouter(config, router){
    config.title = 'Aurelia-Bootstrap Demo';
    config.map([
      { route: ['','welcome'],  name: 'welcome', moduleId: 'welcome', nav: true, title:'Welcome' },
      { route: ['navbar'],  name: 'navbar', moduleId: 'navbar', nav: true, title:'Navigation Bar' },
      { route: ['dropdowns'],  name: 'dropdowns', moduleId: 'dropdowns', nav: true, title:'Dropdowns' },
      { route: ['breadcrumbs'],  name: 'breadcrumbs', moduleId: 'breadcrumbs', nav: true, title:'Breadcrumbs' },
      { route: ['labels'],  name: 'labels', moduleId: 'labels', nav: true, title:'Labels' }
    ]);

    this.router = router;
  }
}
