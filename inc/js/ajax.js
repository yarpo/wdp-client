var yVarsObj = function ()
{
	var CONST = {
		NAME : 0, VAL : 1, SELECTOR : 1
	};
	var oVars = {};
	function fGet(n)
	{
		return oVars[n];
	}
	function fDel(n)
	{
		var val = oVars[n];
		delete oVars[n];
		return val;
	}
	function fClear()
	{
		oVars = {};
	}
	function fKeyExists(n)
	{
		return ('undefined' === typeof oVars[n]) ? false : true;
	}
	function fAdd(n, v)
	{
		if ('undefined' === typeof n || 'undefined' === typeof v) {
			return false;
		}
		oVars[n] = v;
		return true;
}
	function fAll(o)
	{
		if ('object' === typeof o) {
			oVars = o;
		}
		return oVars;
	}
	function fAddBySelector(n, selector, html)
	{
		var res = false;
		if ('udefined' === typeof n || 'udefined' === typeof selector) {
		return false;
		}
		var $s = $(selector);
		var names = n.split(',');
		$s.each(function (i)
		{
			var val = $(this).val() || $(this).text();
			if (true === html) {
				val = $(this).html();
			}
			var index = names[i] || 'var_' + i + '_' + new Date();
			res = fAdd(index, val);
		});
		return res;
	}
	function fParamHandler()
	{
		var n = arguments.length;
		switch (n)
		{
			case 0:
				return fAll();
			case 1:
				return fGet(arguments[CONST.NAME]);
			case 2:
				return fAdd(arguments[CONST.NAME], arguments[CONST.VAL]);
		}
	}
	return {
		add : fAdd, get : fGet, del : fDel, clear : fClear, all : fAll, par : fParamHandler, exists : fKeyExists, 
		addFromDOM : fAddBySelector
	};
};

var yAjax = function ()
{
	var sMethod = 'POST', 
		sPath = '', 
		oParam = yVarsObj(), 
		bAsunc = false, 
		bCache = false, 
		sDataType = 'text';

	var fBefore = null, 
		fComplete = null, 
		fError = null, 
		fSuccess = null, 
		oResponse = null;

	function fMethod(m)
	{
		sMethod = (m) ? m.toUpperCase() : sMethod;
		return sMethod;
	}
	function fUrl(u)
	{
		sPath = u || sPath;
		return sPath;
	}
	function fDataType(d)
	{
		sDataType = d || sDataType;
		return sDataType;
	}
	function fSetSuccess(f)
	{
		fSuccess = f;
	}
		function fSetError(f)
	{
		fError = f;
	}
	function fSetComplete(f)
	{
		fComplete = f;
	}
	function fSetBefore(f)
	{
		fBefore = f;
	}
	function fSend()
	{
		oResponse = $.ajax(
		{
			async : bAsunc, 
			type : sMethod, 
			url : sPath, 
			cache : bCache, 
			data : oParam.par(), 
			dataType : sDataType, 
			success : fSuccess, 
			error : fError, 
			beforeSend : fBefore, 
			complete : fComplete
		});
		return oResponse;
	}
	function fResponse()
	{
		return oResponse;
	}
		function fReset()
	{
		sMethod = 'POST';
		sPath = '';
		oParam.clear();
		bAsunc = bCache = false;
		fBefore = fComplete = fError = fSuccess = oResponse = null;
		sDataType = 'text';
	}
	function fAsync(s)
	{
		if (false === s || true === s) {
			bAsunc = s;
		}
		return bAsunc;
	}
	return {
		data : oParam, method : fMethod, success : fSetSuccess, error : fSetError, before : fSetBefore, 
		complete : fSetComplete, url : fUrl, send : fSend, response : fResponse, reset : fReset, type : fDataType, 
		async : fAsync
	};
};
