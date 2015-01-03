<?php

    // get userlist

    // connect to db
    $mysqli = new mysqli('localhost', 'root', '', 'reggae');
    if ($mysqli->connect_errno) {
        echo 'Failed to connect to MySQL: ' . $mysqli->connect_errno;
    }

    // query db for user_name and display_name for all user records
    $dataObject = $mysqli->query('SELECT * FROM discography');
    while($row = $dataObject->fetch_assoc()) {
        $records[] = $row;
    }

    // return results
    echo json_encode($records);

?>