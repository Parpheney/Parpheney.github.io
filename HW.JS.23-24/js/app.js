requirejs.config({
  paths: {
        'jquery': 'http://code.jquery.com/jquery-2.2.3.min',
        'tmpl': 'tmpl'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl' : {
            exports: 'tmpl'
        }
}
});

require (
  [
      'model',
      'jquery',
      'tmpl',
      'view',
      'controller'
  ],
    function (model, $, tmpl, view, controller) {

}

);
