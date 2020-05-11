-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 10, 2019 at 05:48 PM
-- Server version: 10.3.17-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pate1742_localhost`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblBooks`
--

CREATE TABLE `tblBooks` (
  `BookId` int(3) NOT NULL,
  `book` varchar(25) NOT NULL,
  `author` varchar(25) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblBooks`
--

INSERT INTO `tblBooks` (`BookId`, `book`, `author`) VALUES
(1, 'rit', 'ahsd'),
(2, 'The Home of Soul', 'Deep'),
(3, 'Harry Porter', 'J.K Rowling'),
(4, 'Hall of Fame', 'John '),
(5, 'Half Girlfreind', 'Chetan Bhagat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblBooks`
--
ALTER TABLE `tblBooks`
  ADD PRIMARY KEY (`BookId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblBooks`
--
ALTER TABLE `tblBooks`
  MODIFY `BookId` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
