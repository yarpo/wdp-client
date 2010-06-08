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
	<script type="text/javascript" src="inc/charts/AC_RunActiveContent.js"></script>
	<script type="text/javascript" src="http://www.google.com/jsapi?key=ABQIAAAAUmUZlQ5cCSp2E-VNZ4ql_BT2yXp_ZAY8_ufC3CFXhHIE1NvwkxQ_q2TRh-_TwwygGCkVjbV4jyGokg"></script>

	<script type="text/javascript">
		var requiredMajorVersion = 10,
			requiredMinorVersion = 0,
			requiredRevision = 45;

		var WDP = function() {};

		google.load('maps', '2');
	</script>

	<script type="text/javascript" src="inc/js/map.js"></script>
	<script type="text/javascript" src="inc/js/editor.js"></script>
	<script type="text/javascript" src="inc/js/view.js"></script>
	<script type="text/javascript" src="inc/js/dataSrc.js"></script>
	<script type="text/javascript" src="inc/js/frontController.js"></script>
	<script type="text/javascript" src="inc/js/point.js"></script>
	<script type="text/javascript" src="inc/js/ui/jquery.ui.core.js"></script>
	<script type="text/javascript" src="inc/js/ui/jquery.ui.datepicker.js"></script>
</head> 

<body class="wdp-project">

	<h1>Projekcja danych</h1>

	<div id="projection">
		<div id='map3d'></div>
	</div> <!-- #map-wrapper -->

	<div id="options">
		<div id="tracks" class="tabs-container">
			<h2>Trasy</h2>
			<ul class="tabs">
				<li><a href="#track-list" class="active">Lista tras</a></li>
				<li><a href="#add-new-track">Dodaj trasę</a></li>
				<li><a href="#upload">Upload</a></li>

			</ul><!-- .anchors -->
                        
			<div id="track-list" class="active">
				<ul class="list"></ul>
			</div> <!-- #track-list -->

			<div id="add-new-track">
				<p>ręczne dodawanie nowej trasy</p>
			</div> <!-- #add-new-track -->

			<div id="upload">
				<form action="Tasks/upload.do" method="POST" enctype="multipart/form-data">
					<input type="file" name="fileInput" /> 
					<input type="submit" value="Upload" />
				</form>
			</div> <!-- #upload -->
		</div> <!--#tracks-->

		<div id="charts" class="tabs-container">
			<h2>Wykresy</h2>
			<ul class="tabs">
				<li><a href="#v_t" class="active">V(t)</a></li>

				<li><a href="#h_t">h(t)</a></li>
			</ul> <!-- .anchors -->
			<div id="v_t" class="active">
                            <script type="text/javascript">
                            <!--
if (AC_FL_RunContent == 0 || DetectFlashVer == 0) {
	alert("This page requires AC_RunActiveContent.js.");
} else {
	var hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	if(hasRightVersion) {  // if we've detected an acceptable version
		// embed the flash movie
		AC_FL_RunContent(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,45,2',
			'width', '480',
			'height', '300',
			'bgcolor', '#000000',
			'movie', 'charts',
			'src', 'inc/charts/charts',
			'FlashVars', 'library_path=inc/charts/charts_library&xml_source=inc/charts/mock/sample2.xml',
			'wmode', 'opaque',
			'scale', 'noScale',
			'id', 'charts',
			'name', 'charts',
			'menu', 'true',
			'allowFullScreen', 'false',
			'allowScriptAccess','sameDomain',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'devicefont', 'false',
			'salign', 'TL'
			); //end AC code
	} else {  // flash is too old or we can't detect the plugin
		var alternateContent = '<p style="color:#4444ff">This content requires the latest version of Adobe Flash Player. '
			+ '<u><a href=http://www.macromedia.com/go/getflash/>Get Flash</a></u>.</p><P>Problems installing the Flash Player? See <u><a href=index.php?menu=Player_Troubleshooting>Troubleshooting</a></u>.</p>';
		document.write(alternateContent);  // insert non-flash content
	}
}
// -->

                            </script>
                            <noscript>
                                    <p>Wykresy wymagają obsługi JS i wtyczki Adebe Flash.</p>
                            </noscript>
			</div> <!-- v_t -->

			<div id="h_t">
                            <script type="text/javascript">
                            <!--
if (AC_FL_RunContent == 0 || DetectFlashVer == 0) {
	alert("This page requires AC_RunActiveContent.js.");
} else {
	var hasRightVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);
	if(hasRightVersion) {  // if we've detected an acceptable version
		// embed the flash movie
		AC_FL_RunContent(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,45,2',
			'width', '480',
			'height', '300',
			'bgcolor', '#000000',
			'movie', 'charts',
			'src', 'inc/charts/charts',
			'FlashVars', 'library_path=inc/charts/charts_library&xml_source=inc/charts/mock/sample.xml',
			'wmode', 'opaque',
			'scale', 'noScale',
			'id', 'charts',
			'name', 'charts',
			'menu', 'true',
			'allowFullScreen', 'true',
			'allowScriptAccess','sameDomain',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'devicefont', 'false',
			'salign', 'TL'
			); //end AC code
	} else {  // flash is too old or we can't detect the plugin
		var alternateContent = '<p style="color:#4444ff">This content requires the latest version of Adobe Flash Player. '
			+ '<u><a href=http://www.macromedia.com/go/getflash/>Get Flash</a></u>.</p><P>Problems installing the Flash Player? See <u><a href=index.php?menu=Player_Troubleshooting>Troubleshooting</a></u>.</p>';
		document.write(alternateContent);  // insert non-flash content
	}
}
// -->

			</script>
			<noscript>
				<p>Wykresy wymagają obsługi JS i wtyczki Adebe Flash.</p>
			</noscript>
			</div> <!-- #h_t -->
		</div> <!--charts-->

	</div> <!-- #options -->

	<div id="footer">
		<p>strona przygotowana na projkekt z WDP. Autorzey: Krzysztof Cygan, Patryk Jar</p>
	</div>

<div class="highslide-html-content" id="edit_container">
	<div class="highslide-body"/>
</div>



</body>
</html>
