<?php
$url = (key_exists('PATH_INFO',$_SERVER)) ? $_SERVER['PATH_INFO'] : "";
if ($url == "" || $url == "/") {
    echo "Accueil";
} else {
    echo str_replace("_"," ",ucfirst(substr($url,1)));
}