// obiekt obslugujacy punkt
// autor Patryk Jar
// data 8 czerwca 2010 r.

WDP.point = function()
{
	var oTime = WDP.time(),
		nSpeed = undefined,
		nAlt = undefined,
		nLng = undefined,
		nLat = undefined;

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
			oTime = obj
			return obj;
		}

		return oTime;
	}

	function fGenerateJSON() 
	{
		var c = '{';
			c+= '"timestamp":' + oTime.timestamp() + ',';
			c+= '"altitude":'  + (nAlt || 0) + ',';
			c+= '"longitude":' + (nLng || 0) + ',';
			c+= '"latitude":'  + (nLat || 0);
			c+= '}';
		return c;
	}

	var obj = {
		altitude  : fAltitude,
		longitude : fLongitude,
		latitude  : fLatitude,
		speed     : fSpeed,
		time      : fTime,
		getJSON   : fGenerateJSON
	};

	return obj;
};

