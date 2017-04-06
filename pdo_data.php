<?php

$data = [];

$dbh = new PDO('mysql:host=localhost;dbname=dbname', "user", "pass");
$sql = $dbh->query('SELECT * FROM data'); 	

$result = $sql->fetchAll();

echo json_encode($result );