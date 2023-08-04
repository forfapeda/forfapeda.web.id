<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Tell the browser to be responsive to screen width -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>FOR FAPEDA | Aplikasi Validasi Data Harmonisasi</title>
	<!-- Favicon icon -->
	<!-- <link rel="icon" type="image/png" sizes="16x16" href="https://forfapeda.web.id/harmoni/assets/images/logoforfapeda.png"> -->
	<!-- Custom CSS -->
	<link href="https://forfapeda.web.id/harmoni/templates/backend/css/style.min.css" rel="stylesheet">
	<link href="https://forfapeda.web.id/harmoni/templates/backend/css/custom.css" rel="stylesheet">
	<link href="https://forfapeda.web.id/harmoni/templates/backend/css/right_sidebar_menu.css" rel="stylesheet">
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->
	<script src="https://forfapeda.web.id/harmoni/templates/backend/plugins/jquery/dist/jquery.min.js"></script>
	<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/js/js.cookie.js"></script>
	<!-- Bootstrap tether Core JavaScript -->
	<script src="https://forfapeda.web.id/harmoni/templates/backend/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/blockUI/jquery.blockUI.js"></script>
</head>

<body class="fixed-layout skin-megna-dark">
	<!-- ============================================================== -->
	<!-- Preloader - style you can find in spinners.css -->
	<!-- ============================================================== -->
	<div class="preloader">
		<div class="loader">
			<div class="loader__figure"></div>
			<p class="text-center loader__label">FOR FAPEDA</p>
		</div>
	</div>
	<!-- ============================================================== -->
	<!-- Main wrapper - style you can find in pages.scss -->
	<!-- ============================================================== -->
	<div id="main-wrapper">
		<!-- ============================================================== -->
		<!-- Topbar header - style you can find in pages.scss -->
		<!-- ============================================================== -->
		<header class="topbar">
			<nav class="navbar top-navbar navbar-expand-md navbar-dark">
				<!-- ============================================================== -->
				<!-- Logo -->
				<!-- ============================================================== -->
				<div class="navbar-header">
					<a class="navbar-brand" href="https://forfapeda.web.id/harmoni/">
						<!-- Logo icon -->
						<b>
							<!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
							<!-- Light Logo icon -->
							<i class="wi wi-sunset light-logo"></i>
							<!-- <img src="../assets/images/logo-light-icon.png" alt="homepage" class="light-logo" /> -->
						</b>
						<!--End Logo icon -->
						<!-- Logo text -->
						<span>
							<h3 class="mx-1 text-white fw-bold my-0 light-logo">FOR FAPEDA</h3>
						</span>
					</a>
				</div>
				<!-- ============================================================== -->
				<!-- End Logo -->
				<!-- ============================================================== -->
				<div class="navbar-collapse">
					<!-- ============================================================== -->
					<!-- toggle and nav items -->
					<!-- ============================================================== -->
					<ul class="navbar-nav me-auto">
						<!-- This is  -->
						<li class="nav-item"> <a class="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
						<li class="nav-item"> <a class="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i class="icon-menu"></i></a> </li>
					</ul>
					<!-- ============================================================== -->
					<!-- User profile and search -->
					<!-- ============================================================== -->
					<ul class="navbar-nav my-lg-0">
						<!-- ============================================================== -->
						<!-- User Profile -->
						<!-- ============================================================== -->
						<li class="nav-item dropdown u-pro">
							<a class="text-white nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<span class="">Admin &nbsp;<i class="fa fa-angle-down"></i></span>
							</a>
							<div class="dropdown-menu dropdown-menu-end animated flipInY">
								<!-- <a href="javascript:void(0)" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
								<a href="javascript:void(0)" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
								<a href="javascript:void(0)" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
								<div class="dropdown-divider"></div> -->
								<a href="https://forfapeda.web.id/harmoni/pengguna/edit/admin" class="dropdown-item"><i class="ti-settings"></i> Pengaturan Akun</a>
								<div class="dropdown-divider"></div>
								<a href="https://forfapeda.web.id/harmoni/keluar" class="dropdown-item text-danger"><i class="fa fa-power-off"></i> Logout</a>
								<!-- text-->
							</div>
						</li>
						<!-- ============================================================== -->
						<!-- End User Profile -->
						<!-- ============================================================== -->
					</ul>
				</div>
			</nav>
		</header>
		<!-- ============================================================== -->
		<!-- End Topbar header -->
		<!-- ============================================================== -->
		<!-- ============================================================== -->
		<!-- Left Sidebar - style you can find in sidebar.scss  -->
		<!-- ============================================================== -->
				<aside class="left-sidebar">
			<!-- Sidebar scroll-->
			<div class="scroll-sidebar">
				<!-- Sidebar navigation-->
				<nav class="sidebar-nav">
					<ul id="sidebarnav">
						<li class="user-pro"> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
								<i class="fas fa-user-circle"></i> <span class="hide-menu">Admin</span>
							</a>
							<ul aria-expanded="false" class="collapse">
								<li><a href="javascript:void(0)"><i class="icon-user"></i> Akun</a></li>
								<li><a href="https://forfapeda.web.id/harmoni/keluar"><i class="fa fa-power-off text-danger"></i> Logout</a></li>
							</ul>
						</li>
						<li class="nav-small-cap">--- NAVIGATION</li>
						<li> <a class="waves-effect waves-dark" href="https://forfapeda.web.id/harmoni/dashboard" aria-expanded="false"><i class="ti-layout-grid2"></i><span class="hide-menu">Dashboard</span></a></li>
						<!-- <li> <a class="waves-effect waves-dark" href="https://forfapeda.web.id/harmoni/harmonisasi" aria-expanded="false"><i class="far fa-envelope-open"></i><span class="hide-menu">Permohonan</span></a></li> -->
						<li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fas fa-inbox"></i><span class="hide-menu">Permohonan</span></a>
							<ul aria-expanded="false" class="collapse">
								<li><a href="https://forfapeda.web.id/harmoni/penyusunan">Penyusunan Rancangan Produk Hukum</a></li>
								<li><a href="https://forfapeda.web.id/harmoni/harmonisasi">Harmonisasi Rancangan Produk Hukum</a></li>
							</ul>
						</li>
						<li> <a class="waves-effect waves-dark" href="https:/?forfapeda.web.id/harmoni/perancang" aria-expanded="false"><i class="far fa-id-card"></i><span class="hide-menu">Tim Perancang</span></a></li>
						<li> <a class="waves-effect waves-dark" href="https://forfapeda.web.id/harmoni/pokja" aria-expanded="false"><i class="icon-people"></i><span class="hide-menu">Kelompok Kerja</span></a></li>
						<li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="far fa-folder-open"></i><span class="hide-menu">Data Master</span></a>
							<ul aria-expanded="false" class="collapse">
								<li><a href="https://forfapeda.web.id/harmoni/wilayah">Wilayah</a></li>
								<li><a href="https://forfapeda.web.id/harmoni/pemrakarsa">Pengusul Inisiatif</a></li>
								<li><a href="https://forfapeda.web.id/harmoni/bidang">Bidang</a></li>
								<li><a href="https://forfapeda.web.id/harmoni/kadiv">Kepala Divisi YANKUMHAM</a></li>
							</ul>
						</li>
						<!-- <li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fas fa-chart-bar"></i><span class="hide-menu">Laporan</span></a>
							<ul aria-expanded="false" class="collapse">
								<li><a href="https://forfapeda.web.id/harmoni/laporan/daftar_permohonan">Daftar Permohonan</a></li>
								<li><a href="https://forfapeda.web.idharmoni/laporan/rekap_permohonan">Rekapitulasi</a></li>
							</ul>
						</li> -->
						<li> <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fas fa-chart-bar"></i><span class="hide-menu">Laporan</span></a>
							<ul aria-expanded="false" class="collapse">
								<li> <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">Penyusunan Rancangan Produk Hukum</a>
									<ul aria-expanded="false" class="collapse">
										<li><a href="https://husmin.web.id/harmoni/laporan/daftar_penyusunan">Daftar Permohonan</a></li>
										<li><a href="https://husmin.web.id/harmoni/laporan/rekap_penyusunan">Rekapitulasi</a></li>
									</ul>
								</li>
								<li> <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">Harmonisasi Rancangan Produk Hukum</a>
									<ul aria-expanded="false" class="collapse">
										<li><a href="https://forfapeda.web.id/harmoni/laporan/daftar_permohonan">Daftar Permohonan</a></li>
										<li><a href="https://forfapeda.web.id/harmoni/laporan/rekap_permohonan">Rekapitulasi</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<!-- <li> <a class="waves-effect waves-dark" href="https://forfapeda.web.id/harmoni/perancang" aria-expanded="false"><i class="far fa-user-circle"></i><span class="hide-menu">KADIV HUMHAM</span></a></li> -->
						<li> <a class="waves-effect waves-dark" href="https://forfapeda.web.id/harmoni/keluar" aria-expanded="false"><i class="fas fa-power-off text-danger"></i><span class="hide-menu">Logout</span></a></li>
					</ul>
				</nav>
				<!-- End Sidebar navigation -->
			</div>
			<!-- End Sidebar scroll-->
		</aside>
		<!-- ============================================================== -->
		<!-- End Left Sidebar - style you can find in sidebar.scss  -->
		<!-- ============================================================== -->
		<!-- ============================================================== -->
		<!-- Page wrapper  -->
		<!-- ============================================================== -->
		<div class="page-wrapper">
			<!-- ============================================================== -->
			<!-- Container fluid  -->
			<!-- ============================================================== -->
			<div class="container-fluid">
				<!-- ============================================================== -->
				<!-- Bread crumb and right sidebar toggle -->
				<!-- ============================================================== -->
				<div class="row page-titles">
					<div class="col-md-5 col-8 align-self-center">
						<h4 class="text-themecolor">BIDANG</h4>
					</div>
					<div class="col-md-7 col-4 align-self-center text-end">
						<div class="d-flex justify-content-end align-items-center">
							<!-- <ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="https://forfapeda.web.id/harmoni/dashboard">Dashboard</a></li>
								<li class="breadcrumb-item active">Dashboard 1</li>
							</ol> -->
													</div>
					</div>
				</div>
				<!-- ============================================================== -->
				<!-- End Bread crumb and right sidebar toggle -->
				<!-- ============================================================== -->
				<!-- ============================================================== -->
				<!-- Start Page Content -->
				<!-- ============================================================== -->
				<div class="row">
	<div class="col-md-12 col-sm-12 col-xs-12">
		<div class="card block">
			<ul class="nav nav-tabs customtab" role="tablist">
				<li class="nav-item"><a class="nav-link active" href="#table" aria-controls="home" role="tab" data-bs-toggle="tab" aria-expanded="true"><i class="tab-icon ti-view-list-alt"></i><span class="hidden-xs">Daftar Bidang</span></a></li>
				<li class="nav-item"><a class="nav-link" href="#form" aria-controls="profile" role="tab" data-bs-toggle="tab"><i class="tab-icon ti-plus"></i> <span class="hidden-xs">Tambah Bidang</span></a></li>
			</ul>
			<div class="card-body">
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane fade active show" id="table" aria-labelledby="list-tab">
						<link rel="stylesheet" type="text/css" href="https://forfapeda.web.id/harmoni/assets/sweetalert/sweetalert2.min.css" />
<!-- <link rel="stylesheet" type="text/css" href="https://forfapeda.web.id/harmoni/assets/datatable/datatables.min.css"/> -->
<link rel="stylesheet" type="text/css" href="https://forfapeda.web.id/harmoni/assets/datatable/DataTables-1.11.2/css/dataTables.bootstrap5.min.css" />
<link rel="stylesheet" type="text/css" href="https://forfapeda.web.id/harmoni/assets/datatable/Buttons-1.2.4/css/buttons.bootstrap.min.css" />
<style>
	.dt-buttons.btn-group .btn-default {
		background-color: #03a9f3;
		border: 1px solid #e4e7ea;
		color: #efefef;
	}

	#dataTable {
		margin: 0px !important;
		border-bottom: 1px solid #DDD;
		width: 100% !important;
		font-weight: 400;
		font-size: 1.05em;
	}

	#dataTable tbody tr {
		position: relative;
	}

	.dataTable thead tr th {
		font-weight: lighter;
		font-size: 16px;
		text-transform: uppercase;
		border-bottom: 2px solid #DDD;
		padding: 8px 12px;
		background-color: #ff6849 !important;
		/* white-space: nowrap; */
	}

	.dataTable tbody tr td {
		padding: 8px 12px;
		/* white-space: nowrap; */
	}

	.dataTable thead th:last-child {
		min-width: 99px;
		/* display: none; */
	}

	.dataTable tbody td:last-child {
		/* display: none; */
	}

	table.dataTable thead th.sorting:after {
		color: #fff;
		opacity: 0.3 !important;
	}

	table.dataTable.table-striped>tbody>tr:nth-of-type(2n+1),
	table.dataTable.table-striped>tbody>tr.odd {
		--bs-table-accent-bg: transparent !important;
	}

	/*
.dataTable > tbody:hover td {
	color: transparent;
	text-shadow: 0 0 3px #aaa;
}
*/
	.dataTable>tbody:hover tr:hover td {
		color: #000;
		/*text-shadow: 0 1px 0 #fff;
	font-weight: bold;*/
		/* background-color: rgba(255, 251, 235, 1) !important; */
	}

	.dataTable tbody tr.selected {
		background-color: rgba(255, 251, 235, 1) !important;
	}

	.dataTable tbody tr.selected td {
		color: #000;
	}

	.dataTable>tbody>tr>td {
		vertical-align: top;
		color: grey;
	}

	.dataTable>tbody>tr>td:last-of-type {
		/*vertical-align: middle;*/
	}

	/*
.dataTable > tbody:hover tr:hover td i {
	color: initial;
}

.dataTable > tbody:hover td i {
	color: white;
}
*/

	.dataTable_wrapper>.row>[class*="col-"] {
		margin-bottom: 0;
	}

	/*
.dataTables_scrollBody .dropdown-menu{
	position: fixed;
}
*/
	div.dataTables_wrapper div.dataTables_info {
		white-space: inherit
	}

	.expandableBtn {
		position: absolute;
		left: 0px;
		top: 50px;
		background-color: red;
		width: 100%;
		text-align: center;
		z-index: 99999999;
	}
</style>

<table class="table table-striped table-hover dataTable no-footer color-table info-table" id="dataTable">
<thead>
<tr>
<th>bidang</th><th></th></tr>
</thead>
</table>
<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/sweetalert/sweetalert2.min.js"></script>
<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/datatable/datatables.min.js"></script>

<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/datatable/pagination.select.js"></script>
<!-- <script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/datatable/Select-1.3.3/js/dataTables.select.min.js"></script> -->
<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/datatable/Buttons-1.2.4/js/dataTables.buttons.min.js"></script>
<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/datatable/JSZip-2.5.0/jszip.min.js"></script>
<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/datatable/Buttons-1.2.4/js/buttons.html5.min.js"></script>
<script type="text/javascript" src="https://forfapeda.web.id/harmoni/assets/datatable/Buttons-1.2.4/js/buttons.print.min.js"></script>

<script>
	$(document).ready(function() {
		// JavaScript toggles the grey color of the control when the placeholder is selected
		$("select:first-child").on('change', function() {
			$(this).toggleClass("empty", $.inArray($(this).val(), ['', null]) >= 0);
		}).trigger('change');

		var multipleSearch = false;
		var table = $('.dataTable').DataTable({
			select: {
				style: 'os',
				blurable: true
			},

			lengthMenu: [
				[10, 25, 50, 100, -1],
				['10 Data', '25 Data', '50 Data', '100 Data', 'Semua Data']
			],

			dom: "<'row mt-1'<'col-sm-12 text-end'B>>" +
				"<'row mb-2'<'col-sm-6'l><'col-sm-6'f>>" +
				"<'row'<'col-sm-12'tr>>" +
				"<'row'<'col-sm-7'i><'col-sm-5'p>>",
			// buttons: [
			// 	'excel', 'print'
			// ],
			buttons: [{
					extend: 'excel',
					text: '<i class="far fa-file-excel"></i> Excel',
					title: 'Bidang',
					className: 'bg-info waves-effect waves-light',
					titleAttr: 'Excel'
				},
				{
					extend: 'print',
					text: '<i class="fa fa-print"></i> Cetak',
					title: 'Bidang',
					className: 'bg-info waves-effect waves-light',
					titleAttr: 'Cetak'
				}
			],

			//"responsive": true,
			"processing": true,
			"serverSide": true,
			//"scrollX": true,
			//"scrollY": 500,
			//"pagingType": "full_numbers",
			"sPaginationType": "listbox",
			"paging": true, // true/false
			"ordering": true, // true/false
			// "filter": false,
			"sorting": [[0, "asc"],[1, "asc"]],									/*
		contoh columnDefs
		"columnDefs": [
		{ "visible": false, "targets": 0 } -> sembunyikan kolom
			{ "width": "20%", "targets": 0 } -> menentukan lebar kolom
			{ "searchable": false, "targets": 0 } -> menentukan kolom bisa dicari atau tidak
	  ]
		*/
			"colReorder": true,
			"language": {
				// "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Indonesian.json"
				"emptyTable": "Tidak ada data yang tersedia pada tabel ini",
				"info": "Menampilkan _START_ sampai _END_ dari _TOTAL_ entri",
				"infoEmpty": "Menampilkan 0 sampai 0 dari 0 entri",
				"infoFiltered": "(disaring dari _MAX_ entri keseluruhan)",
				"lengthMenu": "Tampilkan _MENU_ entri",
				"loadingRecords": "Sedang memuat...",
				"processing": "Sedang memproses...",
				"search": "Cari:",
				"zeroRecords": "Tidak ditemukan data yang sesuai",
				"thousands": "'",
				"paginate": {
					"first": "Pertama",
					"last": "Terakhir",
					"next": "Selanjutnya",
					"previous": "Sebelumnya"
				},
				"aria": {
					"sortAscending": ": aktifkan untuk mengurutkan kolom ke atas",
					"sortDescending": ": aktifkan untuk mengurutkan kolom menurun"
				},
				"autoFill": {
					"cancel": "Batalkan",
					"fill": "Isi semua sel dengan <i>%d<\/i>",
					"fillHorizontal": "Isi sel secara horizontal",
					"fillVertical": "Isi sel secara vertikal"
				},
				"buttons": {
					"collection": "Kumpulan <span class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s'\/>",
					"colvis": "Visibilitas Kolom",
					"colvisRestore": "Kembalikan visibilitas",
					"copy": "Salin",
					"copySuccess": {
						"1": "1 baris disalin ke papan klip",
						"_": "%d baris disalin ke papan klip"
					},
					"copyTitle": "Salin ke Papan klip",
					"csv": "CSV",
					"excel": "Excel",
					"pageLength": {
						"-1": "Tampilkan semua baris",
						"_": "Tampilkan %d baris"
					},
					"pdf": "PDF",
					"print": "Cetak",
					"copyKeys": "Tekan ctrl atau u2318 + C untuk menyalin tabel ke papan klip.<br \/><br \/>Untuk membatalkan, klik pesan ini atau tekan esc."
				},
				"searchBuilder": {
					"add": "Tambah Kondisi",
					"button": {
						"0": "Cari Builder",
						"_": "Cari Builder (%d)"
					},
					"clearAll": "Bersihkan Semua",
					"condition": "Kondisi",
					"data": "Data",
					"deleteTitle": "Hapus filter",
					"leftTitle": "Ke Kiri",
					"logicAnd": "Dan",
					"logicOr": "Atau",
					"rightTitle": "Ke Kanan",
					"title": {
						"0": "Cari Builder",
						"_": "Cari Builder (%d)"
					},
					"value": "Nilai",
					"conditions": {
						"date": {
							"after": "Setelah",
							"before": "Sebelum",
							"between": "Diantara",
							"empty": "Kosong",
							"equals": "Sama dengan",
							"not": "Tidak sama",
							"notBetween": "Tidak diantara",
							"notEmpty": "Tidak kosong"
						},
						"number": {
							"between": "Diantara",
							"empty": "Kosong",
							"equals": "Sama dengan",
							"gt": "Lebih besar dari",
							"gte": "Lebih besar atau sama dengan",
							"lt": "Lebih kecil dari",
							"lte": "Lebih kecil atau sama dengan",
							"not": "Tidak sama",
							"notBetween": "Tidak diantara",
							"notEmpty": "Tidak kosong"
						},
						"string": {
							"contains": "Berisi",
							"empty": "Kosong",
							"endsWith": "Diakhiri dengan",
							"equals": "Sama Dengan",
							"not": "Tidak sama",
							"notEmpty": "Tidak kosong",
							"startsWith": "Diawali dengan"
						},
						"array": {
							"equals": "Sama dengan",
							"empty": "Kosong",
							"contains": "Berisi",
							"not": "Tidak",
							"notEmpty": "Tidak kosong",
							"without": "Tanpa"
						}
					}
				},
				"searchPanes": {
					"clearMessage": "Bersihkan Semua",
					"count": "{total}",
					"countFiltered": "{shown} ({total})",
					"title": "Filter Aktif - %d",
					"collapse": {
						"0": "Panel Pencarian",
						"_": "Panel Pencarian (%d)"
					},
					"emptyPanes": "Tidak Ada Panel Pencarian",
					"loadMessage": "Memuat Panel Pencarian"
				},
				"infoThousands": ",",
				"select": {
					"cells": {
						"1": "1 sel terpilih",
						"_": "%d sel terpilih"
					},
					"columns": {
						"1": "1 kolom terpilih",
						"_": "%d kolom terpilih"
					}
				},
				"datetime": {
					"previous": "Sebelumnya",
					"next": "Selanjutnya",
					"hours": "Jam",
					"minutes": "Menit",
					"seconds": "Detik",
					"unknown": "-",
					"amPm": [
						"am",
						"pm"
					],
					"weekdays": [
						"Min",
						"Sen",
						"Sel",
						"Rab",
						"Kam",
						"Jum",
						"Sab"
					],
					"months": [
						"Januari",
						"Februari",
						"Maret",
						"April",
						"Mei",
						"Juni",
						"Juli",
						"Agustus",
						"September",
						"Oktober",
						"November",
						"Desember"
					]
				},
				"editor": {
					"close": "Tutup",
					"create": {
						"button": "Tambah",
						"submit": "Tambah",
						"title": "Tambah inputan baru"
					},
					"remove": {
						"button": "Hapus",
						"submit": "Hapus",
						"confirm": {
							"_": "Apakah Anda yakin untuk menghapus %d baris?",
							"1": "Apakah Anda yakin untuk menghapus 1 baris?"
						},
						"title": "Hapus inputan"
					},
					"multi": {
						"title": "Beberapa Nilai",
						"info": "Item yang dipilih berisi nilai yang berbeda untuk input ini. Untuk mengedit dan mengatur semua item untuk input ini ke nilai yang sama, klik atau tekan di sini, jika tidak maka akan mempertahankan nilai masing-masing.",
						"restore": "Batalkan Perubahan",
						"noMulti": "Masukan ini dapat diubah satu per satu, tetapi bukan bagian dari grup."
					},
					"edit": {
						"title": "Edit inputan",
						"submit": "Edit",
						"button": "Edit"
					},
					"error": {
						"system": "Terjadi kesalahan pada system. (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Informasi Selebihnya<\/a>)."
					}
				}
			},
			"drawCallback": function(settings) {
				//baris program ini khusus untuk mewarnai row sesuai dengan yang diatur di controller
				$('.dataTable tbody tr').each(function() {
					className = $(this).find("div.btn-group").attr("class-name");
					//console.log(className);
					$(this).addClass(className);
				});

								//alert( 'DataTables has redrawn the table' );
				//$("#loading-mask").fadeIn(500);
			},
			"initComplete": function() {
				//alert('init');
				//$("#loading-mask").fadeOut(500);

				//wrap datatable with table-responsive
				$("table#dataTable").wrap("<div class='table-responsive m-b-10'></div>");
			},
			"ajax": {
				"url": "https://forfapeda.web.id/harmoni/bidang/data",
				"type": "POST",
				"data": function(d) {
					d.multipleSearch = multipleSearch;
					d.csrf_mdn_kl = Cookies.get('harmoni_cookie');
				},
				"beforeSend": function() {
					$('div.block').block({
						message: '<h4><i class="fa fa-spinner fa-pulse"></i> Sedang Memproses...</h4>',
						css: {
							border: '1px solid #fff'
						}
					});
				},
				"complete": function() {
					$('div.block').unblock();
				},
			}
		});


		//background color when hover a column and row
		/*
		var lastIdx = null;
		$('.dataTable tbody')
			.on('mouseover', 'td', function () {
				var colIdx = table.cell(this).index().column;
				if ( colIdx !== lastIdx ) {
					$( table.cells().nodes() ).removeClass( 'highlight' );
					$( table.column( colIdx ).nodes() ).addClass( 'highlight' );
				}
			})
			.on( 'mouseleave', function () {
				$( table.cells().nodes() ).removeClass( 'highlight' );
			});
		*/

		//apply multiple filter
		$('#btnApplyFilter').click(function() {
			multipleSearch = true;
			$("form#formFilter input, form#formFilter select").each(function(i, field) {
				var input = $('input[name=' + field.name + '], select[name=' + field.name + ']');
				//alert(input.attr("idcol"));
				field.value = $.trim(field.value);
				//table.column( i ).search( field.value );
				table.column(input.attr("idcol")).search(field.value);
			});
			table
				.search('')
				.draw();
		});

		//reset multiple filter
		$('#btnResetFilter').click(function() {
			multipleSearch = false;
			table
				.search('')
				.columns().search('')
				.draw();
		});

		//recalculate column widths of all visible tables once a tab becomes active
		$('a[data-bs-toggle="tab"][data-target=table]').on('shown.bs.tab', function(e) {
			$($.fn.dataTable.tables(true)).DataTable()
				.columns.adjust();
		});


		//======================== show action button when left click on datatable row ========================//
		/*
		table.on( 'select', function ( e, dt, type, indexes ) {
			var rowData = table.rows( indexes ).data().toArray();
			// console.log(table.rows( indexes ).data().toArray()[0][0]);
			// console.log(table.row( indexes ).selector.rows[0]);
			// console.log(
			// 	$('#dataTable tr:eq('+ (parseInt(table.row( indexes ).selector.rows[0]) + 1) +') td').length
			// );

			// $('#dataTable tr:eq('+ (parseInt(table.row( indexes ).selector.rows[0]) + 1) +') td').html('ssssssssssssss');
			// $('#dataTable tr:eq('+ (parseInt(table.row( indexes ).selector.rows[0]) + 1) +')').after(
			// 	'<tr class="expandableBtn"><td class="text-center" colspan="'+ $('#dataTable tr:eq('+ (parseInt(table.row( indexes ).selector.rows[0]) + 1) +') td').length +'"> '+ $('#dataTable tr:eq('+ (parseInt(table.row( indexes ).selector.rows[0]) + 1) +') td div.btn-group').html() +' </td></tr>'
			// );
			
			$('#dataTable tr:eq('+ (parseInt(table.row( indexes ).selector.rows[0]) + 1) +')').append(
				'<div class="expandableBtn p-10">'+ $('#dataTable tr:eq('+ (parseInt(table.row( indexes ).selector.rows[0]) + 1) +') td div.btn-group').html() +'</div>'
			);
		})
		.on( 'deselect', function ( e, dt, type, indexes ) {
			var rowData = table.rows( indexes ).data().toArray();
			// events.prepend( '<div><b>'+type+' <i>de</i>selection</b> - '+JSON.stringify( rowData )+'</div>' );
			// $('#dataTable tr.expandableBtn').remove();
			$('#dataTable div.expandableBtn').remove();
		});
		*/

		//========================right click: show context menu on datatable row ========================//
		//disabled rigth click on datatable
		$('#dataTable tbody').bind('contextmenu', function(e) {
			return false;
		});

		function openDropdownMenu(e, buttonGroup) {
			//hide all the dropdown menu so there is only one dropdown menu is open
			$('.dropdown-menu[data-parent]').hide();
			// if the button is inside a modal
			if ($('body').hasClass('modal-open')) {
				throw new Error("This solution is not working inside a responsive table inside a modal, you need to find out a way to calculate the modal Z-index and add it to the element")
				return true;
			}

			buttonGroup.css({
				'position': 'initial'
			});
			if (!buttonGroup.attr('data-attachedUl')) {
				var ts = +new Date;
				buttonGroup.attr('data-attachedUl', ts);

				dropDownMenu = buttonGroup.children('.dropdown-menu');
				dropDownMenu.attr('data-parent', ts).appendTo('body');

				$(window).resize(function() {
					dropDownMenu.css('display', 'none').data('top');
				});
			} else {
				dropDownMenu = $('[data-parent=' + buttonGroup.attr('data-attachedUl') + ']');
			}

			// $('.dropdown-menu[data-parent]').not('[data-parent=' + buttonGroup.attr('data-attachedUl') + ']').hide().removeClass('show');

			if (!dropDownMenu.hasClass('show')) {
				dropDownMenu.addClass('show');
			}

			dropDownMenu.children('li.text-info').removeClass('visually-hidden');
			dropDownMenu.children('li').children('hr.dropdown-divider').removeClass('visually-hidden');

			var bodyOffsets = document.getElementById("dataTable").getBoundingClientRect();
			// tempX = e.pageX - bodyOffsets.width + 70;
			// tempY = e.pageY - bodyOffsets.height;
			// console.log(bodyOffsets);
			// console.log(e.pageY);
			// console.log(e.pageX);
			// console.log(bodyOffsets.width);
			// console.log((e.pageX - 40) + dropDownMenu.width() + 5);
			if ((e.pageX - 40) + dropDownMenu.width() + 5 > bodyOffsets.width) {
				// dropDownMenu.css({ 'top': buttonGroup.parent().height() , 'right': 0, 'left' : '', 'width': dropDownMenu.width() + 2 });
				dropDownMenu.css({
					'top': e.pageY + 3,
					'right': '58px',
					'left': '',
					'width': dropDownMenu.width() + 2,
					'position': 'absolute',
					'display': 'block'
				});
			} else {
				// dropDownMenu.css({ 'top': buttonGroup.parent().height() , 'right' : '', 'left': e.pageX - 40, 'width': dropDownMenu.width() + 2 });
				dropDownMenu.css({
					'top': e.pageY + 3,
					'right': '',
					'left': e.pageX,
					'width': dropDownMenu.width() + 2,
					'position': 'absolute',
					'display': 'block'
				});
			}

			// buttonGroup.children('.dropdown-toggle').dropdown('toggle');
			// dropDownMenu.css('display', 'block');
		}

		/*
		//setup dropdown open direction - up or down
		$("#dataTable tbody").on("shown.bs.dropdown", ".btn-group", function () {
			// calculate the required sizes, spaces
			var $ul = $(this).children(".dropdown-menu");
			var $button = $(this).children(".dropdown-toggle");
			var ulOffset = $ul.offset();
			// how much space would be left on the top if the dropdown opened that direction
			var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
			// how much space is left at the bottom
			var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
			// switch to dropup only if there is no space at the bottom AND there is space at the top, or there isn't either but it would be still better fit
			if (spaceDown < 0 && (spaceUp >= 0 || spaceUp > spaceDown))
			$(this).addClass("dropup");
		}).on("hidden.bs.dropdown", ".btn-group", function() {
			// always reset after close
			$(this).removeClass("dropup");
		});
		*/

		$('#dataTable tbody').on('mousedown', 'tr', function(event) {
			switch (event.which) {
				case 1:
					// alert('Left Mouse button pressed.');
					break;
				case 2:
					// alert('Middle Mouse button pressed.');
					break;
				case 3:
					var data = table.row(this).data();
					// console.log(data);
					// console.log(table.row( this )[0][0]);
					// alert( 'You right clicked on '+data[0]+'\'s row' );
					// $().dropdown('toggle');
					// console.log($('#dataTable tr:eq('+ (parseInt(table.row( this )[0][0]) + 1) +') td div.btn-group .dropdown-toggle').html());
					// $('#dataTable tr:eq('+ (parseInt(table.row( this )[0][0]) + 1) +') td div.btn-group .dropdown-toggle').dropdown('toggle');
					openDropdownMenu(
						event,
						$('#dataTable tr:eq(' + (parseInt(table.row(this)[0][0]) + 1) + ') td div.btn-group')
					);
					// $('#dataTable tr:eq('+ (parseInt(table.row( this )[0][0]) + 1) +') td div.btn-group .dropdown-toggle').dropdown('toggle');
					break;
				default:
					alert('You have a strange Mouse!');
			}
		});

	});

	function deleteRecord(el) {
		swal.fire({
			title: 'Apakah Anda yakin?',
			text: "Data yang dihapus tidak dapat dikembalikan",
			type: 'warning',
			showCancelButton: true,
			customClass: {
				confirmButton: 'btn btn-success',
				cancelButton: 'btn btn-danger'
			},
			confirmButtonText: 'Ya, hapus!',
			cancelButtonText: 'Tidak!',
			cancelButtonColor: '#e46a76',
		}).then(function(result) {
			if (result.value) {
				$.ajax({
					url: $(el).attr('url'),
					dataType: 'json',
					beforeSend: function() {
						$('div.block').block({
							message: '<h4><i class="fa fa-spinner fa-pulse"></i> Sedang Memproses...</h4>',
							css: {
								border: '1px solid #fff'
							}
						});
						$("button#close-alert").trigger("click");
					},
					complete: function() {
						$('div.block').unblock();
					},
					success: function(data) {
						if (data.success) {
							$('.dataTable').DataTable().draw();
							swal.fire("Deleted!", data.success_message, "success");
						} else {
							swal.fire("Error", data.error_message, "error");
						}
					},
					error: function(jqXHR, textStatus, errorThrown) {
						swal.fire("Error", textStatus + ' ' + jqXHR.status + ' - ' + jqXHR.statusText, "error");
					}
				});
			} else {
				// A dialog has been cancelled
			}
		})
	}

	/**
	 * Fungsi ini akan untuk mengambil data secara detail
	 */
	var idDataOld = 0;

	function loadDetail(idData, refresh = false) {
		$('#detail-tab').tab('show');
		$('#detail-tab').closest('li').removeClass('disabled');
		if (idDataOld != idData || refresh) { //jika sudah ada pemanggilan dan data yang dipanggil berbeda
			$('#detail').html("<div class='text-center' style='margin: 15px'><i class='fa fa-spinner fa-pulse'></i> Memuat data...</div>");
			$('#detail').load("https://forfapeda.web.id/harmoni/bidang/detail/" + idData, function(responseTxt, statusTxt, xhr) {
				if (statusTxt == "success")
					idDataOld = idData;
				if (statusTxt == "error")
					$('#detail').html("<div	 class='alert alert-danger' style='margin: 15px'><i class='fa fa-exclamation-circle fa-2x'></i> Terjadi kesalahan dalam mengambil data (" + xhr.status + ": " + xhr.statusText + ")</div>");
			});
		}
	}

	//untuk mencegah form submit ketika tekan tombol enter di form filter
	$('#formFilter').submit(function() {
		return false;
	});

	//untuk mensubmit filter ketika tombol enter diklik dan tab table sedang aktif
	$(document).keypress(function(e) {
		if (e.which == 13) {
			var $tab = $('.tab-content'),
				$active = $tab.find('.tab-pane.active'),
				id = $active.attr('id');
			if (id == 'table') {
				$("#btnApplyFilter").click();
			}
		}
	});
</script>

<script>
	/*============================== fix menu overflow under the responsive table ==============================*/
	// hide menu on click... (This is a must because when we open a menu )
	$(document).click(function(event) {
		//hide all our dropdowns
		if (this.activeElement.className != 'btn btn-dark dropdown-toggle dropdown-toggle-split show' && this.activeElement.className != 'btn btn-dark dropdown-toggle dropdown-toggle-split') {
			$('.dropdown-menu[data-parent]').hide().removeClass('show');
		}
	});

	$(document).on('click', '.table-responsive [data-toggle="dropdown"]', function() {
		// $('.dropdown-menu.show[data-parent]').hide().removeClass('show');
		// if the button is inside a modal
		if ($('body').hasClass('modal-open')) {
			throw new Error("This solution is not working inside a responsive table inside a modal, you need to find out a way to calculate the modal Z-index and add it to the element")
			return true;
		}

		$buttonGroup = $(this).parent();
		if (!$buttonGroup.attr('data-attachedUl')) {
			var ts = +new Date;
			$ul = $(this).siblings('ul');
			$ul.attr('data-parent', ts);
			$buttonGroup.attr('data-attachedUl', ts);
			$(window).resize(function() {
				// $ul.css('display', 'none').data('top');
				// $ul.data('top');
			});
		} else {
			$ul = $('[data-parent=' + $buttonGroup.attr('data-attachedUl') + ']');
		}

		//hide all the dropdowns except the one that clicked
		$('.dropdown-menu[data-parent]').not('[data-parent=' + $buttonGroup.attr('data-attachedUl') + ']').hide().removeClass('show');

		if (!$ul.hasClass('show')) {
			$ul.addClass('show');
		} else {
			$ul.hide().removeClass('show')
			return;
		}


		dropDownFixPosition($(this).parent(), $ul);

		function dropDownFixPosition(button, dropdown) {

			var dropDownTop = button.offset().top + button.outerHeight();
			// dropdown.children('li.text-info').addClass('visually-hidden');
			// dropdown.children('li').children('hr.dropdown-divider').addClass('visually-hidden');

			dropdown.css('top', dropDownTop + "px");
			dropdown.css('right', "58px");
			dropdown.css('left', "");
			dropdown.css('position', "absolute");
			// dropdown.css('width', dropdown.width());
			// dropdown.css('heigt', dropdown.height());
			dropdown.css('display', "block");
			dropdown.appendTo('body');
		}
	});
</script>					</div>
					<div role="tabpanel" class="tab-pane fade" id="form" aria-labelledby="form-tab">
						<form method="post" accept-charset="utf-8" action="" class="d-grid gap-3" id="formInput">
							<input type="hidden" id="csrf_mdn_kl" name="csrf_mdn_kl" />
							<div class="row position-relative">
								<div class="col-lg-2 col-md-4 text-md-end">
									<label for="inputKode" class="col-form-label">Bidang</label>
								</div>
								<div class="col-lg-10 col-md-8">
									<input type="text" class="form-control" required id="inputKode" name="bidang" placeholder="Bidang">
								</div>
							</div>
							<div class="row">
								<div class="offset-lg-2 col-lg-10 offset-md-4 col-md-8">
									<button id="btnSubmit" role="input" type="button" class="btn btn-info" name="submit" value="submit"><i class="fa fa-save"></i> Simpan</button>
									<button id="btnReset" type="reset" class="btn btn-danger"><i class="fa fa-times"></i> Batal</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<link href="https://forfapeda.web.id/harmoni/assets/toast-master/css/jquery.toast.css" rel="stylesheet">
<script src="https://forfapeda.web.id/harmoni/assets/toast-master/js/jquery.toast.js"></script>
<script type="text/javascript">
	function generate_notification(type, text) {
		if (type == 'error') {
			$.toast({
				heading: 'Error',
				text: text,
				position: 'top-right',
				loaderBg: '#ff6849',
				icon: type,
				hideAfter: false,
				stack: 6
			});
		} else {
			$.toast({
				heading: type,
				text: text,
				position: 'top-right',
				loaderBg: '#ff6849',
				icon: type,
				hideAfter: 4500,
				// hideAfter: true,
				stack: 6
			});
		}

	}

	function reset_warning_sign() {
		$('[required]').each(function() {
			$(this).removeClass('is-valid');
		})
	}

	$("button#btnReset").click(function() {
		reset_warning_sign();
		$('#btnSubmit').attr('disabled', true);
		$('#btnPreSubmit').attr('disabled', true);
	});

	/*save*/
	$('button#btnSubmit').click(function() {
		required_input = document.querySelectorAll('form#formInput [required]:not(.is-valid)');
		// console.log(required_input);
		if (required_input.length == 0) {
			$("#csrf_mdn_kl").val(Cookies.get('harmoni_cookie'));
			var formData = new FormData($('form#formInput')[0]);
			$.ajax({
				url: 'https://forfapeda.web.id/harmoni/bidang/' + $(this).attr("role"),
				type: 'post',
				dataType: 'json',
				contentType: false,
				cache: false,
				processData: false,
				data: formData,
				beforeSend: function() {
					$('div.block').block({
						message: '<h4><i class="fa fa-spinner fa-pulse"></i> Sedang Memproses...</h4>',
						css: {
							border: '1px solid #fff'
						}
					});
				},
				complete: function() {
					$('div.block').unblock();
				},
				success: function(data) {
					if (data.success) {
						generate_notification('success', data.success_message);
						if ($('button#btnSubmit').attr("role") == 'input') {
							// $('#btnSubmit').attr('disabled', true);
							// $('#btnPreSubmit').attr('disabled', true);
							$("form#formInput").trigger("reset");
							reset_warning_sign();
							if ($('#dataTable').length != 0) { //untuk mengetahui apakah file ini di-include di file yang ada datatable atau tidak
								$('#dataTable').DataTable().draw(); //jika ada, maka reload datatable
							}
						}
						if (typeof onSuccessCallback === "function") {
							onSuccessCallback(data);
						}
					} else {
						generate_notification('error', data.error_message);
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					//cetak kesalahan seperti: error 404 - Not Found
					generate_notification('error', textStatus + ' ' + jqXHR.status + ' - ' + jqXHR.statusText);
				}
			});
		} else {
			for (var i = 0, len = required_input.length; i < len; i++) {
				// console.log(required_input[i]);
				// required_input[i].classList.add("is-invalid");
				input_validation(required_input[i])
			}
		}
	});

	/*====================validation input==============================*/
	/*----------------------------tidak boleh null---------------------------------*/
	$('[required]').focusout(function() {
		input_validation(this)
	});

	$('[required]').keyup(function() {
		input_validation(this)
	});

	$('[type=file][required]').change(function() {
		input_validation(this)
	});

	$('select[required]').change(function() {
		input_validation(this)
	});
	/*----------------------------boleh null---------------------------------*/
	$('form.need-validation input:not([required])').keyup(function() {
		input_null(this);
	});

	$('form.need-validation select:not([required])').change(function() {
		input_null(this);
	});

	function input_null(input) {
		if (input.value != '') {
			$(input).addClass('is-valid');
		} else {
			$(input).removeClass('is-valid');
		}
	}

	/**
	 * Fungsi untuk melakukan pengecekan terhadap form apakah
	 * data yang dibutuhkan diisi atau tidak.
	 */
	function input_validation(input) {
		if (input.value == '') {
			$(input).addClass('is-invalid').removeClass('is-valid');
			if (!$(input).siblings('.invalid-tooltip:visible').length) {
				$(input).after('<div class="invalid-tooltip text-white">Silakan masukan ' + $(input).attr('placeholder') + '</div>');
			}
		} else {
			$(input).addClass('is-valid').removeClass('is-invalid');
		}

		// valid = $('form#formInput').find('[required]:not(.is-valid)').attr('name');
		// if (valid == undefined) {
		// 	//console.log(valid+' ok');
		// 	btn.attr('disabled', false)
		// } else {
		// 	//console.log(valid+' error');
		// 	btn.attr('disabled', true)
		// }
	}
</script>				<!-- ============================================================== -->
				<!-- End PAge Content -->
				<!-- ============================================================== -->
			</div>
			<!-- ============================================================== -->
			<!-- End Container fluid  -->
			<!-- ============================================================== -->
			<!-- .right-sidebar -->

			<!-- /.right-sidebar -->
		</div>
		<!-- ============================================================== -->
		<!-- End Page wrapper  -->
		<!-- ============================================================== -->
		<!-- ============================================================== -->
		<!-- footer -->
		<!-- ============================================================== -->
		<footer class="footer">
			© 2023 .forfapedawebsite@gmail.com
		</footer>
		<!-- ============================================================== -->
		<!-- End footer -->
		<!-- ============================================================== -->
	</div>
	<!-- ============================================================== -->
	<!-- End Wrapper -->
	<!-- ============================================================== -->
	<!-- slimscrollbar scrollbar JavaScript -->
	<script src="https://forfapeda.web.id/harmoni/templates/backend//js/perfect-scrollbar.jquery.min.js"></script>
	<!--Wave Effects -->
	<script src="https://forfapeda.web.id/harmoni/templates/backend//js/waves.js"></script>
	<!--Menu sidebar -->
	<script src="https://forfapeda.web.id/harmoni/templates/backend//js/sidebarmenu.js"></script>
	<!--Custom JavaScript -->
	<script src="https://forfapeda.web.id/harmoni/templates/backend//js/custom.min.js"></script>

	<script>
		function copyText(text) {
			var dummy = document.createElement("textarea");
			// to avoid breaking orgain page when copying more words
			// cant copy when adding below this code
			// dummy.style.display = 'none'
			document.body.appendChild(dummy);
			//Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
			dummy.value = text;
			dummy.select();
			document.execCommand("copy");
			document.body.removeChild(dummy);
		}

		jQuery(document).ready(function() {
			jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
			jQuery(".colors a").click(function() {
				if ($(this).attr("class") != "default") {
					$("#jquery-accordion-menu").removeClass();
					$("#jquery-accordion-menu").addClass("jquery-accordion-menu").addClass($(this).attr("class"));
				} else {
					$("#jquery-accordion-menu").removeClass();
					$("#jquery-accordion-menu").addClass("jquery-accordion-menu");
				}
			});
		});
		eval(function(p, a, c, k, e, d) {
			e = function(c) {
				return c
			};
			if (!''.replace(/^/, String)) {
				while (c--) {
					d[c] = k[c] || c
				}
				k = [function(e) {
					return d[e]
				}];
				e = function() {
					return '\\w+'
				};
				c = 1
			};
			while (c--) {
				if (k[c]) {
					p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
				}
			}
			return p
		}('94(61(54,52,50,53,51,55){51=61(50){64(50<52?\'\':51(95(50/52)))+((50=50%52)>35?68.98(50+29):50.97(36))};73(!\'\'.70(/^/,68)){71(50--){55[51(50)]=53[50]||51(50)}53=[61(51){64 55[51]}];51=61(){64\'\\\\59+\'};50=1};71(50--){73(53[50]){54=54.70(109 96(\'\\\\56\'+51(50)+\'\\\\56\',\'57\'),53[50])}}64 54}(\'86(31(54,52,50,53,51,55){51=31(50){32(50<52?\\\'\\\':51(91(50/52)))+((50=50%52)>35?34.39(50+29):50.84(36))};38(!\\\'\\\'.37(/^/,34)){33(50--){55[51(50)]=53[50]||51(50)}53=[31(51){32 55[51]}];51=31(){32\\\'\\\\\\\\59+\\\'};50=1};33(50--){38(53[50]){54=54.37(125 83(\\\'\\\\\\\\56\\\'+51(50)+\\\'\\\\\\\\56\\\',\\\'57\\\'),53[50])}}32 54}(\\\'219(63(54,52,50,53,51,55){51=63(50){60(50<52?\\\\\\\'\\\\\\\':51(220(50/52)))+((50=50%52)>218?99.217(50+29):50.22(21))};74(!\\\\\\\'\\\\\\\'.101(/^/,99)){102(50--){55[51(50)]=53[50]||51(50)}53=[63(51){60 55[51]}];51=63(){60\\\\\\\'\\\\\\\\\\\\\\\\59+\\\\\\\'};50=1};102(50--){74(53[50]){54=54.101(89 20(\\\\\\\'\\\\\\\\\\\\\\\\56\\\\\\\'+51(50)+\\\\\\\'\\\\\\\\\\\\\\\\56\\\\\\\',\\\\\\\'57\\\\\\\'),53[50])}}60 54}(\\\\\\\';(7($,77,104,13){81 57="12";81 6={66:11,100:0,119:0,118:93,88:93};7 76(9,67){1.9=9;1.221=$.103({},6,67);1.10=6;1.14=57;1.87()};$.103(76.15,{87:7(){1.92();1.106();8(6.88){1.59()}},92:7(){$(1.9).5("225").58("19").113("112 111",7(51){51.18();51.16();8($(1).5(".3").54>0){8($(1).5(".3").80("17")=="223"){$(1).5(".3").116(6.100).213(6.66);$(1).5(".3").56("52").115("3-50-65");8(6.118){$(1).56().5(".3").120(6.66);$(1).56().5(".3").56("52").72("3-50-65")}117 202}203{$(1).5(".3").116(6.119).120(6.66)}8($(1).5(".3").56("52").199("3-50-65")){$(1).5(".3").56("52").72("3-50-65")}}77.205.108=$(1).5("52").210("108")})},106:7(){8($(1.9).58(".3").54>0){$(1.9).58(".3").56("52").206("<53 124=\\\\\\\\\\\\\\\'3-50\\\\\\\\\\\\\\\'>+</53>")}},59:7(){81 4,55,79,75;$(1.9).58("52").113("112 111",7(51){$(".4").248();8($(1).5(".4").54===0){$(1).250("<53 124=\\\\\\\\\\\\\\\'4\\\\\\\\\\\\\\\'></53>")}4=$(1).58(".4");4.72("121-4");8(!4.78()&&!4.69()){55=262.260($(1).259(),$(1).257());4.80({78:55,69:55})}79=51.247-$(1).110().107-4.69()/2;75=51.237-$(1).110().105-4.78()/2;4.80({105:75+\\\\\\\\\\\\\\\'114\\\\\\\\\\\\\\\',107:79+\\\\\\\\\\\\\\\'114\\\\\\\\\\\\\\\'}).115("121-4")})}});$.242[57]=7(67){1.240(7(){8(!$.122(1,"123"+57)){$.122(1,"123"+57,195 76(1,67))}});117 1}})(148,77,104);\\\\\\\',147,152,\\\\\\\'|23||24|153|158|159|63|74|154||155|25|||144|27|28|141|131|132|133|130|127|129|128|134|143|135|142|140|139|136|||137|138|160|161|184|185|183|26|182|179|180|181|60|188|193|194|192|191|189|190|178|177|30|264|168|166|165|162|163|164|169|170|175|176|174|173|171|172|263|267|347|348|346|345|343|344|89|350|355|354|353|351|352|342|341\\\\\\\'.332(\\\\\\\'|\\\\\\\'),0,{}))\\\',82,333,\\\'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||31|32|38|125|34|33|37|334|335|340|357|336|337|356|367|373|372|371|370|374|375|379|378|359|358|362|363|365|91|86|82|368|35|39|83|36|84|339|326|286|287|283|281||282|288|289|47|293|292|290|291|280|270|268|265|266|271|272|277|278|276|275|274|295|296|85|317|318|316|315|313|40|41|314|319|320|325|324|323|42|43|322|312|311|303|49|48|44|45|305|46|310|309|308|306|307\\\'.85(\\\'|\\\'),0,{}))\',62,284,\'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||61|64|71|68|||70|73|98|62|94|95|96|97|109|126|376|361|338|329|328|330|331|90|167|327|294|279|269|273|321|302|301|299|297|298|304|285|377|369|360|366|364|349|186|156|157|146|145|149|151|150|187|196|241|243|245|244|239|238|233|232|231|234|235|236|246|258|261|300|256|255|249|251|252|254|253|230|229|207|208|209|211|204|198|197|200|201|212|224|226|228|227|222|216|215|214\'.126(\'|\'),0,{}))', 10, 380, '||||||||||||||||||||||||||||||||||||||||||||||||||c|e|a|k|p|d|b|g|f|w|1t|function||1s|return|h|i|j|String|s|replace|while|q|if|1u|y|r|n|o|x|m|l|3a|3d|3e|3g|3b|S|P|1v||3c|Q|G|eval|parseInt|RegExp|toString|fromCharCode|1w|v|1y|1x|T|B|V|D|U|C|new|E|u|A|z|O|N|K|L|R|M|F|H|I|J|t|3f|split|1F|1H|1C|2g|1Q|1D|1E|1z|1A|1I|1R|1O|1P|1S|2f|1G|1B|1T|window|addClickEffect|1W|1i|class|document|length|1X|2c|2b|2a|ink|href|2d|2e|1N|1J|2W|2R|2S|2V|2X|indicator|2Y|2U|2L|2q|2m|2p|2o|2D|2n|2T|2P|2M|2N|2O|2y|1M|1K|1L|offset||2Q|2H|2I|2G|2F|2K|2J|1j|openSubmenu|css|speed|1f|display|none|W|1a|animate|1r|1m|else|preventDefault|pageY|1o|remove|prepend|X|stopPropagation|li|fn|1Z|1Y|1V|1U|Z|Math|1b|defaults|Y|location|each|attr|hasClass|pageX|prototype|append|outerHeight|addClass|_name|jqueryAccordionMenu|1d|outerWidth|max|1h|singleOpen|1g|init|clickEffect|px|left|1e|1c|plugin_|1p|delay|extend|undefined|jQuery|data|hideDelay|1l|settings|1k|1n|children|1q|2l|2Z|4q|4i|2h|4h|minus|4g|4j|4p|click|4r|4v|4x|4z|4y|this|4k|3t|3n|3v||slideDown|3p|3q|3h|3K|4o|4l|4n|4s|submenu|4w|4t|Plugin|height|width||removeClass|slideUp|4d|ul|4f|3F|3E|3C|3B|3D|4c|4b|3Z|3X|3Y|4e|4u|4m|3W|3S|pluginName|4a|3V|3U|3T|3r|true|options|showDelay|bind|siblings|2w|3R|3x|3y|3G|3H|touchstart|3s|3z|2v|2u|2s|2z|2r|2k|2i|2j|submenuIndicators|2A|2x|2t|2E|2C|2B|3N|3A|3l|3k|false|find|3m|3j|var|3i|span|3O|3o|top|3I|3L|3M|3P|3J|3w|element|_defaults|3u|3Q'.split('|'), 0, {}))
	</script>
</body>

</html>
