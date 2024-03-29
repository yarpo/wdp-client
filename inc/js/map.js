WDP.map = function(dom_id, position, zoom)
{
	position = position || {};

	var DEFAULTS = {
		'lat' : 54.1341849,
		'lng' : 13.7671016,
		'zoom': 12
	};

	var oMap = null, 
		sDomId = dom_id,
		nDefLat = position.lat || DEFAULTS.lat,
		nDefLng = position.lng || DEFAULTS.lng,
		nZoom   = zoom || DEFAULTS.zoom,
		oRoutes = yVarsObj();

	fInit(sDomId);

	function fInit(id)
	{
		oMap = new GMap2(document.getElementById(id));
		fMoveToPoint(nDefLat, nDefLng, nZoom);
		oMap.setCenter(new GLatLng(nDefLat, nDefLng), nZoom);
		oMap.addMapType(G_SATELLITE_3D_MAP);
		oMap.addControl(new GHierarchicalMapTypeControl());
		oMap.addControl(new GLargeMapControl());
	}

	function fMoveToPoint(lat, lan, zoom)
	{
		oMap.setCenter(new GLatLng(lat, lan), zoom);
	}

	function fAddRoute(url)
	{
		var geoXml = new GGeoXml(url);
		oRoutes.add(url, geoXml);
		fDisplayAllTracks();
	}

	function fDisplayAllTracks()
	{
		var tracks = oRoutes.all();

		for(var url in tracks)
		{
			oMap.addOverlay(oRoutes.get(url)); 
		}
	}

	function fRemoveRoute(url)
	{
		if (oRoutes.exists(url))
		{
			var route = oRoutes.del(url);
			oMap.removeOverlay(route);
		}
	}

	function fSetCenterOnPoint( routeInfo )
	{
		var point = routeInfo.points[0];
		fMoveToPoint(point.latitude, point.longitude, nZoom)
	}

	return {
		initialize  : fInit,
		addRoute    : fAddRoute,
		removeRoute : fRemoveRoute,
		setCenterOnPoint : fSetCenterOnPoint
	};
};
