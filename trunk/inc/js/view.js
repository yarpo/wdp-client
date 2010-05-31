WDP.view = function()
{
	function fAddItemToList(item, list)
	{
alert('jestem tu');
		
		var id = 't_' + item.id;
		list = list || '#track-list .list';

		$('<li>').html('<input type="checkbox" id="' + id + 
			'"><label for="' + id + '"> ' + item.name + '</label> <span>[ <a class="edit" href="#edit_' + item.id + 
			'" onclick="return aaa(this)">edytuj</a> | <a class="del" href="#delete_' + item.id + 
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

	return {
		insertListOfRoutes : fInsertListOfRoutes,
		clearListOfRoutes  : fClearListOfRoutes
	};
};
