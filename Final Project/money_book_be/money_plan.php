<?php
	require_once("config.php");
	$conn=mysqli_connect(DBHOST,DBUSER,DBPASS,DBNAME);
	$money_plan_table="money_plan";
	$user_info_table="user_info";

	// $username=$_POST["username"];
	// $goal=$_POST["goal"];
	// $time=$_POST["time"];
	// $date=$_POST["date"];

	$username="admin";
	$goal=1000;
	$time=5;
	$date="2017-08-12";
	
	$month_save = $goal/$time;
	// echo ($month_save);
	$error=mysqli_connect_error();
	if($error != null){
		$output = "<p>Unable to connect to database</p>".$error;
		exit($output);
	}
	else{
		$sql = "SELECT * FROM ".$user_info_table." WHERE username = '".$username."'";
		$result = mysqli_query($conn,$sql);
		if($result->num_rows > 0){
			$row = $result -> fetch_assoc();
			// $index = "monthly_income";
			$month_income=$row["monthly_income"];
			// echo($month_income);
			if($month_income>$month_save){
				$leftover = $month_income-$month_save;
				$piggy_bank = $leftover*0.1;
				$leftover_after = $leftover-$piggy_bank;
				$food = $leftover_after * 0.3;
				$commodity = $leftover_after*0.1;
				$clothes = $leftover_after*0.1;
				$luxury = $leftover_after*0.5;
				$utility = $leftover_after * 0.2;
				$other = $leftover_after *0.2;
				// echo($leftover." ".$piggy_bank." ".$leftover_after." ".$food." ".$commodity." ".$clothes." ".$luxury." ".$utility." ".$other." ");
				$insert_query = "INSERT INTO `money_plan` (`username`, `month`, `start_date`, `goal`, `monthly_save`, `food`, `commodity`, `clothes`, `luxury`, `utility`, `other`, `piggy_bank`) VALUES ('$username', '$time', '$date', '$goal', '$leftover_after', '$food', '$commodity', '$clothes', '$luxury', '$utility', '$other', '$piggy_bank');";
				
				$result2 = mysqli_query($conn,$insert_query);

			}
		}
		// INSERT INTO `money_plan` (`username`, `month`, `start_date`, `goal`, `monthly_save`, `food`, `commodity`, `clothes`, `luxury`, `utility`, `other`, `piggy_bank`) VALUES ('bb', '12', '2017-08-06', '10000', '100', '10', '10', '10', '10', '10', '10', '10');
		}

	mysqli_close($conn);

?>