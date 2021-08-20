
const contextPath = getContext();
$('#exampleModalCenter').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget)

	$('#dynamic-table').html("");
	var id = button.data('asset_id');
	
//	console.log(id);
	
	$.ajax({
        type: "GET",
        url: contextPath +"/getAsset?id="+id,
        success: function(asset){
        	var myDate = new Date(asset.detail['imported_date'] );
        	console.log("date :"+asset.detail['imported_date']);
        	console.log("date raw :"+myDate);
        	var day  = myDate.getDate();
        	var month = myDate.getMonth()+1;
        	var year = myDate.getFullYear();
       		 $('#dynamic-table').append('<tr>'
                    +'<td >' + 'Tên thiết bị' + '</td>'
                    +'<td >' + asset.name + '</td>'
                    +'</tr>');
                     	$('#dynamic-table').append('<tr>'
                    +'<td >' + 'Mã thiết bị' + '</td>'
                    +'<td >' + asset.code + '</td>'
                    +'</tr>');
        	$('#dynamic-table').append('<tr>'
                    +'<td >' + 'Giá mua' + '</td>'
                    +'<td >' + asset.detail['price'] + '</td>'
                    +'</tr>');
        	$('#dynamic-table').append('<tr>'
                    +'<td >' + 'Giá bán' + '</td>'
                    +'<td >' + asset.detail['priceQuote'] + '</td>'
                    +'</tr>');
        	$('#dynamic-table').append('<tr>'
                    +'<td >' + 'Ngày nhập khẩu' + '</td>'
                    +'<td >' + day+'/'+month+'/'+year+ '</td>'
                    +'</tr>');
        	$('#dynamic-table').append('<tr>'
                    +'<td >' + 'Tỷ lệ khấu hao' + '</td>'
                    +'<td >' + asset.detail['depreciation_rate'] +' %' + '</td>'
                    +'</tr>');
        	$('#dynamic-table').append('<tr>'
                    +'<td >' + 'Chu kỳ khấu hao' + '</td>'
                    +'<td >' + asset.detail['depreciation_period'] +' năm' + '</td>'
                    +'</tr>');
        	$('#dynamic-table').append('<tr>'
                    +'<td >' + 'Thời gian bảo hành' + '</td>'
                    +'<td >' + asset.detail['guarantee'] +' năm' + '</td>'
                    +'</tr>');
           Object.keys(asset.detail).map(key=> {
        	   if(key != 'price' && key != 'priceQuote' && key != 'imported_date' && key !='depreciation_rate' && key != 'depreciation_period' && key != 'guarantee' ){
        		   $('#dynamic-table').append('<tr>'
                           +'<td >' + key + '</td>'
                           +'<td >' + asset.detail[key] + '</td>'
                           +'</tr>');
        	   }
        	  
           })
        },
    });
});

