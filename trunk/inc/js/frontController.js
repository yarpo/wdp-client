

$(document).ready(
	function()
	{
		var controller = fronController();

		controller.initialize_onload();

		$("#tracks").tabs();
		$("#charts").tabs();
		$('#track-list input:checkbox').change(controller.tracklist_checkbox_change);
		$('#track-list a.del').click(controller.tracklist_item_delete);
		$('#track-list a.edit').click(controller.tracklist_item_edit);

	}
);

var fronController = function()
{
	var URL = 'http://yarpo.republika.pl/studia/wdp/kml/';

	var oMap = null,
		oView = null,
		oDataSrc = null;

	function fTrackListCheckboxChanged()
	{
		if (this.checked)
		{
			fShowTrack(this);
		}
		else
		{
			fHideTrack(this);
		}
	}

	function fGetIdFromAttr(attr)
	{
		var arr = attr.toString().split('_');
		var n = arr.length;
		return arr[n-1];
	}

	function fHideTrack(self)
	{
		var id = fGetIdFromAttr(self.id);
		var url = fCreateUrlFromId(id);
		oMap.removeRoute(url);
	}

	function fCreateUrlFromId(id)
	{
		var url = URL + 'file_' + id + '.kml';
		return url;
	}

	function fShowTrack(self)
	{
		var id = fGetIdFromAttr(self.id);
		// to powinno byc wywolane
		//oDataSrc.getRouteById(id);
		var url = fCreateUrlFromId(id);
		alert('bede odczytywal stad '+ url);
		oMap.addRoute(url);
	}

	function fInitializeOnload()
	{
		oMap = WDP.map('map3d');
		window.onunload = GUnload
		oView = WDP.view();
		oDataSrc = WDP.dataSrc();
		oDataSrc.getAllRoutes(oView.insertListOfRoutes);
	}

	function fTrackListItemDelete()
	{
		var id = fGetIdFromAttr(this);
		var url = fCreateUrlFromId(id);
		oMap.removeRoute(url)
		oDataSrc.deleteRoute(id);
		oView.clearListOfRoutes();
		oDataSrc.getAllRoutes(oView.insertListOfRoutes);
	}

	function fTrackListItemEdit(self)
	{
		var id = fGetIdFromAttr(this);
		//oDataSrc.getRouteById(id, 
		oView.editor({"id":2,"description":"","name":"Position 1 to Position 396","points":[12,12,12]});
		return hs.htmlExpand(this, { headingText: 'Lorem ipsum', maincontentId: 'edit_container' });
	}

	return {
		tracklist_checkbox_change : fTrackListCheckboxChanged,
		initialize_onload         : fInitializeOnload,
		tracklist_item_delete     : fTrackListItemDelete,
		tracklist_item_edit       : fTrackListItemEdit
	};
};
