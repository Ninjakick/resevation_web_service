<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Utilisateur_controller extends CI_Controller {
	public function getlistutilisateur()
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
	    echo json_encode(["client"=>$this->User_model_api->getlistclient(), "user"=>$this->User_model_api->getlistuser()]);
	}
	public function deleteclient()
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
	    	$id = $request->id;
	    	$this->db->delete("client", ["id"=>intval($id)]);
	    	echo json_encode(["stat"=>true]);
	    }
	}
	public function editclient()
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
			$data = ["nom"=> $request->nom, "mdp"=> $request->mdp, "prenom"=>$request->prenom, "date_naissance"=>$request->date_naissance, "adresse"=>$request->adress,"numero"=>$request->numero];
			$this->User_model_api->modificationclient($data, $request->id);
			echo json_encode(["error"=> false]);
	    }
	}
	public function nouveaucoperative()
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
	    	$insertion = ["nom"=> $request->nom, "adresse"=> $request->adress];
	    	$this->db->insert("cooperative", $insertion);
			$id = $this->db->insert_id();
			$data = ["login"=> $request->login, "mdp"=> $request->mdp, "type"=>$request->type, "adresse"=>$request->adress, "id_cooperative"=> $id];
			$this->db->insert("user", $data);
			echo json_encode(["error"=> false]);
	    }
	}
	public function editcoperative()
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
	    	$insertion = ["nom"=> $request->nom, "adresse"=> $request->adress];
	    	$this->User_model_api->modificationcooperative($insertion, $request->id_cooperative);
			$data = ["login"=> $request->login, "mdp"=> $request->mdp, "type"=>$request->type, "adresse"=>$request->adress];
			$this->User_model_api->modificationuser($data, $request->id);
			echo json_encode(["error"=> false]);
	    }
	}
	public function deleteuser()
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
	    	$id = $request->id;
	    	$id_cooperative = $request->id_cooperative;
	    	$this->db->delete("user", ["id"=>intval($id)]);
	    	$this->db->delete("cooperative", ["id"=>intval($id_cooperative)]);
	    	echo json_encode(["stat"=>true]);
	    }
	}
	public function getlistclient()
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
	    echo json_encode(["client"=>$this->User_model_api->getlistclient()]);
	}
}
?>