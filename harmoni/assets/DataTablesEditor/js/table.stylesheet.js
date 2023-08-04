
/*
 * Editor client script for DB table stylesheet
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new DataTable.Editor( {
		ajax: 'php/table.stylesheet.php',
		table: '#stylesheet',
		fields: [
			
		]
	} );

	var table = new DataTable('#stylesheet', {
		ajax: 'php/table.stylesheet.php',
		columns: [
			
		],
		select: true,
		lengthChange: false
	} );

	new $.fn.dataTable.Buttons( table, [
		{ extend: "create", editor: editor },
		{ extend: "edit",   editor: editor },
		{ extend: "remove", editor: editor }
	] );

	table.buttons().container()
		.appendTo( $('.col-md-6:eq(0)', table.table().container() ) );
} );

}(jQuery));

