$("#toggle").click(function () {
  $("#toggle .bar").toggleClass("animate");
  $("#page").toggleClass("overlay");
});

$(".share-more").click(function () {
  $(this).parent().addClass("expanded");
});
$(".share-less").click(function () {
  $(this).parent().removeClass("expanded");
});

angular.module("app", ["app.directives", "app.filters"]);

function ShareCtrl($scope) {
  var url = "https://codepen.io";
  $scope.shares = {
    facebook: 1234,
    twitter: 5678,
    stumbleupon: 0
  };
  $.getJSON("https://graph.facebook.com/" + url, function (data) {
    $scope.shares.facebook = data.shares;
  });
  $.getJSON(
    "https://cdn.api.twitter.com/1/urls/count.json?url=" + url + "&callback=?",
    function (data) {
      $scope.shares.twitter = data.count;
    }
  );
  /*$.getJSON("http://www.stumbleupon.com/services/1.01/badge.getinfo?url=" + url + '&callback=?', function(data) {
    $scope.shares.stumbleupon = data.result.views;
  });*/
}

angular.module("app.directives", []);
angular.module("app.filters", []).filter("shortNumber", function () {
  return function (value) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + "M";
    }
    if (value >= 1000) {
      return Math.round(value / 1000) + "K";
    }
    return value;
  };
});
