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
			//fAddItemToEditorList(route.points[iRouteIndex]);
			olistOfPoints.append('<li>' + fGenerateEditorCode('edit', route.points[iRouteIndex]) + '</li>');
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
	
	function fCreateInputText(name, value)
	{
		return '<input type="text" class="point" size="5" name="' + name + '" id="' + name + '" title="'+ value + '" value="' + Math.decimal(value, 3) + '" />';
	}
	
	function fCreateAddingEditor(id, node)
	{
		var mock = {altitude : 'nowy', latitude : 'nowy', longitude : '', time : {time:{}}};
		$('<li>' + fGenerateEditorCode('add', mock) + '</li>').insertAfter(node);
	}

	function fGenerateEditorCode(className, item)
	{
		var time = fSerializeTimeObject(item.time);

		var c = '<form class="' + className + '">';
				c += '<ul class="point-item">';
					c+= '<li>';
						c+= fCreateInputText('altitude_' + iRouteIndex, item.altitude);
					c+= '</li>';
					c+= '<li>';
						c+= fCreateInputText('latitude_' + iRouteIndex, item.latitude);
					c+= '</li>';
					c+= '<li>';
						c+= fCreateInputText('longitude_' + iRouteIndex, item.longitude);
					c+= '</li>';
					c+= '<li>';
						c+= '<input type="submit" class="update-point" value="zapisz" name="save_' + iRouteIndex + '">';
						c+= '<input type="button" class="add-point" value="+" name="add_' + iRouteIndex + '">';
						c+= '<input type="button" class="edit-time" value="więcej" name="time_' + iRouteIndex + '">';
						c+= '<span class="time">' + time + '</span>'
					c+= '</li>';
					c+= '<li class="time-settings">';
						c+= 'time' + fCreateInputText('time_' + iRouteIndex, item.time["time"]) + '<br />';
						c+= 'minutes' + fCreateInputText('time_' + iRouteIndex, item.time["minutes"]) + '<br />';
						c+= 'seconds' + fCreateInputText('time_' + iRouteIndex, item.time["seconds"]) + '<br />';
						c+= 'hours' + fCreateInputText('time_' + iRouteIndex, item.time["hours"]) + '<br />';
						c+= 'month' + fCreateInputText('time_' + iRouteIndex, item.time["month"]) + '<br />';
						c+= 'year' + fCreateInputText('time_' + iRouteIndex, item.time["year"]) + '<br />';
						c+= 'timezoneOffset' + fCreateInputText('time_' + iRouteIndex, item.time["timezoneOffset"]) + '<br />';
						c+= 'day' + fCreateInputText('time_' + iRouteIndex, item.time["day"]) + '<br />';
						c+= 'month' + fCreateInputText('time_' + iRouteIndex, item.time["month"]) + '<br />';
						c+= 'date' + fCreateInputText('time_' + iRouteIndex, item.time["date"]) + '<br />';
					c+= '</li>';
				c+= '</ul>';
			c += '</form>';

			console.log(c);
			return c;
	}

	return {
		create : fCreate,
		createAddEditor : fCreateAddingEditor
		
	};
};
