
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

	function fTimestamp( sec )
	{
		if (fIsSetter(sec))
		{
			alert(sec)
			var date = new Date( sec );
			nYear = date.getFullYear();
			nMonth = date.getMonth();
			nDay = date.getDay();
			nHours = date.getHours();
			nMinutes = date.getMinutes();
			nSeconds = date.getSeconds();
			return obj;
		}
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
		timestamp : fTimestamp,
		getJSON : fGenerateJSON
	};

	return obj;
};
