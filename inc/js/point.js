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
			c+= '"time":';
				c+= oTime.getJSON() + ',';
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

WDP.time = function() 
{
	var nMinutes  = undefined,
		nSeconds  = undefined,
		nHours    = undefined,
		nDay      = undefined,
		nMonth    = undefined,
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
	
	function fDay( val )
	{
		if (fIsSetter(val))
		{
			nDay = val;
			return obj;
		}
		return nDay;
	}
	
	function fMonth( val )
	{
		if (fIsSetter(val))
		{
			nMonth = val;
			return obj;
		}
		return nMonth;
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

	function fTimestamp()
	{
		return (new Date(nYear, nMonth, nDay, nHours, nMinutes, nSeconds)).getTime();
	}

	function fGenerateJSON() 
	{
		var c= '{';
			c+= '"time":' + fTimestamp() + ',';
			c+= '"minutes":' + nMinutes + ',';
			c+= '"seconds":' + nSeconds + ',';
			c+= '"hours":' + nHours + ',';
			c+= '"day":' + nDay + ',';
			c+= '"month":' + nMonth + ',';
			c+= '"year":' + nYear;
			c+= '}';
		return c;
	}

	var obj = {
		minutes : fMinutes,
		seconds : fSeconds,
		hours   : fHours,
		day     : fDay,
		month   : fMonth,
		year    : fYear,
		getJSON : fGenerateJSON
	};

	return obj;
};
