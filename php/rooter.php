<?php
$url = (key_exists('PATH_INFO',$_SERVER)) ? $_SERVER['PATH_INFO'] : "";
if ($url == "" || $url == "/") {
    include_once 'pages/accueil.php';
} else {
    include_once 'pages'.$_SERVER['PATH_INFO'].'.php';
}