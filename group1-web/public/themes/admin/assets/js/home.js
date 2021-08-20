/**
 * 
 */
 const contextPath = getContext();
 $(document).ready(function(){
	$.ajax({
       type: "GET",
       url: contextPath+"/api/StatisticalData",
       success: function(data){ 
      		showStaticData(data);	
       },
   });
})
// show static data
	function showStaticData(data){
		$("#customerTotalQuantity").text(data.customerTotalQuantity);
		$("#customerActiveQuantity").text(data.customerActiveQuantity);
		$("#customerInactiveQuantity").text(data.customerInactiveQuantity);
		$("#stationTotalQuantity").text(data.stationTotalQuantity);
		$("#stationActiveQuantity").text(data.stationActiveQuantity);
		$("#stationInactiveQuantity").text(data.stationInactiveQuantity);
		$("#assetTotalQuantity").text(data.assetTotalQuantity);
		$("#assetActiveQuantity").text(data.assetActiveQuantity);
		$("#assetAvailableQuantity").text(data.assetAvailableQuantity);
		$("#assetLiquidationQuantity").text(data.assetLiquidationQuantity);
		$("#assetSoldQuantity").text(data.assetSoldQuantity);
	};
