/**
* Created by Christopher Grigg 04/01/2015
*/

//var CHRISG = CHRISG || {};

(function () 
{
  'use strict';
  var app = angular.module("site", []);
  
//  app.controller("NavCtrl", function() {
//    this.onNavBtnClick = function(sectionID)
//    {
//      var selectedSection = $("#" + sectionID);
//    };
//  });
  
  app.controller("IntroCtrl", ["$http", function($http)
  {
      var introCtrl = this;

      $http.get("data/json/intro.json")
          .success(function(data)
          {
              console.log("intro.json loaded!")
              introCtrl.intro = data.intro;
              introCtrl.name = data.name;
              introCtrl.explain = data.explain;
              introCtrl.buttonNav = data.buttonNav;
          })
          .error(function()
          {
              alert("error loading intro json");
          });
  } ]);
})();
