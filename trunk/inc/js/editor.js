WDP.editorView = function()
{
	var iRouteIndex = 0,
		sContainer = '#edit_';
		oContainer = null,
		olistOfPoints = null,
		nRouteId = 0;

	function fCreate( route )
	{
		nRouteId = route.id;
		oContainer = $(sContainer + nRouteId).html('');
		$('<form>').
			html(
				'<h4>' + route.name + '</h4>' +
				'<p>' + route.description + '</p><hr />'
			).appendTo(oContainer);

		olistOfPoints = $('<table>');
		olistOfPoints.append('<tr><th>Wysokosc</th><th>szerokosc</th><th>dlugosc</th><th/></tr>')

		var n = route.points.length;

		for (iRouteIndex = 0; iRouteIndex < n; iRouteIndex++)
		{
			fAddItemToEditorList(route.points[iRouteIndex]);
		}
		olistOfPoints.appendTo(oContainer);
	}

	function fAddItemToEditorList(item)
	{
		olistOfPoints.
			append
			('<tr><td>' + 
				fCreateInputText('altitude_' + iRouteIndex, item.altitude) + 
				'</td><td>' + 
				fCreateInputText('latitude_' + iRouteIndex, item.latitude) + 
				'</td><td>' + 
				fCreateInputText('longitude_' + iRouteIndex, item.longitude) + 
				'</<td><td><input type="button" name="save_' + iRouteIndex + '" style="display: none;" onclick="alert(/zapisuje/)" />' + 
				'</<td></tr>');
	}
	
	function fCreateInputText(name, value)
	{
		return '<input type="text" class="point" size="5" name="' + name + '" id="' + name + '" title="'+ value + '" value="' + Math.decimal(value, 3) + '" />';
	}

	return {
		create : fCreate
	};
};
