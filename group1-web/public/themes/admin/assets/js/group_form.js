var GroupComponent = function() {
	
	var rolesData = [
		{ all: '#account', 	element: '.account1' }, 
		{ all: '#customer', 	element: '.customer1' }, 
		{ all: '#station', 		element: '.station1' }, 
		{ all: '#document', 	element: '.document1' }, 
		{ all: '#asset', 	element: '.asset1' }, 
//		{ all: '#medicine', element: '.medicine1' }, 
//		{ all: '#farm', 	element: '.farm1' },
//		{ all: '#env', 		element: '.env1' },
//		{ all: '#cage',		element: '.cage1' },
//		{ all: '#report',	element: '.report1'}
	];
	
	var onCheckAllRole = (e) => {
		rolesData.forEach(role => {
			let elementTotal = $(role.element).length;
			let isChecked = 0;
			for (let i = 0; i < elementTotal; i++) {
				var element = $(role.element)[i];
				if ($(element).attr("checked") == 'checked') {
					isChecked++;
				}
			}
			if (elementTotal == isChecked) {
				$(role.all).prop("checked", true);
			} else {
				$(role.all).prop("checked", false);
			}
		});
		
		
		rolesData.forEach( role => {
			$(role.all).change(function() {
				if (this.checked) {
					$(role.element).each(function() {
						this.checked = true;
					});
				} else {
					$(role.element).each(function() {
						this.checked = false;
					});
				}
			});
			$(role.element).click(function() {
				if ($(this).is(":checked")) {
					var isCheckAll = 0;
					$(role.element).each(function() {
						if (!this.checked) {
							isCheckAll = 1;
						}
					});
					
					if (isCheckAll == 0)
						$(role.all).prop("checked", true);
				} else {
					$(role.all).prop("checked", false);
				}
			});
		});
	}
	
	return {
		init: function() {
			onCheckAllRole();
		}
	}
}();

document.addEventListener('DOMContentLoaded', function() {
	GroupComponent.init();
});