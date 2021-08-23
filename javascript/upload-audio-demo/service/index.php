<?php
    include "./Request.php";
    include "./Response.php";

    $request = new Request();
    $response = new Response();

    $data = $request::getRequest();
    echo $response::serndResponse($data);
?>