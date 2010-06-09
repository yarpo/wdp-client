$(document).ready(
	function()
	{
		var controller = frontController();

		controller.initialize_onload();

		$("#tracks").tabs();
		$("#charts").tabs();
		$('#track-list input:checkbox').change(controller.tracklist_checkbox_change);
		$('#track-list a.del').live('click', controller.tracklist_item_delete);
		$('#track-list a.edit').live('click', controller.tracklist_item_edit);
		$('.highslide-html-content .point').live('click', controller.route_point_edit);
		$('.highslide-html-content .add-new-point').live('click', controller.show_form_for_new_point);
		$('.highslide-html-content .delete-point').live('click', controller.route_point_delete);
		$('.highslide-html-content .edit-time').live('click', controller.show_points_time_editor);
		$('.highslide-html-content form.edit').live('submit', controller.route_point_update);
		$('.highslide-html-content form.add').live('submit', controller.route_point_save_new);
	}
);

var frontController = function()
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

	function fGetTimeValues(form)
	{
		var id = fGetIdFromAttr(form.attr('id'));

		time = form.find('.time-settings');
		var dateStr = time.find('input:eq(0)').val();
		var timer = WDP.time();
		date = dateStr.split("/");
		timer.day(parseInt(date[0]*1))
			.month(parseInt(date[1]*1))
			.year(parseInt(date[2]*1))
			.hours(parseInt(time.find('select:eq(0)').val()))
			.minutes(parseInt(time.find('select:eq(1)').val()))
			.seconds(parseInt(time.find('select:eq(2)').val()));

		return timer;
	}

	function fRouteSaveEditedPoint(event)
	{
		fPreccessPoint(this, oDataSrc.updatePoint);
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

	function fGetAncestor(obj, n)
	{
		for(var i = 0; i < n; i++)
		{
			obj = obj.parent();
		}
		return obj;
	}

	function fPreccessPoint(self, func)
	{
		var obj = $(self);
		var routeId = fGetIdFromAttr(self.id);
		var pointId = fGetIdFromAttr(obj.find('input:eq(0)"').attr('id'));
		var oPoint = WDP.point();
		oPoint
			.altitude(fGetInputValue(obj.find('input:eq(0)"')))
			.latitude(fGetInputValue(obj.find('input:eq(1)"')))
			.longitude(fGetInputValue(obj.find('input:eq(2)"')))
			.time(fGetTimeValues(obj));
		func(routeId, pointId, oPoint.getJSON());

		obj.find('ul.point-item').pointEditor('close');
	}

	function fRouteSaveNewPoint(event)
	{
		fPreccessPoint(this, oDataSrc.addPoint);
		var routeId = fGetIdFromAttr(this.id);
		oDataSrc.getJSONRouteById(routeId, oView.editRoute);
		return false;
	}

	function fRouteDeletePoint(o)
	{
		if (oView.confirm("Czy na pewno chcesz usunąć ten punkt?"))
		{
			var pointId = fGetIdFromAttr(this.name);
			var routeId = fGetIdFromAttr(fGetAncestor($(this), 6).attr('id'));
			var res = oDataSrc.deletePoint(routeId, pointId);
			if (res)
			{
				oDataSrc.getJSONRouteById(routeId, oView.editRoute);
			}
			else
			{
				oView.alert("Wystąpił błąd podczas usuwania punktu");
			}
		}
	}

	return {
		tracklist_checkbox_change : fTrackListCheckboxChanged,
		initialize_onload         : fInitializeOnload,
		tracklist_item_delete     : fTrackListItemDelete,
		tracklist_item_edit       : fTrackListItemEdit,
		route_point_edit          : fRoutePointEdit,
		route_point_update        : fRouteSaveEditedPoint,
		route_point_delete        : fRouteDeletePoint,
		route_point_save_new      : fRouteSaveNewPoint,
		show_form_for_new_point   : fRouteAddFormForNewPoint,
		show_points_time_editor   : fShowPointsTimeEditor
	};
};

Math.decimal = function(n, k) {
	var factor = Math.pow(10, k+1);
	n = Math.round(Math.round(n*factor)/10);

	return n/(factor/10);
}
