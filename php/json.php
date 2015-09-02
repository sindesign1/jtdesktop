<?php
header('Content-Type: application/json');
	$data_array = array();

	$data_array['user'] = array(
		
			'user_id' => '99',
			'title' => 'Miss',
			'fname' => 'Hannah',
			'lname' => 'Brown',
			'DOB' => '10/06/1987',
			'email' => 'hannah@email.com.au',
			'userType' => 'staff'
		);

	$data_array['staffimg'][0] = array(
			
			'user_id' => '99',
			'url' => '../img/hannah.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	$data_array['centre'][0] = array(
		
			'centreId' => '183',
			'centreName' => 'Whirlybirds Learning Centre',
			'user_id' => '99',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['centre'][1] = array(
		
			'centreId' => '184',
			'centreName' => 'Hullahoops Learning Centre',
			'user_id' => '99',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['room'][0] = array(
		
			'roomId' => '100',
			'centreId' => '183',
			'centreName' => 'Bunnies Room',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['room'][1] = array(
		
			'roomId' => '101',
			'centreId' => '183',
			'centreName' => 'Whitebears Room',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['room'][2] = array(
		
			'roomId' => '102',
			'centreId' => '183',
			'centreName' => 'Billygoat Room',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['room'][3] = array(
		
			'roomId' => '103',
			'centreId' => '184',
			'centreName' => 'Kangaroo Room',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['room'][4] = array(
		
			'roomId' => '104',
			'centreId' => '184',
			'centreName' => 'Koala Room',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['room'][5] = array(
		
			'roomId' => '105',
			'centreId' => '184',
			'centreName' => 'Platypus Room',
			'childrenIds' => array(
					1,
					2,
					3,
					4
				)
		);

	$data_array['centreimg'][0] = array(
			
			'centreId' => '183',
			'url' => '../img/iconWhirlybirds.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	$data_array['centreimg'][1] = array(
			
			'centreId' => '184',
			'url' => '../img/iconHullahoops.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	$data_array['children'][0] = array(
		
			'childId' => '1',
			'fname' => 'Dixon',
			'lname' => 'Butts',
			'DOB' => '10/06/1987'
		);

	$data_array['children'][1] = array(
		
			'childId' => '2',
			'fname' => 'Harry',
			'lname' => 'Ballsonya',
			'DOB' => '10/06/1987'
		);

	$data_array['children'][2] = array(
		
			'childId' => '3',
			'fname' => 'Lou',
			'lname' => 'Sanus',
			'DOB' => '10/06/1987'
		);

	$data_array['children'][3] = array(
		
			'childId' => '4',
			'fname' => 'Ran',
			'lname' => 'Sidass',
			'DOB' => '10/06/1987'
		);


	$data_array['images'][0] = array(
		
			'url' => '../img/selfie.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	$data_array['images'][1] = array(
		
			'url' => '../img/selfie.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	$data_array['images'][2] = array(
		
			'url' => '../img/selfie.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	$data_array['images'][3] = array(
		
			'url' => '../img/selfie.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	$data_array['images'][4] = array(
		
			'url' => '../img/selfie.png',
			'medImg' => '../img/med-selfie.png',
			'smlImg' => '../img/sml-selfie.png'
		);

	send_status($data_array);



	function send_status($response) {
		// $response = encode_array($response);
		if ( !empty($_GET['callback']) ) {
			echo $_GET['callback'] . '(' . json_encode($response) . ')';
		}
		else {
			echo json_encode($response);
		}
	}