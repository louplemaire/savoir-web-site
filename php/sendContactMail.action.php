<?php
$title = 'Prise de contact de '.$_POST['name'];
$content = 'De : '.$_POST['name'].' : '.$_POST['email'].'

'.$_POST['text'];
$header = 'Reply-To: '.$_POST['email'];
mail('romain.penchenat@gmail.com',$title,$content,$header);
header('Location: /integrate');