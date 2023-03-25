-- MySQL dump 10.13  Distrib 8.0.32, for Linux (aarch64)
--
-- Host: localhost    Database: arts
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `productId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (4,10,3,2),(5,5,2,3),(6,3,18,3);
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `icon` varchar(255) DEFAULT NULL,
  `children` json DEFAULT NULL,
  `parentId` int DEFAULT NULL,
  `itemsCount` int DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Arts',NULL,NULL,'[]',NULL,0,'Arts-890',1),(2,'Architecture Art',NULL,'4e1ab9a9-5001-4744-8c5b-11f00b480c39jpeg','[]',1,0,'Architecture-Art-370',1),(3,'Literature Art',NULL,'3ea7dd4b-c322-4b97-a57f-e5e7a6f8b5adjpeg','[]',1,0,'Literature-Art-333',1),(4,'Theater Art',NULL,'2b373c9e-72f5-4fe1-b45d-13419f11f55cjpeg','[]',1,0,'Theater-Art-313',1),(5,'Ceramics Art',NULL,'d6e90d48-eba0-4641-a3a9-6051fece1298jpeg','[]',1,0,'Ceramics-Art-529',1),(6,'Bone China',NULL,NULL,'[]',NULL,0,'Bone-China-023',1),(7,'Sculpture Art',NULL,'6c6e9080-bccc-487a-8483-efee9d0e82a1jpeg','[]',6,0,'Sculpture-Art-360',1),(8,'Painting Art',NULL,'70fa2c53-d06d-44f6-b5c8-8f58db5472acjpeg','[]',6,0,'Painting-Art-256',1),(9,'Glass Etching',NULL,NULL,'[]',6,0,'Glass-Etching-184',1),(10,'Glassblowing',NULL,NULL,'[]',6,0,'Glassblowing-646',1),(11,'Flower Crafts',NULL,NULL,'[]',NULL,0,'Flower-Crafts-454',1),(12,'Daffodil Craft',NULL,NULL,'[]',11,0,'Daffodil-Craft-730',1),(13,'Handprint Craft',NULL,NULL,'[]',11,0,'Handprint-Craft-364',1),(14,'Furniture Crafts',NULL,NULL,'[]',11,0,'Furniture-Crafts-923',1),(15,'Glass Crafts',NULL,NULL,'[]',11,0,'Glass-Crafts-592',1);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `SKU` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `description` text,
  `tags` json DEFAULT NULL,
  `images` json DEFAULT NULL,
  `characteristics` json DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `discount_price` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Seated Wood Figure Of Amida Nyorai','NHFL5-14','250','3','Enhance your style with this printed top, which is designed with three-quarter sleeves and a round neckline. Adding to the style quotient, this top is detailed with a schiffli detailed structure Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style','\"[{\\\"name\\\":\\\"Clothing\\\"},{\\\"name\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Fashion\\\"},{\\\"name\\\":\\\"Summer\\\"},{\\\"name\\\":\\\"Vintage\\\"},{\\\"name\\\":\\\"Early\\\"}]\"','[\"5c12ccfe-899d-49b4-b219-738b17fdef06jpeg\", \"21f57230-8181-4da8-bc31-b8cd4cbf13f6jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Casual Tops\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Printed\\\"},{\\\"name\\\":\\\"Neckline\\\",\\\"value\\\":\\\"Round Neck\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"3/4th Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton Blend\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\" and Chest 33\\\\\\\"\\\"},{\\\"name\\\":\\\"Return Policy\\\",\\\"value\\\":\\\"This product is returnable within 30 days of delivery\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Top\\\"},{\\\"name\\\":\\\"Country of Origin\\\",\\\"value\\\":\\\"Germany\\\"}]\"',2,NULL,25,188,'2023-03-18 13:13:23','2023-03-18 13:21:28'),(2,'Chinese Style Black Iron Table Lamp','NHFL5-10','290','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.','\"[\\\"Cotton\\\",\\\"Fashion\\\",\\\"Summer\\\"]\"','[\"f909343d-5ade-4544-87af-9d2fe1e7ae1ejpeg\", \"55c6272f-20a1-452a-8399-5a7e9c4afe89jpeg\", \"d987eb06-9b66-40c6-b2f3-0319499b5966jpeg\", \"5d623c6f-20f3-4e30-82c0-08495a8efcbcjpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Shirt Dress\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Neckline\\\",\\\"value\\\":\\\"Spread Collar\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\" Casual\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Knee-Length\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Full Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash Warm\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"}]\"',2,NULL,NULL,NULL,'2023-03-18 13:38:16','2023-03-18 13:38:16'),(3,'Plus Women Cotton Solid Soft Light','NHFL5-12','390','7','Maximize comfort with this printed T-shirt designed with a round neck and short sleeves.Look pretty in a kurta from u women\'s wear and get it in pink. limeroad has something for everyone.lay your hands on xs size kurtas to wear them as casual wear. the best part? these beautiful styles can be taken from work to dinner in a jiffy! swank this kurta in vivid patterns priced at ₹1169. limeroad always gives you the hottest styles at the lowest prices.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"2e9dc54f-988e-486c-82e2-7857e67f8fa0jpeg\", \"95c70026-7660-4457-b0dc-da1132987b5djpeg\", \"bd7729a1-47a8-45e4-9bde-0573bf330229jpeg\", \"b225ef5c-5208-48ec-9b33-8b2d70d08871jpeg\", \"6bea8ee7-deae-48ef-9e07-a2f63012c5d6jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"SImple\\\"},{\\\"name\\\":\\\"Neckline\\\",\\\"value\\\":\\\"Round Neck\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Cotton\\\",\\\"value\\\":\\\"Cotton\\\"}]\"',4,NULL,35,254,'2023-03-18 14:15:04','2023-03-18 14:15:04'),(4,'Genevieve Knutson Obituary Yuma','NHFL5-123','90','7','Enhance your style with this printed top, which is designed with three-quarter sleeves and a round neckline. Adding to the style quotient, this top is detailed with a schiffli detailed structure Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"55ca3be8-78b6-4603-9a2c-9ac8ef8061fajpeg\", \"a63c7429-26e3-450c-ab6d-52815dae2ac9jpeg\", \"1589ba3f-d90f-4c09-a085-dbf0518709f2jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"SImple\\\"},{\\\"name\\\":\\\"Neckline\\\",\\\"value\\\":\\\"Round Neck\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Cotton\\\",\\\"value\\\":\\\"Cotton\\\"}]\"',7,NULL,12,79,'2023-03-18 14:16:14','2023-03-18 14:16:14'),(5,'Bhunes Antiques Brass Decorative Box','NNHFL5-11','90','7','Enhance your style with this printed top, which is designed with three-quarter sleeves and a round neckline. Adding to the style quotient, this top is detailed with a schiffli detailed structure Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"ce81eef8-3fc7-42d7-9661-165f13792becjpeg\", \"8065294a-ef30-4912-87ef-9f62c6efea11jpeg\", \"ddaabd2d-a37b-428a-b8c3-d66d37d0ae3fjpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"SImple\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Cotton\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',7,NULL,12,79,'2023-03-18 14:17:34','2023-03-18 14:17:34'),(6,'Cast Of A Bust Of Michelangelo Works','NHFL5-14','250','5','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"09e6671f-e67a-4561-b6da-d1bc552233ecjpeg\", \"20217f79-658f-4a63-ac51-ec72ddaf147fjpeg\", \"57965e51-24ee-4fd5-85e0-c5f751fdd2e6jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',7,NULL,NULL,NULL,'2023-03-18 14:19:34','2023-03-18 14:19:34'),(7,'Antique White Metal Winding Pocket','NHFL5-14','12','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"5ecd8e51-c45f-4358-90ee-2f13acc16a58jpeg\", \"672b55cd-8abb-43fb-aab7-494b0c75d9adjpeg\", \"d75d580d-271c-4694-93a1-38db16dfe4dejpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',7,NULL,NULL,NULL,'2023-03-18 14:21:23','2023-03-18 14:21:23'),(8,'Aristide Petrilli Decorative Object','NHFL5-14','5555','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"fe806798-48ba-408a-a6d2-57dc97e48c20jpeg\", \"75deb00c-6a37-429f-a526-edd23bbc65b8jpeg\", \"d6234ae5-7fd6-4ff7-b980-1b6fd2544d89jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',7,NULL,23,4277,'2023-03-18 14:21:55','2023-03-18 14:21:55'),(9,'Ceramic Pottery Vase Lempereur Sar','NHFL5-14','1234','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"3a4f8e21-02e0-435f-9d0f-c932fa47f9a9jpeg\", \"0f6fac5a-1a27-45d3-ae5a-9b1fca694b81jpeg\", \"7fb88970-4c66-4b9e-9558-c847e314782djpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',5,NULL,88,148,'2023-03-18 14:22:27','2023-03-18 14:22:27'),(10,'3D Wooden Puzzle For Adults Animal','NHFL5-14','767','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"657b42ee-2d1b-471a-a33c-240129b56fa6jpeg\", \"b272510c-fc9d-46ab-872a-6532a9363326jpeg\", \"a13b1d66-bc84-4340-967d-a76f6722eff5jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',8,NULL,52,368,'2023-03-18 14:23:16','2023-03-18 14:23:16'),(11,'Life Mysteries Cherub Statue Plant','NHFL5-14','555','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"2d61c1cb-333d-4258-ab12-f942c685e949jpeg\", \"e57f7d73-be28-451c-b0bd-dbf9e8e38066jpeg\", \"a48da41a-53b1-449c-a24e-8469506e8fdbjpeg\", \"ded68861-6f63-4ae4-8f8f-4ef1bc63c0b0jpeg\", \"4e546090-ae0d-464a-9d40-e9b383b1c060jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',8,NULL,NULL,NULL,'2023-03-18 14:23:56','2023-03-18 14:23:56'),(12,'Ceramic Belly Vase Matte Blush Matte','NHFL5-14','555','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"d4933ff5-605e-4373-94de-999f484039e1jpeg\", \"d8fcc621-80a0-4cb0-a356-671c8a0de227jpeg\", \"82f5969c-ef67-4b51-b38e-627cd216dc52jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',5,NULL,NULL,NULL,'2023-03-18 14:24:19','2023-03-18 14:24:19'),(13,'Genevieve Knutson Obituary Yuma','NHFL5-14','251','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"b319b1f3-82bc-4926-8c63-cb5b158a59b0jpeg\", \"b341937a-03ef-4688-aeab-97f03df0a834jpeg\", \"21b2d83e-aff1-4d52-9fdb-031914c4454cjpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',3,NULL,NULL,NULL,'2023-03-18 14:24:49','2023-03-18 14:24:49'),(14,'Genevieve ','NHFL5-14','98769','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"42c192fa-28ab-4150-b5f0-31cf3b4782dcjpeg\", \"f76b46d3-f42c-4513-afab-20e94a048d89jpeg\", \"541a189b-8c9b-4bb1-9dac-a0b4e960651ajpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',4,NULL,78,21729,'2023-03-18 14:25:33','2023-03-18 14:25:33'),(15,'Aristide Petrilli Decorative Object','NHFL5-14','150','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"9e5ae3fc-ecc1-44af-b9ce-0157d4b3a67ejpeg\", \"e0ffe1f7-cdc0-41ff-a602-87fcaf96e955jpeg\", \"39ab3ad5-004b-4fe4-8650-b598530572a5jpeg\", \"80e062aa-70a3-47ff-8d56-5ca221869086jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',3,NULL,78,33,'2023-03-18 14:25:59','2023-03-18 14:25:59'),(16,'Aristide Petrilli ','NHFL5-14','150','2','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"e0b79bdb-87db-436d-b671-b97a2f7ebeebjpeg\", \"e0350281-203b-4dea-b613-793771ef228bjpeg\", \"1c43b222-4026-4ec9-b644-8e50f1fced51jpeg\", \"ee7740d5-6713-40d4-ad1f-e608fd7e96b4jpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',4,NULL,NULL,NULL,'2023-03-18 14:26:22','2023-03-18 14:26:22'),(17,'Aristide Petrilli ','NHFL5-14','2590','7','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"17479a23-fe2c-494e-8af3-0c92fc93f159jpeg\", \"a6ebafc8-0037-4867-b2e3-961c321ba3e4jpeg\", \"d3fda636-90b3-47b5-b0d7-be52d50bd66fjpeg\", \"69658aee-b62d-4c5b-aafa-d9426b7a3d8ajpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',7,NULL,NULL,NULL,'2023-03-18 14:26:43','2023-03-18 14:26:43'),(18,'Ceramic Belly Vase Matte Blush Matte','NHFL5-14','2225','7','Elegant and comfy, this embroidered A-line dress which has a round neck, and three-quarter sleeves is all you need to ensure your wardrobe is up to date. Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.  Overview Up your style quotient with this shirt dress that is tailored with a solid hue, button placket, spread collar and a fabric belt to garner the look.','\"[\\\"Cotton\\\",\\\"Village\\\",\\\"Summer\\\"]\"','[\"98aaace6-f57f-49ad-a2fe-387f79e0ebf9jpeg\", \"a7fa9993-7450-4a29-903d-40502f3a03fcjpeg\", \"86abf608-2180-45c2-8fd6-48adefbb1374jpeg\", \"da04f8e3-6a8d-4ed0-9021-d050a19dd896jpeg\", \"b6a12bcd-e28e-48e2-a736-c8d0263ce62bjpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Tees\\\"},{\\\"name\\\":\\\"Design\\\",\\\"value\\\":\\\"Solid\\\"},{\\\"name\\\":\\\"Length\\\",\\\"value\\\":\\\"Calf-Length\\\"},{\\\"name\\\":\\\"Style\\\",\\\"value\\\":\\\"Casual\\\"},{\\\"name\\\":\\\"Sleeve Length\\\",\\\"value\\\":\\\"Half Sleeves\\\"},{\\\"name\\\":\\\"Fabric\\\",\\\"value\\\":\\\"Cotton\\\"},{\\\"name\\\":\\\"Care Instructions\\\",\\\"value\\\":\\\"Machine Wash\\\"},{\\\"name\\\":\\\"Model Wears\\\",\\\"value\\\":\\\"Size S,has Height 5\'7\\\\\\\",Chest 33\\\\\\\",and Waist 28\\\\\\\"\\\"},{\\\"name\\\":\\\"Product\\\",\\\"value\\\":\\\"Dress\\\"}]\"',8,NULL,NULL,NULL,'2023-03-18 14:27:14','2023-03-18 14:27:14'),(19,'Seated wood figure of Amida wood figure of Amida wood figure of Amida ','wood figure','378','6','Enhance your style with this printed top, which is designed with three-quarter sleeves and a round neckline. Adding to the style quotient, this top is detailed with a schiffli detailed structure Browse through the latest collection of various ethnic dresses with cap sleeve sleeve designs to give a flawless desi look. Stay up to date with the great selection of attractive traditional ethnic dresses made with the perfect blend and modern style.','\"[]\"','[\"e775514d-f46d-40b5-ac8f-10b9aed8fae7jpeg\", \"a2fc5cf1-11a2-46b4-b47b-132f3f4ef7f1jpeg\", \"c76e4aad-cbd7-4fcd-abfa-353a7a2b996djpeg\"]','\"[{\\\"name\\\":\\\"Type\\\",\\\"value\\\":\\\"Product\\\"},{\\\"name\\\":\\\"Some many \\\",\\\"value\\\":\\\"Chars\\\"}]\"',9,NULL,NULL,NULL,'2023-03-20 13:33:06','2023-03-20 13:33:06');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` varchar(255) NOT NULL,
  `descrition` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `value` (`value`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','TURBOADMIN','2020-01-01 10:10:10','2020-01-01 10:10:10'),(2,'USER','DEFAULT','2020-01-01 10:10:10','2020-01-01 10:10:10');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `user_roles_userId_roleId_unique` (`roleId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1,2),(2,2,3);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `banned` tinyint(1) DEFAULT '0',
  `banReason` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@admin.admin','$2a$05$hrQApZGZbL5OZSBUYNsY0e1I8.AxHnnDN/hnLGEOX/yZthwJezHWy',0,NULL,'2023-03-22 12:22:19','2023-03-22 12:22:19','admin','turboadmin'),(2,'adm@adm.adm','$2a$05$aLPjVcFcZCWiYnrLQJfQL.jP63FT3kRYJO.pgshXMUS5R9o.sdpFu',0,NULL,'2023-03-22 12:33:30','2023-03-22 12:33:30','admin turbach','giper admin'),(3,'usr@usr.usr','$2a$05$uDYxavoA6QpEkOT8O93mYOFPRF2y7BJ2mhkVzgl3V6KfKzU0q2pB.',0,NULL,'2023-03-24 11:31:31','2023-03-24 11:31:31','simple user','simp');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-25 13:29:26
