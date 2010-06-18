<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Wizualizacja Danych Przestrzennych - projekt</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	<link rel="stylesheet" href="inc/css/style.css" type="text/css"/>
	<link type="text/css" href="inc/css/themes/base/jquery.ui.all.css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="inc/highslide/highslide.css" />
	<script type="text/javascript" src="inc/highslide/highslide-with-html.js"></script>
	<script type="text/javascript">
		hs.graphicsDir = 'inc/highslide/graphics/';
		hs.outlineType = 'rounded-white';
		hs.wrapperClassName = 'draggable-header';
		hs.align = 'center';
	</script>
	<script type="text/javascript" src="inc/js/jquery.js"></script>
	<script type="text/javascript" src="inc/js/ajax.js"></script>
	<script type="text/javascript" src="inc/js/tabs.plugin.js"></script>
	<script type="text/javascript" src="inc/js/pointEditor.plugin.js"></script>
	<script type="text/javascript" src="http://www.google.com/jsapi?key=ABQIAAAAUmUZlQ5cCSp2E-VNZ4ql_BT2yXp_ZAY8_ufC3CFXhHIE1NvwkxQ_q2TRh-_TwwygGCkVjbV4jyGokg"></script>

	<script type="text/javascript">
		var WDP = function() {};
		// przykladowe dane
		// dla takich danych NIE bedzie dzialac. Nalezy podac wlasciwe
		WDP.KML_FTP = 'ftp://yarpo:***@ftp.republika.pl/studia/wdp/kml/file_';
		WDP.KML_URL = 'http://yarpo.republika.pl/studia/wdp/kml/file_';

		google.load('maps', '2');
	</script>

	<script type="text/javascript" src="inc/js/map.js"></script>
	<script type="text/javascript" src="inc/js/editor.js"></script>
	<script type="text/javascript" src="inc/js/view.js"></script>
	<script type="text/javascript" src="inc/js/dataSrc.js"></script>
	<script type="text/javascript" src="inc/js/frontController.js"></script>
	<script type="text/javascript" src="inc/js/time.js"></script>
	<script type="text/javascript" src="inc/js/point.js"></script>
	<script type="text/javascript" src="inc/js/ui/jquery.ui.core.js"></script>
	<script type="text/javascript" src="inc/js/ui/jquery.ui.datepicker.js"></script>
	<script type="text/javascript" src="inc/js/jscharts.js"></script>
	<script type="text/javascript" src="inc/js/chart.js"></script>
</head> 

<body class="wdp-project">

	<div id="projection">
		<div id='map3d'></div>
	</div> <!-- #map-wrapper -->

	<div id="options">
		<div id="tracks" class="tabs-container">
			<h2>Trasy</h2>
			<ul class="tabs">
				<li><a href="#track-list" id="list-displayer" class="active">Lista tras</a></li>
				<li><a href="#upload">Upload</a></li>

			</ul><!-- .anchors -->
                        
			<div id="track-list" class="active">
				<ul class="list"></ul>
			</div> <!-- #track-list -->

			<div id="upload">
				<iframe id="upload_window" name="upload_window" width="1" height="1" style="visibility: hidden"></iframe>
				<form action="Tasks/upload.do" target="upload_window" method="POST" enctype="multipart/form-data">
					<input type="file" name="fileInput" /> 
					<input type="submit" value="Upload" />
				</form>
			</div> <!-- #upload -->
		</div> <!--#tracks-->

		<div id="charts" class="tabs-container">
			<div id="graph" />
		</div> <!--charts-->

	</div> <!-- #options -->

	<div id="footer">
		<p>Aplikacja WDP. Autorzy: Krzysztof Cygan, Patryk Jar. 2010 r.</p>
	</div>

<div class="highslide-html-content" id="edit_container">
	<div class="highslide-body"/>
</div>



</body>
</html>
