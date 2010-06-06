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

	function fEditRoute(data)
	{
		oEditor.create(data[0]);
	}

	function fStartEditing(self)
	{
		$('#' + self.id).pointEditor();
	}
	
	function fAddNewPoint(id, node)
	{
		oEditor.createAddEditor(id, node);
	}

	function fShowTimeEditor(node)
	{
		node.slideDown(1000);
	}

	return {
		insertListOfRoutes : fInsertListOfRoutes,
		clearListOfRoutes  : fClearListOfRoutes,
		editRoute          : fEditRoute,
		startEditing       : fStartEditing,
		addNewPoint        : fAddNewPoint,
		showTimeEditor    : fShowTimeEditor
	};
};
