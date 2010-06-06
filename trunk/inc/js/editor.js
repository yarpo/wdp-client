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

	function fSerializeTimeObject(time)
	{
		var s = '{';
		for (var x in time)
		{
			s += x + ':' +  time[x] + ',';
		}
		s = s.substr(0, s.length-1) + '}';
		return (s);
	}

	function fAddItemToEditorList(item)
	{
		var time = fSerializeTimeObject(item.time);
		olistOfPoints.
			append
			('<li><form id="edit_route_'+ iRouteId +'" class="edit" point="'+iRouteIndex+'"><ul class="point-item"><li>' + 
				fCreateInputText('altitude_' + iRouteIndex, item.altitude) + 
				'</li><li>' + 
				fCreateInputText('latitude_' + iRouteIndex, item.latitude) + 
				'</li><li>' + 
				fCreateInputText('longitude_' + iRouteIndex, item.longitude) + 
				'</li><li>' +
				'<input type="submit" name="save_' + iRouteIndex + 
				'" value="zapisz" class="save" />' + 
				'<input type="button" name="add_' + iRouteIndex + 
				'" value="+" class="add-point" /><span class="time">' + time + '</span>' +
				'</li></ul></form></li>');
	}
	
	function fCreateInputText(name, value)
	{
		return '<input type="text" class="point" size="5" name="' + name + '" id="' + name + '" title="'+ value + '" value="' + Math.decimal(value, 3) + '" />';
	}
	
	function fCreateAddingEditor(id, node)
	{
		$('<li><form style="background : red" class="add" id="add_route_'+id+'">' +
			'<ul class="point-item"><li><input type="text" value="nowy" title="46.029" id="altitude_5" name="altitude_5" size="5" class="point"></li><li><input type="text" value="nowy" title="41.98" id="latitude_5" name="latitude_5" size="5" class="point"></li><li><input type="text" value="nowy" title="-71.12" id="longitude_5" name="longitude_5" size="5" class="point"></li><li><input type="submit" class="save" value="zapisz" name="save_5"><input type="button" class="add-point" value="+" name="add_5"><span class="time">{time:0,minutes:0,seconds:0,hours:1,month:0,year:70,timezoneOffset:-60,day:4,date:1}</span></li></ul><hr />Tu jeszcze time</form></li>').insertAfter(node);
	}

	return {
		create : fCreate,
		createAddEditor : fCreateAddingEditor
		
	};
};
