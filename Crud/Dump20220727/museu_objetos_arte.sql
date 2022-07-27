CREATE DATABASE  IF NOT EXISTS `museu` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `museu`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: museu
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `objetos_arte`
--

DROP TABLE IF EXISTS `objetos_arte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objetos_arte` (
  `num_ID` int NOT NULL AUTO_INCREMENT,
  `ARTISTA` varchar(45) NOT NULL,
  `Ano` date DEFAULT NULL,
  `Periodo` varchar(45) NOT NULL,
  `Titulo` varchar(45) DEFAULT NULL,
  `Pais` varchar(45) DEFAULT NULL,
  `Descricao` varchar(45) NOT NULL,
  PRIMARY KEY (`num_ID`,`ARTISTA`),
  UNIQUE KEY `num_ID_UNIQUE` (`num_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objetos_arte`
--

LOCK TABLES `objetos_arte` WRITE;
/*!40000 ALTER TABLE `objetos_arte` DISABLE KEYS */;
INSERT INTO `objetos_arte` VALUES (1,'Mateus','2022-07-26','Matutino ','EP BDII','Brasil','Um EPzinho'),(2,'Mateus','2022-07-26','Matutino ','EP BDII','Brasil','Um EPzinho'),(3,'Greguer','1987-08-26','Renascimento','MonaGreguer','Brasil','Obra aleatória');
/*!40000 ALTER TABLE `objetos_arte` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-27 17:40:31
