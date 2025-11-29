-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2025 at 05:12 PM
-- Server version: 8.0.44-0ubuntu0.24.04.1
-- PHP Version: 8.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rds`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Tab.'),
(2, 'Cap. '),
(3, 'setMysql'),
(4, 'data'),
(5, 'data inset'),
(6, 'data load'),
(7, 'hello data'),
(8, 'hello'),
(9, 'data'),
(10, 'hello'),
(11, 'hello'),
(12, 'hi'),
(13, 'hello'),
(14, 'kana'),
(15, 'backend'),
(16, 'vai'),
(17, 'hello'),
(18, 'my'),
(19, 'data oupyop'),
(20, 'app data'),
(21, 'data not found'),
(22, 'data test'),
(23, 'mone nai '),
(24, 'না');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `number` varchar(15) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `sex`, `number`, `created_at`, `updated_at`) VALUES
(1, 'Md. Nahidul Islam', 20, 'male', '01763279587', '2025-11-24 03:23:30', '2025-11-24 03:23:30'),
(2, 'Md. Rifat', 18, 'male', '01877357091', '2025-11-24 18:06:05', '2025-11-24 18:06:05'),
(4, 'Md. Sumon Hossen', 19, 'male', '01812345678', '2025-11-24 18:49:57', '2025-11-24 18:49:57'),
(5, 'Md. azamot ali', 10, 'Male', '01877357092', '2025-11-25 03:37:41', '2025-11-25 03:37:41'),
(6, 'Md. Rakibul islam', 17, 'Female', '01877357093', '2025-11-25 17:01:57', '2025-11-25 17:01:57'),
(7, 'Md. masafiay', 17, 'Male', '01609212376', '2025-11-26 03:09:12', '2025-11-26 03:09:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
