// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	// pindah scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	});

	// menghentikan fungsi a pada html
	e.preventDefault();
});