// obiekt obslugujacy punkt
// autor Patryk Jar
// data 8 czerwca 2010 r.

WDP.point = function()
{
	var oTime = {},
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
			oTime = obj;
			return obj;
		}

		return oTime;
	}

	function fParseObjFromJSON() { }

	function fGenerateJSON() 
	{
		var c = '{"time":';
				c+= '{"time":' + oTime.time + ',';
				c+= '"minutes":' + oTime.minutes + ',';
				c+= '"seconds":' + oTime.seconds + ',';
				c+= '"hours":' + oTime.hours + ',';
				c+= '"month":' + oTime.month + ',';
				c+= '"year":' + oTime.year + ',';
				c+= '"timezoneOffset":' + oTime.timezoneOffset + ',';
				c+= '"day":' + oTime.day + ',';
				c+= '"date":' + oTime.date + '},';
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

WDP.time = function() {
	
	// TODO: jesli kiedys beda mozliwe do edycji - to pozostale pola 
	
	var nMinutes  = undefined,
		nSeconds  = undefined,
		nHours    = undefined,
		nMounth   = undefined,
		nYear     = undefined;
	
	function fIsSetter(val)
	{
		return (undefined != val);
	}

	function fMinutes( val )
	{
		if (fIsSetter(val))
		{
			nMinutes = val;
			return obj;
		}

		return nMinutes;
	}
	
	function fSeconds( val )
	{
		if (fIsSetter(val))
		{
			nSeconds = val;
			return obj;
		}

		return nSeconds;
	}
	
	function fHours( val )
	{
		if (fIsSetter(val))
		{
			nHours = val;
			return obj;
		}

		return nHours;
	}
	
	function fMonth( val )
	{
		if (fIsSetter(val))
		{
			nMounth = val;
			return obj;
		}

		return nMounth;
	}
	
	function fYear( val )
	{
		if (fIsSetter(val))
		{
			nYear = val;
			return obj;
		}

		return nYear;
	}

	var obj = {
		minutes : fMinutes;
		seconds : fSeconds,
		hours   : fHours,
		month   : fMonth,
		year    : fYear,
	};

	return obj;
};
