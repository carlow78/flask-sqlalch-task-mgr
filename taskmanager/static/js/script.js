document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    //datepicker intialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n:{done: "Select"}
    });
    //select intialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    //collapsible initialization
 let collapsibles = document.querySelectorAll('.collapsible');
 M.Collapsible.init(collapsibles);

  });