<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model_api extends CI_Model {
	public function authentification($data)
	{
		$this->db->select("*");
		$this->db->from("client");
		$this->db->where($data);
		$query = $this->db->get();
		return $query->row();
	}
	public function authentificationdeux($data)
	{
		$this->db->select("*");
		$this->db->from("user");
		$this->db->where($data);
		$query = $this->db->get();
		return $query->row();
	}
	public function insertionclient($data)
	{
		$this->db->insert("client", $data);
	}
	public function getlistclient()
	{
		$this->db->select("*");
		$this->db->from("client");
		$query = $this->db->get();
		return $query->result();
	}
	public function getlistuser()
	{
		$this->db->select("*");
		$this->db->from("user");
		$this->db->join("cooperative", "cooperative.id = user.id_cooperative");
		$query = $this->db->get();
		return $query->result();
	}
	public function modificationclient($data, $id)
	{
		$this->db->where('id', $id);
		$this->db->update('client', $data);
	}
	public function modificationcooperative($data, $id)
	{
		$this->db->where('id', $id);
		$this->db->update('cooperative', $data);
	}
	public function modificationuser($data, $id)
	{
		$this->db->where('id', $id);
		$this->db->update('user', $data);
	}
}