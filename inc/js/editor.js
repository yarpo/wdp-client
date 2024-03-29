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
		iRouteIndex = route.start;
		for (var i = 0; i < n; i++)
		{
			olistOfPoints.append('<li>' + fGenerateEditorCode('edit', route.points[i]) + '</li>');
			iRouteIndex++;
		}
		olistOfPoints.appendTo(oContainer);
	}

	function fCreateInputText(name, value)
	{
		return '<input type="text" class="point" size="5" name="' + name + '" id="' + name + '" title="'+ value + '" value="' + Math.decimal(value, 3) + '" />';
	}

	function fCreateAddingEditor(id, node)
	{
		iRouteIndex = id;
		var mock = {altitude : 0, latitude : 0, longitude : 0, timestamp : (new Date()).getTime()};
		$('<li>' + fGenerateEditorCode('add', mock) + '</li>').insertAfter(node);
	}

	function fGenerateEditorCode(className, item)
	{
		var oTime = WDP.time();
		oTime.timestamp(item.timestamp);

		var c = '<form class="' + className + '"  id="'+ className +'_' + iRouteId + '">';
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
						c+= '<input type="submit" class="submit-point" value="zapisz" name="'+ className +'_' + iRouteIndex + '" id="'+ className +'_' + iRouteIndex + '" />';
						c+= '<input type="button" class="add-new-point" value="+" name="add_' + iRouteIndex + '" id="add_' + iRouteIndex + '" />';
						c+= '<input type="button" class="edit-time" value="więcej" name="time_' + iRouteIndex + '" id="time_' + iRouteIndex + '" />';
						c+= '<input type="button" class="delete-point" value="-" name="del_' + iRouteIndex + '" id="del_' + iRouteIndex + '" />';
					c+= '</li>';
					c+= '<li class="time-settings">';
						c+= '<table class="time"><tr>';
							c+= '<td class="date">';
							c+= 'data: <input name="date_'+iRouteIndex+'" type="text" class="datepicker" value="' + fGenerateFormattedDate(oTime) + '" /></td>';
							c+= '<td class="hour">';
							c+= 'godzina: ' + fGenerateSelect('hours_'+iRouteIndex, 0, 23, oTime.hours());
							c+= fGenerateSelect('minutes_'+iRouteIndex, 0, 59, oTime.minutes());
							c+= fGenerateSelect('seconds_'+iRouteIndex, 0, 59, oTime.seconds());
							c+= '</td></tr></table>';
					c+= '</li>';
				c+= '</ul>';
			c += '</form>';

			return c;
	}

	function fGenerateSelect(name, start, stop, selected)
	{
		var c = '<select name="'+ name +'" id="'+ name +'">';
		for(var i = start; i <= stop; i++)
		{
			c+= '<option value="'+i+'"';
			if (selected == i)
			{
				c+= ' selected="selected" ';
			}
			c+= ' >' + i + '</option>';
		}
		c+= '</select>';

		return c;
	}

	function fGenerateFormattedDate(t)
	{
		var date = new Date();
		var d  = date.getDate();
		var m = date.getMonth() + 1;
		var y = date.getFullYear();

		return (t.day() || d) + '/' + (t.month() || m) + '/' + (t.year() || y);
	}

	return {
		create : fCreate,
		createAddEditor : fCreateAddingEditor
		
	};
};
