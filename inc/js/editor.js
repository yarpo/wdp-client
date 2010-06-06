WDP.editorView = function()
{
	var iRouteIndex = 0,
		sContainer = '#edit_';
		oContainer = null,
		olistOfPoints = null,
		iRouteId = 0;

	function fCreate( route )
	{
		iRouteId = route.id;
		oContainer = $(sContainer + iRouteId).html('');
		$('<h4>' + route.name + '</h4>' +
				'<p>' + route.description + '</p><hr />'
			).appendTo(oContainer);

		olistOfPoints = $('<ul class="editor-list">');
		olistOfPoints.append('<li><ul class="point-item"><li>wysokość</li><li>szerokość</li><li>długość</li></ul></li>');

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
			('<li><form id="edit_route_'+ iRouteId +'" point="'+iRouteIndex+'"><ul class="point-item"><li>' + 
				fCreateInputText('altitude_' + iRouteIndex, item.altitude) + 
				'</li><li>' + 
				fCreateInputText('latitude_' + iRouteIndex, item.latitude) + 
				'</li><li>' + 
				fCreateInputText('longitude_' + iRouteIndex, item.longitude) + 
				'</li><li>' +
				'<input type="submit" name="save_' + iRouteIndex + 
				'" value="zapisz" class="save" />' + 
				'</li></ul></form></li>');
	}
	
	function fCreateInputText(name, value)
	{
		return '<input type="text" class="point" size="5" name="' + name + '" id="' + name + '" title="'+ value + '" value="' + Math.decimal(value, 3) + '" />';
	}

	return {
		create : fCreate
	};
};
