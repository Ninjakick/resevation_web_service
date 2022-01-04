<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_controller extends CI_Controller {
	public function authent()
	{
		if (isset($_SERVER['HTTP_ORIGIN'])) {

	        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");

	        header('Access-Control-Allow-Credentials: true');

	        header('Access-Control-Max-Age: 86400');    // cache for 1 day

		    }
	    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

	        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))

	            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");        

	       if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))

	            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

	        exit(0);
	    }
	    $datainput = file_get_contents("php://input");
	    if (isset($datainput)) {
	      $request = json_decode($datainput);
	      $username = $request->username;
	      $password = $request->password;
	      $data = ["numero"=> $username, "mdp"=> $password];
	      $resul = $this->User_model_api->authentification($data);
	      if ($resul) {
	      	$resul->type = "Client";
	      	echo json_encode($resul);
	      }
	      else{
	      	$data = ["login"=> $username, "mdp"=> $password];
	      	$resul = $this->User_model_api->authentificationdeux($data);
	      	if ($resul) {
				echo json_encode($resul);
			}
		    else{
	      		echo json_encode("Invalid");
	      	}
	      }
	   	}
	}
	public function index()
	{
		$this->load->view("welcome_message");
	}
	public function inscription()
	{
		if (isset($_SERVER['HTTP_ORIGIN'])) {

	        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");

	        header('Access-Control-Allow-Credentials: true');

	        header('Access-Control-Max-Age: 86400');    // cache for 1 day

		    }
	    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

	        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))

	            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");        

	       if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))

	            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

	        exit(0);
	    }
	    $datainput = file_get_contents("php://input");
	    if (isset($datainput)) {
	      $request = json_decode($datainput);
	      $numero = $request->numero;
	      $data = ["numero"=> $numero];
	      $resul = $this->User_model_api->authentification($data);
	      if ($resul) {
	      	echo json_encode(["error"=> true, "message"=> "Ce numero de télephone existe déja"]);
	      }
	      else{
	      	$data = ["nom"=> $request->nom, "mdp"=> $request->mdp, "prenom"=>$request->prenom, "date_naissance"=>$request->date_naissance, "adresse"=>$request->adress,"numero"=>$numero];
	      	$this->User_model_api->insertionclient($data);
			echo json_encode(["error"=> false]);
	      }
	   	}
	}
}
?>