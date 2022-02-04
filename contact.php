<?php
/*
    if (isset($_POST['submit']) && !empty($_POST['name'])){

        $name = $_POST['name'];
        $from = "user@example.com";
        $to = "your@example.com";

        $subject = "add this";
        $headers="From: $name <$from>";

        $sent = mail($to, $subject, $name, $headers);

        if($sent) {

            echo "Success";

           } else {
            echo 'Sorry, your message could not be sent.';
           }
    } // brace for submit conditional statement

*/
@ini_set('default_charset', 'UTF-8');
$errors = '';
$myemail = 'schuybreach@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	//header('Location: contact.html');
}
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Schuyler Meyer /\\ SchuyTyr Media &mdash; Contact">
	<meta name="keywords" content="Contact,Email,Social Media,Message,Photography,Digital Art,Game Design,VR,Software,Engineering,Animation,Schuyler Meyer,Schuyler,Meyer,Skyler,SchuyTyr,SchuyTyr Art,SchuyTyr Media,Design,Developer">
	<meta name="author" content="Schuyler Meyer">
	<title>SM - Contact</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="stylesSM.css" rel="stylesheet">
	<link href="stylesSM2.css" rel="stylesheet">
	<link href="src/icons/SMLogo2022.ico" rel="shortcut icon">
	<link href="https://fonts.googleapis.com/css?family=Audiowide|Orbitron|Merienda&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://use.typekit.net/ozq0omu.css"> <!-- Adobe font - nasalization -->
	<script src="src/js/footer-main.js" type="text/javascript" defer></script>
</head>

<body>
	<header>
		<h1 title="Schuyler Meyer">
			<a href="https://www.schuylermeyer.com">
				<img alt="Schuyler Meyer" class="imgLogo" src="src/img/SMSignLogo2021.png">
			</a>
		</h1>
		<p class="topDesc"><u>&nbsp;&nbsp;Photography &#8280; Design &#8280; Game Developer &#8280; VR &#8280; Software Engineering &#8280; Animation&nbsp;&nbsp;</u></p>
		<hr class="rounded">

		<nav>
			<!-- Copy / Paste for more buttons or decoration
			<button class="pageButtonFalse">
				<div class="pageButtonTxt">&nbsp;&mdash;&mdash;&mdash;&mdash;&nbsp;</div>
			</button>
			-->
			<button class="pageButtonSkew" onclick="window.location.href='aboutSM.html';" title="About the Schuy">
				<div class="pageButtonTxt">&nbsp;About&nbsp;</div>
			</button>
			<button class="pageButtonSkew" style="cursor:wait;" title="Coming Soon!">
				<div class="pageButtonTxt">&nbsp;Contact&nbsp;</div>
			</button>
			<button class="pageButtonSkew" onclick="window.open('https://schuybox.wordpress.com/','_blank')" title="To the SchuyBox!">
				<div class="pageButtonTxt">&nbsp;Blog&nbsp;</div>
			</button>
		</nav>

		<hr class="rounded">
	</header>
  <br><br>

  <!-- This page is displayed only if there is some error -->
  <?php
  echo nl2br($errors);
  ?>

  <br><br>

  <template id="footer-main">
  </template>

  </body>
</html>
