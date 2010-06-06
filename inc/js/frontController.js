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
		$('.highslide-html-content .point').live('click', controller.route_point_edit);
		$('.highslide-html-content .add-point').live('click', controller.route_add_point);
		$('.highslide-html-content .edit-time').live('click', controller.show_points_time_editor);
		$('.highslide-html-content form.edit').live('submit', controller.route_point_save);
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
		var a = oDataSrc.getKMLRouteById(id);
		var url = fCreateUrlFromId(id);
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
		oDataSrc.getJSONRouteById(id, oView.editRoute);
		return hs.htmlExpand(this, { headingText: 'Edytuj trasę ' + id, maincontentId: 'edit_' + id });
	}

	function fRoutePointEdit(event, self)
	{
		oView.startEditing(this);
	}

	function fRouteSaveEditedPoint(event)
	{
		var obj = $(this);
		var routeId = fGetIdFromAttr(this.id);
		var pointId = fGetIdFromAttr(obj.find('input:eq(0)"').attr('id'));
		var alt = fGetInputValue(obj.find('input:eq(0)"'));
		var lat = fGetInputValue(obj.find('input:eq(1)"'));
		var lng = fGetInputValue(obj.find('input:eq(2)"'));
		var time = obj.find('li:eq(3) span.time').html();

		var point = "{'longitude' : " + lng + ", 'latitude': " + lat +", 'altitude': "+alt+", time : " + time + "}";
		oDataSrc.updatePoint(routeId, pointId, point);

		obj.find('ul.point-item').pointEditor('close');

		return false;
	}

	function fGetInputValue(element)
	{
		var value = element.val();
		var title = element.attr('title');
		if (value == Math.decimal(title, 3))
		{
			return title; // wartosc nie zostala zmieniona
		}

		return value;
	}

	function fGenerateIdForNewPoint(id)
	{
		id = fGetIdFromAttr(id);
		return (id * 1) + 1;
	}

	function fRouteAddFormForNewPoint(event)
	{
		var id = fGenerateIdForNewPoint(this.name);
		oView.addNewPoint(id, $(this).parent().parent().parent().parent());
	}

	function fShowPointsTimeEditor()
	{
		oView.showTimeEditor($(this).parent().next());
	}

	return {
		tracklist_checkbox_change : fTrackListCheckboxChanged,
		initialize_onload         : fInitializeOnload,
		tracklist_item_delete     : fTrackListItemDelete,
		tracklist_item_edit       : fTrackListItemEdit,
		route_point_edit          : fRoutePointEdit,
		route_point_save          : fRouteSaveEditedPoint,
		route_add_point           : fRouteAddFormForNewPoint,
		show_points_time_editor   : fShowPointsTimeEditor
	};
};

Math.decimal = function(n, k) {
	var factor = Math.pow(10, k+1);
	n = Math.round(Math.round(n*factor)/10);

	return n/(factor/10);
}