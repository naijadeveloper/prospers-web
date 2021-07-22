// logic script for home page

//
const moreList = document.querySelector("li.more-list");
const otherMenuLinks = document.querySelector("ul.other-menu-links");
const closeOtherMenu = document.querySelector("li.close-other-menu");
const main = document.querySelector("main");
//
const pageHeader = document.querySelector(".page-header");
const pageName = pageHeader.firstElementChild;
const pageNameSpan = pageName.children;
const menuList = pageName.nextElementSibling;
//
const menuListItems = document.querySelectorAll(".menu-list-item");
//
moreList.addEventListener("click", function(e) {
  e.preventDefault();
  otherMenuLinks.style.display = "flex";
});
//
closeOtherMenu.addEventListener("click", function(e) {
  e.preventDefault();
  otherMenuLinks.style.display = "none";
});
//changing style for the menu links when clicked
menuListItems.forEach(function(item) {
  item.addEventListener("click", function() {
    menuListItems.forEach(function(inneritem) {
      inneritem.classList.remove("link-bg-style");
    })
    item.classList.add('link-bg-style');
  });
});
//scrolling using the scroll bar or the up and down buttons
main.addEventListener("scroll", function(e) {
  let about = this.firstElementChild;
  let aboutTopVal = about.getBoundingClientRect().top;
  //
  let services = about.nextElementSibling;
  let servicesTopVal = services.getBoundingClientRect().top;
  //
  let recents = services.nextElementSibling;
  let recentsTopVal = recents.getBoundingClientRect().top;
  //
  let testimonials = recents.nextElementSibling;
  let testimonialsTopVal = testimonials.getBoundingClientRect().top;
  //
  let contacts = testimonials.nextElementSibling;
  let contactsTopVal = contacts.getBoundingClientRect().top;
  //

  if(aboutTopVal === 0) {
    menuListItems.forEach(function(item) {
      item.classList.remove("link-bg-style");
    })
    menuListItems[0].classList.add("link-bg-style");
    //remove all changes
    pageHeader.classList.remove("page-header-change");
    pageName.classList.remove("name-change");
    menuList.classList.remove("menu-list-change");
    for(span of pageNameSpan) {
      span.classList.remove("name-span-change");
    }
  } else {
    //if changes already exist, dont add again
    //if not, then add
    if(!pageHeader.classList.contains("page-header-change")
      &&
      !pageName.classList.contains("name-change")
      &&
      !menuList.classList.contains("menu-list-change")
      &&
      !pageNameSpan[0].classList.contains("name-span-change")
      &&
      !pageNameSpan[1].classList.contains("name-span-change")) {
        //
        pageHeader.classList.add("page-header-change");
        pageName.classList.add("name-change");
        menuList.classList.add("menu-list-change");
        for(span of pageNameSpan) {
          span.classList.add("name-span-change");
        }
        //
    }
  }
  //
  if(servicesTopVal === 0) {
    menuListItems.forEach(function(item) {
      item.classList.remove("link-bg-style");
    })
    menuListItems[1].classList.add("link-bg-style");
  }

  if(recentsTopVal === 0) {
    menuListItems.forEach(function(item) {
      item.classList.remove("link-bg-style");
    })
    menuListItems[2].classList.add("link-bg-style");
  }

  if(testimonialsTopVal === 0) {
    menuListItems.forEach(function(item) {
      item.classList.remove("link-bg-style");
    })
    menuListItems[3].classList.add("link-bg-style");
  }

  if(contactsTopVal === 0) {
    menuListItems.forEach(function(item) {
      item.classList.remove("link-bg-style");
    })
    menuListItems[4].classList.add("link-bg-style");
  }
});
