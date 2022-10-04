  document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format:"dd mmmm, yyyy",
        i18n:{done: "select"}
    });

    //select inialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

  });
  