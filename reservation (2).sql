-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  Dim 30 août 2020 à 19:09
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `reservation`
--

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `date_naissance` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `nom`, `prenom`, `numero`, `mdp`, `adresse`, `date_naissance`) VALUES
(1, 'ANDRANDRAINA', 'Nathalie', '0344504209', '123', 'Nosivavaka', '2008-08-10'),
(2, 'Rasijalahy', 'Félin Aldric', '324010607', 'Felin', 'Toliara Mada', '1994-02-21');

-- --------------------------------------------------------

--
-- Structure de la table `cooperative`
--

DROP TABLE IF EXISTS `cooperative`;
CREATE TABLE IF NOT EXISTS `cooperative` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cooperative`
--

INSERT INTO `cooperative` (`id`, `nom`, `adresse`) VALUES
(1, 'FIMPIMA', 'Fianarantsoa'),
(2, 'FIFIABE', 'Tulear');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `frais_paye` int(11) NOT NULL,
  `reste_paye` int(11) NOT NULL,
  `place` varchar(50) NOT NULL,
  `id_voyage` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `tarif`
--

DROP TABLE IF EXISTS `tarif`;
CREATE TABLE IF NOT EXISTS `tarif` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lieu_depart` varchar(50) NOT NULL,
  `lieu_arrive` varchar(50) NOT NULL,
  `montant` int(11) NOT NULL,
  `id_cooperative` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tarif`
--

INSERT INTO `tarif` (`id`, `lieu_depart`, `lieu_arrive`, `montant`, `id_cooperative`) VALUES
(1, 'Fianarantsoa', 'Tulear', 25000, 1),
(2, 'Antatanarivo', 'Tulear', 55000, 2),
(4, 'Toliara', 'Tananarivo', 50000, 2),
(5, 'Mahajanga', 'Tananarivo', 30000, 2);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  `id_cooperative` int(11) NOT NULL,
  `adresse` varchar(200) NOT NULL,
  `type` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `login`, `mdp`, `id_cooperative`, `adresse`, `type`) VALUES
(1, 'nathalie', '123', 1, 'Fianarantsoa', 'Admin'),
(2, 'rosa', '123', 2, 'Tulear', 'Cooperative');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

DROP TABLE IF EXISTS `voiture`;
CREATE TABLE IF NOT EXISTS `voiture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marque` varchar(50) NOT NULL,
  `numero` varchar(50) NOT NULL,
  `nombre_place` int(11) NOT NULL,
  `id_cooperative` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `voiture`
--

INSERT INTO `voiture` (`id`, `marque`, `numero`, `nombre_place`, `id_cooperative`) VALUES
(1, 'SPRINTER', '2345TAB', 20, 1),
(2, 'MAZDA', '7346TD', 18, 2);

-- --------------------------------------------------------

--
-- Structure de la table `voyage`
--

DROP TABLE IF EXISTS `voyage`;
CREATE TABLE IF NOT EXISTS `voyage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_voiture` int(11) NOT NULL,
  `id_tarif` int(11) NOT NULL,
  `date_dep` date NOT NULL,
  `date_arr` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `voyage`
--

INSERT INTO `voyage` (`id`, `id_voiture`, `id_tarif`, `date_dep`, `date_arr`) VALUES
(1, 2, 5, '2020-08-30', '2020-08-31');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
