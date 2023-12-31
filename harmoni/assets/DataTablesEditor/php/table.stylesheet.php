<?php

/*
 * Editor server script for DB table stylesheet
 * Created by http://editor.datatables.net/generator
 */

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Mjoin,
	DataTables\Editor\Options,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate,
	DataTables\Editor\ValidateOptions;

// The following statement can be removed after the first run (i.e. the database
// table has been created). It is a good idea to do this to help improve
// performance.
$db->sql( "CREATE TABLE IF NOT EXISTS `stylesheet` (
	`forfapeda` int(10) NOT NULL auto_increment,
	PRIMARY KEY( `forfapeda` )
);" );

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'stylesheet', 'forfapeda' )
	->fields
	)
	->process( $_POST )
	->json();
