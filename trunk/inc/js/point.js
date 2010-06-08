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
			oTime.minutes(obj.minutes)
				.seconds(obj.seconds)
				.hours(obj.hours)
				.month(obj.month)
				.year(obj.year);
			return obj;
		}

		return oTime;
	}

	function fParseObjFromJSON() { }

	function fGenerateJSON() 
	{
		var c = '{';
			c+= '"time":' + oTime.timestamp() + ',';
			c+= '"time":' + oTime.getJSON() + ',';
			c+= '"speed":' + nSpeed + ',';
			c+= '"altitude":' + nAlt + ',';
			c+= '"longitude":' + nLng + ',';
			c+= '"latitude":' + nLat;
			c+= '}';
		return c;
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

	return obj;
};

