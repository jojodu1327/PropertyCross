function initialize() {

  var app = new $.mvc.app();

  app.loadControllers(["searchService", "search", "results", "favourites", "formatter"]);
  app.loadModels(["property", "recentSearch", "favourites"]);

  if (navigator.splashscreen) {
    $(document).ready(function() {
      app.ready(navigator.splashscreen.hide);
    });
  }

  if(window.cordova) {
    document.addEventListener("backbutton", handleBackButton, true);
  }
}

function handleBackButton() {
  $.ui.goBack();
}

if(window.cordova) {
  document.addEventListener("deviceready", initialize, false);
} else {
  $(document).ready(initialize)
}
