new Waypoint({
    element: document.getElementById('profile'),
    handler: function(direction) {
    //   console.log('Basic waypoint triggered');
      var target = document.getElementById('header').getElementsByClassName('container')[0];
      if (direction == "down") {
        target.classList.remove("navbar");
        target.classList.add("fixed");
      }
      else{
        target.classList.remove("fixed");
        target.classList.add("navbar");
      }

    }
  })

//   var waypoint = new Waypoint({
//     element: document.getElementById('new-operator'),
//     handler: function(direction) {
//       console.log(' hit')
//     }
//   })
  
// class StickyHeader {
//         constructor() {
//     //         // this.lazyImages = $(".lazyload");
//     //         this.siteHeader = document.getElementsByClassName("waypoint-li");
//     //         this.headerTriggerElement = document.getElementById("profile");
//     //         // this.pageSections = $(".page-section");
//     //         // this.headerLinks = $(".header .primary-nav a");
//             this.createHeaderWaypoints();
//             this.createExpWaypoints();
//     //         this.createPageSectionWaypoints();
//     //         // this.refreshWaypoints();
//         }
// createHeaderWaypoints(){
// new Waypoint({
//     element: document.getElementById('profile'),
//     handler: function(direction) {
//       console.log('Basic waypoint triggered');
//       var target = document.getElementById('header').getElementsByClassName('container')[0];
//       if (direction == "down") {
//         target.classList.remove("navbar");
//         target.classList.add("fixed");
//       }
//       else{
//         target.classList.remove("fixed");
//         target.classList.add("navbar");
//       }

//     }
//   });
// }
// createExpWaypoints(){  
//   new Waypoint({
//     element: document.getElementById('experience'),
//     handler: function(direction) {
//     //   console.log('Basic waypoint triggered');
//       var target = document.getElementById('experience');
//       if (direction == "down") {
//         // target.classList.remove("navbar");
//         target.classList.add("header_bg");
//       }
//       else{
//         // target.classList.remove("fixed");
//         // target.classList.add("navbar");
//       }
//     }
//   });
// }
// }
// 

//     // refreshWaypoints(){
//     //     this.lazyImages.on('load',function(){
//     //         Waypoint.refreshAll();
//     //     });
//     // }
//     createWaypoints() {
//         var stickyHeaderObject = document.getElementById("header");

//         new Waypoint({
//             element: document.getElementById("profile"),
//             handler: function (direction) {
//                 if (direction == "down") {
//                     stickyHeaderObject.siteHeader.addClass("header_bg");
//                 } else {
//                     stickyHeaderObject.siteHeader.removeClass("header_bg");
//                     stickyHeaderObject.headerLinks.removeClass("is-active");
//                 }
//             }
//         });
//     }
    
//     createPageSectionWaypoints() {
//         var stickyHeaderObject = this;
//         this.pageSections.each(function () {
//             var currentPage = this;
//             new Waypoint({
//                 element: currentPage,
//                 handler: function (direction) {
//                     if (direction == "down") {
//                         var matchingLink = currentPage.getAttribute("data-matching-link");
//                         stickyHeaderObject.headerLinks.removeClass("is-active");
//                         $(matchingLink).addClass("is-active");
//                     }
//                 },
//                 offset: "15%"
//             });

//             new Waypoint({
//                 element: currentPage,
//                 handler: function (direction) {
//                     if (direction == "up") {
//                         var matchingLink = currentPage.getAttribute("data-matching-link");
//                         stickyHeaderObject.headerLinks.removeClass("is-active");
//                         $(matchingLink).addClass("is-active");
//                     }
//                 },
//                 offset: "-40%"
//             });
//         });
//     }
// }

// export default StickyHeader;