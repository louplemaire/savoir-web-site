<?php
// $url = (key_exists('REDIRECT_URL',$_SERVER)) ? $_SERVER['REDIRECT_URL'] : "";
$url = (key_exists('PATH_INFO',$_SERVER)) ? $_SERVER['PATH_INFO'] : "";
if ($url == "" || $url == "/") {
    include_once 'pages/accueil.php';
} else {
    include_once 'pages'.$url.'.php';
}