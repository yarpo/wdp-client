// obiekt pozwalajacy pobierac dane z webservice'ow
// autor: Patryk Jar
// data: 31 maja 2010 r.
// uses: yAjax, jQuery

WDP.dataSrc = function() 
{
	function ajaxCreator(url, responseType, fSuccess, fError)
	{
		var oAjax = yAjax();
		oAjax.url(url);
		oAjax.type(responseType);
		oAjax.success(fSuccess);
		oAjax.error(fError);

		return oAjax;
	}

	function fGetAllRoutes(funcSuccess, funcError)
	{
		var oAjax = ajaxCreator('Tasks/daoRpc.do?function=getAllRoutes',
			'json', funcSuccess, funcError);

		oAjax.send();

		return oAjax.response();
	}

	function fGetUrlFromXML(xml)
	{
		var n = xml.length;
		var url = xml.substr(9, n-21);
		return url;
	}

	function fGetRouteById(id, funcSuccess, funcError)
	{
		alert('no to probujemy')
		//var oAjax = ajaxCreator('Tasks/getKml.do?id=' + 1 + '&ftp=ftp://wdp2010:wdp2010@www.ftpwt.com/file_' + 0 + '.kml',
		//	'text', function() {alert('ok') }, funcError);
		var oAjax = ajaxCreator('Tasks/getKml.do?id=' + 1 + '&ftp=ftp://yarpo:saturn1987r@ftp.republika.pl/studia/wdp/kml/file_' + 0 + '.kml',
			'text', function() {alert('ok') }, funcError);
		

		oAjax.send();
		return 'http://yarpo.republika.pl/studia/wdp/kml/file_0.kml';
	}

	function fGetChart(id, type, fSuccess, fError)
	{
		var url = 'Tasks/getChart.do?id=' + id + '&type=' + type,
			oAjax = ajaxCreator(url, 'xml', fSuccess, fError);
		oAjax.send();

		return oAjax.response(); 
	}

	function fSaveRoute(route, fSuccess, fError)
	{
		var oAjax = ajaxCreator('Tasks/daoRpc.do?function=saveRoute&args=[' + route + ']',
			'json', fSuccess, fError);
		oAjax.send();

		return oAjax.response();
	}

	function fDeleteRoute(routeId, fSuccess, fError)
	{
		var oAjax = ajaxCreator('Tasks/daoRpc.do?function=deleteRoute&args=[' + routeId + ']',
			'json', fSuccess, fError);

		oAjax.send();

		return oAjax.response();
	}

	function fUpdateRoute(route, routeId, fSuccess, fError)
	{
		var oAjax = ajaxCreator('Tasks/daoRpc.do?function=deleteRoute&args=[' + routeId + ']',
			'json', fSuccess, fError);
		oAjax.send();

		return oAjax.response();
	}

	function fAddPoint(routeId, pointId, point, fSuccess, fError)
	{
		var oAjax = ajaxCreator('Tasks/daoRpc.do?function=deleteRoute&args=[' + routeId + ']',
			'json', fSuccess, fError);
		oAjax.send();

		return oAjax.response();
	}

	function fDeletePoint(routeId, pointId, fSuccess, fError)
	{
		var oAjax = ajaxCreator('Tasks/daoRpc.do?function=deletePoint&args=[' + routeId + ', ' + pointId + ']',
			'json', fSuccess, fError);
		oAjax.send();

		return oAjax.response();
	}

	function fUpdatePoint(routeId, pointId, point, fSuccess, fError)
	{
		var oAjax = ajaxCreator('Tasks/daoRpc.do?function=updatePoint&args=[' + routeId + ', ' + pointId + ', {}]',
			'json', fSuccess, fError);
		oAjax.send();

		return oAjax.response();
	}

	return {
		getRouteById : fGetRouteById,
		saveRoute    : fSaveRoute,
		deleteRoute  : fDeleteRoute,
		updateRoute  : fUpdateRoute,
		getAllRoutes : fGetAllRoutes,
		addPoint     : fAddPoint,
		deletePoint  : fDeletePoint,
		updatePoint  : fUpdatePoint
	};
};
