<?php 
	include('core/config.php');
	include('core/reference.php');
	include('core/inc/setup.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<?php include('build/model/object/head.php');?>
		<?php include('core/inc/css.php');?>
		<?php include('core/inc/headjs.php');?>
	</head>
	<body>
		<header id="header">
			<?php include('build/model/object/header.php');?>
		</header>
		<section id="content">
        	<?php include('build/model/page/'.$ID.'.php');?>
		</section>
		<footer id="footer">
			<?php include('build/model/object/footer.php');?>
		</footer>
		<?php include('core/inc/js.php');?>
	</body>
</html>