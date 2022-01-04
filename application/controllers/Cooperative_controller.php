<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Cooperative_controller extends CI_Controller {
	public function getlisttarif()
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
	    	$id_cooperative = $request->id_cooperative;
	    	echo json_encode(["tarif"=>$this->Cooperative_model_api->getlisttarif(["id_cooperative"=>intval($id_cooperative)])]);
	    }
	    
	}
	public function ajouttarif()
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
	    	$datsd = $this->Cooperative_model_api->getlisttarif(["lieu_depart"=>$request->lieu_depart, "lieu_arrive"=>$request->lieu_arrive,"id_cooperative" => $request->id_cooperative]);
	    	if ($datsd) {
	    		echo json_encode(["error"=> true, "message"=> "Ce tarif existe déja"]);
	    	}
	    	else{
	    		$this->db->insert("tarif", ["lieu_depart"=>$request->lieu_depart,"lieu_arrive"=>$request->lieu_arrive,"montant"=>$request->montant,"id_cooperative"=>$request->id_cooperative]);
	    		echo json_encode(["error"=> false]);
	    	}
	    }

	}
	public function edittarif()
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
	    	$datsd = $this->Cooperative_model_api->edittarif($request->id, ["lieu_depart"=>$request->lieu_depart, "lieu_arrive"=>$request->lieu_arrive,"montant"=>$request->montant]);
	    	echo json_encode(["error"=> false]);
	    }
	}
	public function supprimetarif()
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
	    	$this->db->delete("tarif", ["id"=>intval($id)]);
	    	echo json_encode(["stat"=>true]);
	    }
	}
	public function getlistvoiture()
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
	    	$id_cooperative = $request->id_cooperative;
	    	echo json_encode(["voiture"=>$this->Cooperative_model_api->getlistvoiture(["id_cooperative"=>intval($id_cooperative)])]);
	    }
	}
	public function supprimevoiture()
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
	    	$this->db->delete("voiture", ["id"=>intval($id)]);
	    	echo json_encode(["stat"=>true]);
	    }
	}
	public function ajoutvoiture()
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
	    	$datsd = $this->Cooperative_model_api->getlistvoiture(["numero"=>$request->numero]);
	    	if ($datsd) {
	    		echo json_encode(["error"=> true, "message"=> "Cette voiture existe déja"]);
	    	}
	    	else{
	    		$this->db->insert("voiture", ["numero"=>$request->numero,"marque"=>$request->marque,"nombre_place"=>$request->nombre_place,"id_cooperative"=>$request->id_cooperative]);
	    		echo json_encode(["error"=> false]);
	    	}
	    }
	}
	public function editvoiture()
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
	    	$datsd = $this->Cooperative_model_api->editvoiture($request->id, ["numero"=>$request->numero, "nombre_place"=>$request->nombre_place,"marque"=>$request->marque]);
	    	echo json_encode(["error"=> false]);
	    }
	}
	public function getlistvoyage()
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
	    	$id_cooperative = $request->id_cooperative;
	    	echo json_encode(["voyage"=>$this->Cooperative_model_api->getlistvoyage(intval($id_cooperative))]);
	    }
	}
	public function supprimevoyage()
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
	    	$this->db->delete("voyage", ["id"=>intval($id)]);
	    	echo json_encode(["stat"=>$id]);
	    }
	}
	public function getdataforvoyage()
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
	    	$id_cooperative = $request->id_cooperative;
	    	echo json_encode(["voiture"=>$this->Cooperative_model_api->getlistvoiture(["id_cooperative"=>intval($id_cooperative)]), "tarif"=>$this->Cooperative_model_api->getlisttarif(["id_cooperative"=>intval($id_cooperative)])]);
	    }
	}
	public function ajoutvoyage()
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
	    	$datsd = $this->Cooperative_model_api->getlistvoyage(["id_voiture"=>$request->id_voiture, "date_dep"=>$request->date_dep]);
	    	if ($datsd) {
	    		echo json_encode(["error"=> true, "message"=> "Ce voyage existe déja"]);
	    	}
	    	else{
	    		$this->db->insert("voyage", ["id_voiture"=>$request->id_voiture,"date_dep"=>$request->date_dep,"date_arr"=>$request->date_arr, "id_tarif"=>$request->id_tarif]);
	    		echo json_encode(["error"=> false]);
	    	}
	    }
	}
	public function editvoyage()
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
	    	$datsd = $this->Cooperative_model_api->editvoyage($request->id, ["id_voiture"=>$request->id_voiture, "date_dep"=>$request->date_dep,"date_arr"=>$request->date_arr, "id_tarif"=>$request->id_tarif]);
	    	echo json_encode(["error"=> false]);
	    }
	}
	public function getlistvoyageaveccooperative()
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
	    echo json_encode(["voyage"=>$this->Cooperative_model_api->getlistvoyageaveccooperative()]);
	}
	public function getlistplace()
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
	    	echo json_encode(["place"=>$this->Cooperative_model_api->getlistplace(["id_voyage"=>$request->id_voyage])]);
	    }
	}
	public function sendreservation()
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
    		$this->db->insert("reservation", ["id_voyage"=>$request->id_voyage,"place"=>$request->place,"frais_paye"=>$request->frais_paye, "id_client"=>$request->id_client, "reste_paye"=> $request->reste_paye]);
    		echo json_encode(["error"=> false]);
	    }
	}
}
?>
