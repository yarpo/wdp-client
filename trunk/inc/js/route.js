// konstruktor obiektu route
// odpowiada za obsluge zadan zwiazanych z trasami
// autor: Patryk yarpo Jar
// data : 29 maja 2010 r.

var route = function(id, description, name, points)
{
	var nId = id || -1,
		sDescription = description || '',
		sName = name || '',
		aPoints = points || [];

	function fAddPoint(point)
	{
		aPoints.push(point);
	}

	function fId(id)
	{
		nId = id || nId;
		return nId;
	}

	function fDescription(desc)
	{
		sDescription = desc || sDescription;
		return sDescription;
	}

	function fName(name)
	{
		sName = name || sName;
		return sName;
	}

	function fPoints(points)
	{
		aPoints = points || aPonits;
		return aPoints;
	}

	return {
		addPoint : fAddPoint,
		id       : fId,
		name     : fName,
		description : fDescription,
		points   : fPoints
	};
};
