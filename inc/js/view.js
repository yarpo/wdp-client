WDP.view = function()
{
	function fAddItemToList(item, list)
	{
		var id = 't_' + item.id;
		list = list || '#track-list .list';

		$('<li>').html('<input type="checkbox" id="' + id + 
			'"><label for="' + id + '"> ' + item.name + '</label> <span>[ <a class="edit" href="#edit_' + item.id + 
			'">edytuj</a> | <a class="del" href="#delete_' + item.id + 
			'">usuń</a> ]</span>').appendTo('#track-list .list');
	}

	function fInsertListOfRoutes(data)
	{
		var n = data.length;

		for(var i = n-1; i >= 0; i--)
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
		list.append('<li>' + item.altitude + ' | ' + item.latitude + ' | ' + item.longitude + '</li>');
	}

	function fEditRoute(data)
	{
		var container = $('#edit_container').html('');
		var route = data[0];
		var form = $('<form>').
			html(
				'<h4>' + route.name + '</h4>' +
				'<p>' + route.description + '</p>'
			).appendTo(container);
		var list = $('<ul class="editor-list">');

		var n = route.points.length;

		for (var i = 0; i < n; i++)
		{
			fAddItemToEditorList(route.points[i], list);
		}
		list.appendTo('#edit_container');
	}

	return {
		insertListOfRoutes : fInsertListOfRoutes,
		clearListOfRoutes  : fClearListOfRoutes,
		editRoute          : fEditRoute
	};
};
