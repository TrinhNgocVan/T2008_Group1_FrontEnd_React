/* ------------------------------------------------------------------------------
 *
 *  # Custom JS code
 *
 *  Place here all your custom js. Make sure it's loaded after app.js
 *
 * ---------------------------------------------------------------------------- */
$(function() {
	var currentMenu = $("#currentMenu").val();
    $("li.nav-item a[menu = '" + currentMenu + "']").addClass('active').closest("li.nav-item-submenu").addClass("nav-item-expanded").find("a.sub-menu-title").addClass('active');
    
});

function readOnly(locked){
	if(locked === true) {
		$('input').attr("readonly", "true");
		$('textarea').attr("readonly", "true");
		$('select').attr("disabled", "true");
	}
}

$.fn.clearForm = function() {
  return this.each(function() {
    var type = this.type, tag = this.tagName.toLowerCase();
    if (tag == 'form')
      return $(':input',this).clearForm();
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = '';
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    else if (tag == 'select')
      this.selectedIndex = -1;
  });
};