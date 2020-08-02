function waypoint() {
  new Waypoint({
    element: document.getElementById('profile'),
    handler: function (direction) {
      //   console.log('Basic waypoint triggered');
      var target = document.getElementById('header').getElementsByClassName('container')[0];
      if (direction == "down") {
        target.classList.remove("navbar");
        target.classList.add("fixed");
      } else {
        target.classList.remove("fixed");
        target.classList.add("navbar");
      }

    }
  });
  //Waypoint for profile
  new Waypoint({
    element: document.getElementById('profile'),
    handler: function (direction) {
      var exp = document.getElementById('header-experiences');
      var profile = document.getElementById('header-profile');
      if (direction == "down") {
        exp.classList.remove("header_bg");
        profile.classList.add("header_bg");
      } else {}
    }
  });
  //Waypoint for experiences
  var change_exp = {
    element: document.getElementById('experiences'),
    handler: function (direction) {
      var exp = document.getElementById('header-experiences');
      var profile = document.getElementById('header-profile');
      if (direction == "down") {
        exp.classList.add("header_bg");
        profile.classList.remove("header_bg");
      } else {
        exp.classList.remove("header_bg");
        profile.classList.add("header_bg");

      }
    }
  };

  new Waypoint(change_exp);
  //Waypoint for abilities
  new Waypoint({
    element: document.getElementById('abilities'),
    handler: function (direction) {
      var exp = document.getElementById('header-experiences');
      var abi = document.getElementById('header-abilities');
      if (direction == "down") {

        exp.classList.remove("header_bg");
        abi.classList.add("header_bg");
      } else {
        exp.classList.add("header_bg");
        abi.classList.remove("header_bg");
      }
    }
  });

  //Waypoint for projects
  new Waypoint({
    element: document.getElementById('projects'),
    handler: function (direction) {
      var pro = document.getElementById('header-projects');
      var abi = document.getElementById('header-abilities');
      if (direction == "down") {

        abi.classList.remove("header_bg");
        pro.classList.add("header_bg");
      } else {
        abi.classList.add("header_bg");
        pro.classList.remove("header_bg");
      }
    }
  });
  //Waypoint for contact
  new Waypoint({
    element: document.getElementById('contact'),
    handler: function (direction) {
      var pro = document.getElementById('header-projects');
      var con = document.getElementById('header-contact');
      if (direction == "down") {

        pro.classList.remove("header_bg");
        con.classList.add("header_bg");
      } else {
        pro.classList.add("header_bg");
        con.classList.remove("header_bg");
      }
    },
    offset: '50%'

  });


}

waypoint();