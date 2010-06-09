// obiekt odpowiedzialny za obsluge wykresow
// autor Patryk Jar
// data 9 czerwca 2010 r.

WDP.chart = function()
{
	var sId        = 'graph',
		sChartType = 'line';

	function fIsSetter(val)
	{
		return (undefined != val);
	}

	function fChartType( val )
	{
		if (fIsSetter(val))
		{
			sChartType = val;
			return obj;
		}

		return sChartType;
	}

	function fDisplay( data )
	{
		var myChart = new JSChart(sId, sChartType);
		myChart.setDataArray(data);
		myChart.draw();
	}

	function fUseNode( val )
	{
		if (fIsSetter(val))
		{
			sId = val;
			return obj;
		}

		return sId;
	}

	function fLine()
	{
		return fChartType('line');
	}

	function fPie()
	{
		return fChartType('pie');
	}

	var obj = {
		display   : fDisplay,
		chartType : fChartType,
		useNode   : fUseNode,
		line      : fLine,
		pie       : fPie
	};

	return obj;
};
