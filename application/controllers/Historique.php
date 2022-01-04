<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Historique extends CI_Controller {
	public function getdata()
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
		echo json_encode(["membre"=>$this->Livre_model->get_hitorique(), "livre"=>$this->Livre_model->get_hitorique_for_livre()]);
	}
	public function index()
	{
		$this->load->view("welcome_message")
	}
}
?>