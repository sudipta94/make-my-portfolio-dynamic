-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.17 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for my_portfolio
CREATE DATABASE IF NOT EXISTS `my_portfolio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `my_portfolio`;

-- Dumping structure for table my_portfolio.abouts
CREATE TABLE IF NOT EXISTS `abouts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objective` text NOT NULL,
  `skill_note` text NOT NULL,
  `profile_pic` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.abouts: ~0 rows (approximately)
/*!40000 ALTER TABLE `abouts` DISABLE KEYS */;
INSERT INTO `abouts` (`id`, `objective`, `skill_note`, `profile_pic`, `createdAt`, `updatedAt`) VALUES
	(1, 'write your objective', 'sudipta das', 'images\\2019-08-27T09-27-02.103Z-a.jpg', '2019-08-23 15:43:38', '2019-08-29 07:10:58');
/*!40000 ALTER TABLE `abouts` ENABLE KEYS */;

-- Dumping structure for table my_portfolio.blogs
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.blogs: ~1 rows (approximately)
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` (`id`, `title`, `description`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
	(6, 'demo', 'demo description', 'images\\2019-08-27T07-07-14.735Z-a.jpg', '2019-08-27 07:07:14', '2019-08-29 07:09:42');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;

-- Dumping structure for table my_portfolio.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `read_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.contacts: ~6 rows (approximately)
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `read_status`, `createdAt`, `updatedAt`) VALUES
	(23, 'shreya das', 'ourkollegio@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempore id inventore maxime aliquid officiis eius magni.', 0, '2019-08-27 07:49:17', '2019-08-27 07:49:17'),
	(24, 'shreya das', 'das.sudipta94@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempore id inventore maxime aliquid officiis eius magni.', 0, '2019-08-27 07:51:43', '2019-08-27 07:51:43'),
	(25, 'shreya das', 'das.sudipta94@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempore id inventore maxime aliquid officiis eius magni.', 0, '2019-08-27 07:52:44', '2019-08-27 07:52:44'),
	(26, 'shreya das', 'das.sudipta94@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempore id inventore maxime aliquid officiis eius magni.', 0, '2019-08-27 07:53:25', '2019-08-27 07:53:25'),
	(27, 'shreya das', 'das.sudipta94@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempore id inventore maxime aliquid officiis eius magni.', 0, '2019-08-27 07:54:00', '2019-08-27 07:54:00'),
	(28, 'dd', 'das.sudipta94@gmail.com', 'style ="color:red"', 0, '2019-08-27 07:55:14', '2019-08-27 07:55:14'),
	(29, 'suraj', 'rijusuraj55@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, tempore id inventore maxime aliquid officiis eius magni.', 0, '2019-08-27 09:27:58', '2019-08-27 09:27:58');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;

-- Dumping structure for table my_portfolio.education
CREATE TABLE IF NOT EXISTS `education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clg_name` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.education: ~3 rows (approximately)
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` (`id`, `clg_name`, `degree`, `createdAt`, `updatedAt`) VALUES
	(10, 'College name', 'Degree name', '2019-08-28 15:00:15', '2019-08-29 07:12:07');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;

-- Dumping structure for table my_portfolio.otps
CREATE TABLE IF NOT EXISTS `otps` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `otps` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.otps: ~0 rows (approximately)
/*!40000 ALTER TABLE `otps` DISABLE KEYS */;
INSERT INTO `otps` (`id`, `email`, `otps`, `createdAt`, `updatedAt`) VALUES
	(14, 'das.sudipta94@gmail.com', 49855, '2019-08-28 12:24:34', '2019-08-28 12:24:34'),
	(15, 'das.sudipta94@gmail.com', 97518, '2019-08-28 12:28:10', '2019-08-28 12:28:10');
/*!40000 ALTER TABLE `otps` ENABLE KEYS */;

-- Dumping structure for table my_portfolio.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_pic` varchar(255) NOT NULL,
  `project_link` varchar(255) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_details` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.projects: ~1 rows (approximately)
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` (`id`, `project_pic`, `project_link`, `project_name`, `project_details`, `createdAt`, `updatedAt`) VALUES
	(9, 'images\\2019-08-26T08-08-15.775Z-a.jpg', 'www.mytimeline.in', 'Dynamic', 'const url = req.body.image_url;', '2019-08-26 08:07:23', '2019-08-29 07:10:40');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;

-- Dumping structure for table my_portfolio.skills
CREATE TABLE IF NOT EXISTS `skills` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sk` varchar(255) NOT NULL,
  `value` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.skills: ~2 rows (approximately)
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` (`id`, `sk`, `value`, `createdAt`, `updatedAt`) VALUES
	(3, 'python', 80, '2019-08-23 16:40:07', '2019-08-23 16:40:08'),
	(5, 'html', 70, '2019-08-25 11:41:43', '2019-08-25 11:41:43');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;

-- Dumping structure for table my_portfolio.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table my_portfolio.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `user_id`, `password`, `email`, `createdAt`, `updatedAt`) VALUES
	(1, 'sid94', '$2a$12$bPaAZ9sdzDWrIT1px.83eu5lqVEia2yZuVTQv1FgO7LqsG5T6PV8C', 'd@g.com', '2019-08-26 17:00:34', '2019-08-28 12:21:45');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
