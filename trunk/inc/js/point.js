// obiekt obslugujacy punkt

alert("dziala")

var point = function()
{
	var oTime = null,
		nSpeed = 0,
		nAlt = 0,
		nLng = 0,
		nLat = 0;

	

	function fParseObjFromJSON() {}

	function fGenerateJSON() {}

	function fIsSetter(val)
	{
		return (undefined != val);
	}

	function fSpeed( val )
	{
		if (fIsSetter(val))
		{
			nSpeed = val;
			return obj;
		}

		return nSpeed;
	}

	function fAltitude( val )
	{
		if (fIsSetter(val))
		{
			nAlt = val;
			return obj;
		}

		return nAlt;
	}

	function fLongitude( val )
	{
		if (fIsSetter(val))
		{
			nLng = val;
			return obj;
		}

		return nLng;
	}

	function fLatitude( val )
	{
		if (fIsSetter(val))
		{
			nLat = val;
			return obj;
		}

		return nLat;
	}
	
	function fTime( obj )
	{
		if (fIsSetter(obj))
		{
			oTime = obj;
			return obj;
		}

		return oTime;
	}

	var obj = {
		altitude  : fAltitude,
		longitude : fLongitude,
		latitude  : fLatitude,
		speed     : fSpeed,
		time      : fTime,
		getJSON   : fGenerateJSON,
		parseJSON : fParseObjFromJSON
	};

	//alert(obj.altitude)

	return {
		altitude  : fAltitude,
		longitude : fLongitude,
		latitude  : fLatitude,
		speed     : fSpeed,
		time      : fTime,
		getJSON   : fGenerateJSON,
		parseJSON : fParseObjFromJSON
	};
};

alert(point.altitude)
/*
	var
	{
		"time":
			{
				"time":0,
				"minutes":0,
				"seconds":0,
				"hours":1,
				"month":0,
				"year":70,
				"timezoneOffset":-60,
				"day":4,
				"date":1
			},
		"speed":-1,
		"altitude":0.47,
		"longitude":-71.108,
		"latitude":42.431
	}

WDP.point.time = function() {
		"time"    : 0,
		"minutes" : 0,
		"seconds" : 0,
		"hours"   : 1,
		"month"   : 0,
		"year"    : 70,
		"timezoneOffset" : -60,
		"day"     : 4,
		"date"    : 1
	};
*/
