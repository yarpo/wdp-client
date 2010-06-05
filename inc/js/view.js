WDP.view = function()
{
	var oEditor = WDP.editorView();

	function fAddItemToList(item, list)
	{
		var id = 't_' + item.id;
		list = list || '#track-list .list';

		$('<li>').html('<input type="checkbox" id="' + id + 
			'"><label for="' + id + '"> ' + item.name + 
			'</label> <span>[ <a class="edit" href="#edit_' + item.id + 
			'">edytuj</a> | <a class="del" href="#delete_' + item.id + 
			'">usuń</a> ]</span>').appendTo('#track-list .list');
		$('<div class="highslide-html-content" id="edit_'+ item.id +'"><div class="highslide-body"/></div>').appendTo('body');
	}

	function fInsertListOfRoutes(data)
	{
		var n = data.length;

		for(var i = 0; i < n; i++)
		{
			fAddItemToList(data[i]);
		}
	}

	function fClearListOfRoutes()
	{
		$('#track-list .list').html('');
	}

	function fAddItemToEditorList(item, list)
	{
		list.append('<tr><td>' + item.altitude + '</td><td>' + item.latitude + '</td><td>' + item.longitude + '</<td></tr>');
	}

	function fEditRoute(data)
	{
	/*	var container = $('#edit_container').html('');
		var route = data[0];
		var form = $('<form>').
			html(
				'<h4>' + route.name + '</h4>' +
				'<p>' + route.description + '</p>'
			).appendTo(container);
		var list = $('<table>');
		list.append('<tr><th>Wysokosc</th><th>szerokosc</th><th>dlugosc</th></tr>')

		var n = route.points.length;

		for (var i = 0; i < n; i++)
		{
			fAddItemToEditorList(route.points[i], list);
		}
		list.appendTo('#edit_container');
		*/
		oEditor.create(data[0]);
	}

	function fStartEditing

	return {
		insertListOfRoutes : fInsertListOfRoutes,
		clearListOfRoutes  : fClearListOfRoutes,
		editRoute          : fEditRoute,
		startEditing       : fStartEditing
	};
};
