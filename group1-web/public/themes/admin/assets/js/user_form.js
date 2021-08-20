'use strict';
var roles = [
	{  all : '#system', 	element : '.system'			},
	{ all : '#account', 	element : '.account'		},
	{ all : '#group1', 		element : '.group1'			},
	{ all : '#catalogMenu',	element : '.catalogMenu'	},
	{ all : '#catalogCO', 	element : '.catalogCO'		},
	{ all : '#catalogKDS',	element : '.catalogKDS'		},
	{ all : '#catalogParam',element : '.catalogParam'	},
	{ all : '#reCate',		element : '.reCate'			},
	{ all : '#reCu',		element : '.reCu'			},
	{ all : '#reFood',		element : '.reFood'			},
	{ all : '#reModiGroup',	element : '.reModiGroup'	},
	{ all : '#reModiScheme',element : '.reModiScheme'	},
	{ all : '#reModiDetail',element : '.reModiDetail'	},
	{ all : '#reModifier',	element : '.reModifier'		},
	{ all : '#reOrderCate', element : '.reOrderCate'	},
	{ all : '#reOrderType', element : '.reOrderType'	},
	{ all : '#reOrderVoid', element : '.reOrderVoid'	},
	{ all : '#reCuRate',	element : '.reCuRate'		},
	{ all : '#reHall',		element : '.reHall'			},
	{ all : '#reTable',		element : '.reTable'		},
	{ all : '#reGuest',		element : '.reGuest'		},
	{ all : '#reEmp',		element : '.reEmp'			},
	{ all : '#groupType',	element : '.groupType'		},
	{ all : '#feature',		element : '.feature'		},
	{ all : '#res',			element : '.res'			},
	{ all : '#reHall',		element : '.reHall'			}
];
var CheckAll = {
		loads: () => {
			roles.forEach(item => {
				let elementTotal = $(item.element).length;
				let isChecked = 0;
				for (let i = 0 ; i< $(item.element).length; i++) {
					var ele = $(item.element)[i];
					if ($(ele).attr("disabled") == "disabled") {
						isChecked +=1;
					}
				}
				if (elementTotal == isChecked) {
					$(item.all).prop("checked", true);
					$(item.all).prop("disabled", true);
				}
			});
		},
		
}
var UserComponent = function() {
	
	var contextPath = getContext();
	
	var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.js is not loaded.');
            return;
        }
        $('.multiselect-select-all-filtering').multiselect({
	         includeSelectAllOption: true,
	         enableFiltering: true,
	         enableCaseInsensitiveFiltering: true
	     });

    	// select2
   	 	$('.select2').select2();
   	 	
   	 	// Reacting to external value changes
        $('.select-access-multiple-value').select2();
        $('.change-to-ca').on('click', function() { $('.select-access-multiple-value').val('CA').trigger('change'); });
        $('.change-to-ak-co').on('click', function() { $('.select-access-multiple-value').val(['AK','CO']).trigger('change'); });

	};
	
	var _componentMultiselect = function() {
		if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }
		// Select All and Filtering features
        $('.multiselect-select-all-filtering').multiselect({
            includeSelectAllOption: true,
            enableFiltering: true,
            enableCaseInsensitiveFiltering: true
        });
	};
	var _componentFancytree = function() {
		  if (!$().fancytree) {
	            console.warn('Warning - fancytree_all.min.js is not loaded.');
	            return;
	      }
	  };

	  
    //
	// get role 
	 var getRoleGroup = function(){
		 $('#groupIds').on('change',function(){
        	var itemSelected = $("#groupIds option:selected").val();
        	$('input[type=checkbox]:disabled').prop('checked', false);
        	$('input[type=checkbox]').removeAttr('disabled');	
    		if(itemSelected != null && itemSelected != ''){
    			$.ajax({
    				url: contextPath + '/user/get-roles',
    				contextType: 'application/json',
    				method: 'GET',
    				data: {
    					itemSelected : itemSelected
    				},
    				success: function(data) {
    					data.forEach((item) => {
    						var roleid = "#role" + item.id;
    						$(roleid).prop("checked", true);
    						$(roleid).prop("disabled", true);
    						CheckAll.loads();
    					});
    				},
    				error: function(err) {
    					console.log(err);
    				}
    			});
    		}else{
    		} 
		 });
	 };
	 
	 const selectBoxFarmID = 		document.getElementById('farmIds');
	 const selectBoxGroupID = 		document.getElementById('groupIds');
	 const selectBoxGroupCageID = 	document.getElementById('groupCageIds');
	 const btnAddGroupCage = 		document.getElementById('btn-add-groupCage');
	 	 
	 var initHandleForTabUserAuth = function () {
		 $('#btn-add-groupCage').css('cursor', 'no-drop');
		 $("#btn-add-groupCage").on('click', function () {
			 const groupValue = 	selectBoxGroupID.value;
			 const farmValue = 		selectBoxFarmID.value;
			 const groupCageValue = selectBoxGroupCageID.value;
			 
			 if (groupValue != '' && farmValue != '' && groupCageValue != '') {
				 const farmName = selectBoxFarmID.options[selectBoxFarmID.selectedIndex].text;
				 const groupCageName = selectBoxGroupCageID.options[selectBoxGroupCageID.selectedIndex].text;
				 var idSpecial = farmValue + "_" + groupCageValue;
				 var check = document.getElementById('row-farmCode-' + idSpecial);
				 const groupCageObj = document.getElementById('groupCageData');
				 if (check != undefined) {
					 alert('\u0110\u00e3 \u0074\u1ed3\u006e \u0074\u1ea1\u0069 \u006e\u0068\u00f3\u006d \u006c\u1ed3\u006e\u0067 \u0074\u0072\u006f\u006e\u0067 \u0064\u0061\u006e\u0068 \u0073\u00e1\u0063\u0068 \u0071\u0075\u1ea3\u006e \u006c\u00fd\u002e')
				 } else {
					 if ( groupCageObj != undefined && groupCageObj != '') {
						 var obj = [ groupCageObj.value ];
						 var newObj = [];
						 if (obj[0] !== "") {
							 newObj = obj[0].split(",");
						 }
						 newObj.push(parseInt(groupCageValue))
						 groupCageObj.value = [newObj];
					 } else {
						 var newObj = [groupCageValue];
						 groupCageObj.value = JSON.parse(newObj);
					 }
					 $('#notFoundData-groupCage').remove();
					 
					 $('#groupCage-body').append(`
						 <tr id="row-farmCode-`+ idSpecial +`">
						 	<td>` + farmValue + `</td>
						 	<td>` + farmName + `</td>
						 	<td>` + groupCageName + `</td>
						 	<td>
						 		<button type="button" class="btn btn-dange btn-remove" onclick="` + userComponent.handleRemoveRow(idSpecial) + `"><i class="icon-cross2"></i></button>
						 	</td>
						 </tr>`)
				 }
			 }
		 });
	 };
	 
	 var handleRemoveRow = function (index) {
		 const groupCageObj = document.getElementById('groupCageData');
		 const rowRemove = document.getElementById('row-farmCode-' + index);
//		 if (groupCageObj != undefined && groupCageObj != '') {
//			 
//		 }
		 if (rowRemove != undefined) {
			 $('#' + rowRemove).remove();
		 }
	 }
	 
	 var handleCheckDisableButtonAdd = function () {
		 $('#groupIds, #farmIds, #groupCageIds').on('change', function(e) {
			 const groupValue = 	selectBoxGroupID.value;
			 const farmValue = 		selectBoxFarmID.value;
			 const groupCageValue = selectBoxGroupCageID.value;
			 
			 if (groupValue != '' && farmValue != '' && groupCageValue != '') {
				 $('#btn-add-groupCage').removeAttr('disabled');
				 $('#btn-add-groupCage').css('cursor', 'pointer');
			 } else {
				 $('#btn-add-groupCage').css('cursor', 'no-drop');
				 btnAddGroupCage.disabled = 'disabled';
			 }
		 })
	 };
	 
	 var getGroupCageWithFic = function () {
		 $("#farmIds").on("change", function () {
			 const farmValue = 		selectBoxFarmID.value;
			 
			 if (farmValue != undefined && farmValue != '') {
				 $.ajax({
					 url: contextPath + '/groupCage/list?fic=' + farmValue,
					 contextType: 'application/json',
					 method: 'GET',
					 data: {},
					 success: function (data) {
						 var option = '<option></option>';
						 if (data != null && data != '') {
							 data.forEach((item, key) => {
								 option += '<option value="'+ item.id +'">'+ item.name +'</option>';
							 });
							 $("#groupCageIds").html(option);
						 } else {
							 $("#groupCageIds").html('<option></option>');
							 $('#btn-add-groupCage').css('cursor', 'no-drop');
							 btnAddGroupCage.disabled = 'disabled';
						 }
					 }, 
					 error: function (err) {
						 $("#groupCageIds").html('<option></option>');
						 console.log("error:", err)
					 }
				 });
			 }
		})
		 
	 };
	 
	 
	  
    // Return objects assigned to module
    //
    return {
        init: function() {
        	_componentSelect2 ();
        	_componentMultiselect();
        	_componentFancytree();
        	getRoleGroup();
        	initHandleForTabUserAuth();
        	handleCheckDisableButtonAdd();
        	getGroupCageWithFic();
        }
    }
}();



var UserForm = {
	check: (path, Id) => {
		if (Id) {
			location.href = path + "?Id=" + Id;
		} else {
            bootbox.alert({
            	title: 'Thông báo:',
                message: 'Thông tin User chưa được tạo !'
            });
		}
	},
}


//load Role
var Role = {
		loads: () => {
			var contextPath = getContext();
        	var itemSelected = $("#groupIds option:selected").val();
    		if(itemSelected != null && itemSelected != ''){
    			$.ajax({
    				url: contextPath + '/user/get-roles',
    				contextType: 'application/json',
    				method: 'GET',
    				data: {
    					itemSelected : itemSelected
    				},
    				success: function(data) {
    					data.forEach((item) => {
    						var roleid = "#role" + item.id;
    						$(roleid).prop("checked", true);
    						$(roleid).prop("disabled", true);
    						CheckAll.loads();
    					});
    				},
    				error: function(err) {
    					console.log(err);
    				}
    			});
    		}else{
    		} 
		},
		
	}
// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
	UserComponent.init();
	Role.loads();
});
