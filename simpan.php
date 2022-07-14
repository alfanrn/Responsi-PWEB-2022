<?php
	include ("index.html");
	$nama=$_POST["nama"];
	$fileku=fopen("data.txt","a");
	$data="Selamat Datang ".$nama."\n";
	fwrite($fileku, $data);
	echo "\n<h1 align=center>";
	include ("data.txt");
	echo "</h1>\n";
	echo "<h2 align=center>Terima Kasih Telah Berkunjung</h2>";
	file_put_contents("data.txt", "");
	fclose($fileku);
?>