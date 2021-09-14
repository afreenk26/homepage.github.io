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


//cursor 




(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$("#switch").addClass("switched");
		}
	});
	
})(jQuery); 
