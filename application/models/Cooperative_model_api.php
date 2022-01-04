<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cooperative_model_api extends CI_Model {
	public function getlisttarif($data)
	{
		$this->db->select("*");
		$this->db->from("tarif");
		$this->db->where($data);
		$query = $this->db->get();
		return $query->result();
	}
	public function edittarif($id, $data)
	{
		$this->db->where('id', $id);
		$this->db->update('tarif', $data);
	}
	public function getlistvoiture($data)
	{
		$this->db->select("*");
		$this->db->from("voiture");
		$this->db->where($data);
		$query = $this->db->get();
		return $query->result();
	}
	public function editvoiture($id, $data)
	{
		$this->db->where('id', $id);
		$this->db->update('voiture', $data);
	}
	public function getlistvoyage($data)
	{
		/*$this->db->select("*");
		$this->db->from("voyage");
		$this->db->where($data);
		$this->db->join("tarif", "tarif.id = voyage.id_tarif");
		$this->db->join("voiture", "voiture.id = voyage.id_voiture");
		$this->db->order_by("voyage.id", "DESC");
		$query = $this->db->get();
		return $query->result();*/
		$query = $this->db->query("SELECT voyage.id, voyage.date_arr, voyage.date_dep, voyage.id_voiture, voyage.id_tarif, tarif.lieu_arrive, tarif.lieu_depart, tarif.montant, voiture.marque, voiture.nombre_place, voiture.numero, tarif.id_cooperative FROM voyage INNER JOIN tarif ON tarif.id = voyage.id_tarif INNER JOIN voiture ON voiture.id = voyage.id_voiture WHERE voiture.id_cooperative = ".$data);
		return $query->result_array();
	}
	public function editvoyage($id, $data)
	{
		$this->db->where('id', $id);
		$this->db->update('voyage', $data);
	}
	public function getlistvoyageaveccooperative()
	{
		$query = $this->db->query("SELECT voyage.id, voyage.date_arr, voyage.date_dep, voyage.id_voiture, voyage.id_tarif, tarif.lieu_arrive, tarif.lieu_depart, tarif.montant, voiture.marque, voiture.nombre_place, voiture.numero, tarif.id_cooperative, cooperative.nom, cooperative.adresse FROM voyage INNER JOIN tarif ON tarif.id = voyage.id_tarif INNER JOIN voiture ON voiture.id = voyage.id_voiture INNER JOIN cooperative ON voiture.id_cooperative = cooperative.id WHERE voyage.date_dep >= ".date("Y-m-d"));
		return $query->result_array();
	}
	public function getlistplace($data)
	{
		$this->db->select("*");
		$this->db->from("reservation");
		$this->db->where($data);
		$query = $this->db->get();
		return $query->result();
	}
}
