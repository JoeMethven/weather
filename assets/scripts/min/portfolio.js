!function(e){var t=function(){var t=e("nav#navigation"),i=(e(".portfolio__hero"),e(window)),a=0,o=0;i.on("scroll",function(){a=(i.height()-this.pageYOffset)/i.height(),o=a.toFixed(2),0>=o?t.fadeIn(400):o>0&&t.fadeOut(400)})},i=function(){e("nav#navigation a").on("click",function(t){var i="#";t.preventDefault(),i+=e(this).data("button");var a=e(i),o=a.offset().top;a.is("#about")?e("body").animate({scrollTop:o},1e3):e("body").animate({scrollTop:o-49},1e3)})},a=function(t){var i=e(t).find(".content");i.fadeTo(0,0),e(window).on("scroll",function(){e(t).each(function(){var t=e(this),i=e(window),a=t.offset().top+t.outerHeight()/5,o=i.scrollTop()+i.height();o>a&&t.find(".content").fadeTo(800,1)})})},o=function(){var t=[{title:"BCHA Poster Design",date:"12th August",desc:"Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",link:"http://google.co.uk",image:"assets/img/portfolio/featured/featured-1.jpg",artwork1:"",artwork2:"",artwork3:"",recentArtwork:"",body:"Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit."},{title:"Portfolio Item 2",date:"1st October",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",link:"http://joemethven.com",image:"assets/img/portfolio/featured/featured-2.jpg",recentArtwork:"",featureImgAlignment:"bottom",body:"Maecenas faucibus mollis interdum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."},{title:"Portfolio Item 3",date:"17th October",desc:"Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",link:"http://google.co.uk",image:"assets/img/portfolio/featured/featured-1.jpg",recentArtwork:"",featureImgAlignment:"center"},{title:"Portfolio Item 4",date:"12th September",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",link:"http://joemethven.com",image:"https://newevolutiondesigns.com/images/freebies/galaxy-wallpaper-36.jpg",recentArtwork:""},{title:"Portfolio Item 5",date:"20th September",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",link:"http://joemethven.com",image:"http://cdn.wonderfulengineering.com/wp-content/uploads/2014/06/galaxy-wallpapers-11.jpg",recentArtwork:""},{title:"Portfolio Item 6",date:"6th November",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",link:"http://joemethven.com",image:"http://guysfromandromeda.com/wp-content/uploads/2012/07/Galaxy-background.jpg",recentArtwork:""},{title:"Portfolio Item 7",date:"17th November",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",link:"http://joemethven.com",image:"assets/img/portfolio/featured/featured-2.jpg",recentArtwork:""}],i=app.templates.portfolio;e("#portfolio-overview").prepend(i(t[0]))};e(document).ready(function(){e("div.navigation__logo").on("click",function(){e("body").animate({scrollTop:0},800)}),t(),i(),o(),e("img").on("dragstart",function(e){e.preventDefault()}),a(".global")})}(jQuery);