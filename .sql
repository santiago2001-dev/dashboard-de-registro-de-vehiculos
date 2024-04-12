-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-04-2024 a las 16:09:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `acme`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `drivers`
--

CREATE TABLE `drivers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `numCedula` varchar(191) NOT NULL,
  `primerNomb` varchar(191) NOT NULL,
  `segundoNom` varchar(191) NOT NULL,
  `apellidos` varchar(191) NOT NULL,
  `direccion` varchar(191) NOT NULL,
  `telefono` varchar(191) NOT NULL,
  `ciudad` varchar(191) NOT NULL,
  `placa` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `drivers`
--

INSERT INTO `drivers` (`id`, `numCedula`, `primerNomb`, `segundoNom`, `apellidos`, `direccion`, `telefono`, `ciudad`, `placa`, `created_at`, `updated_at`) VALUES
(1, '2323434325', 'Juan', 'Carlos', 'González Pérez', 'Calle Falsa 123', '555-1234567', 'Ciudad Ficticia', 'dssdds23', '2024-04-12 10:52:39', '2024-04-12 10:52:39'),
(2, '10006983', 'santiago', 'alvaerto', 'morales', 'calle nueva', '32445670', 'Bogotá, D.C.', 'aadff244', '2024-04-12 17:45:43', '2024-04-12 17:45:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_04_12_030707_create_onwers_table', 1),
(6, '2024_04_12_030819_create_vehicles_table', 1),
(7, '2024_04_12_043339_create_drivers_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `onwers`
--

CREATE TABLE `onwers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `numCedula` varchar(191) NOT NULL,
  `primerNomb` varchar(191) NOT NULL,
  `segundoNom` varchar(191) NOT NULL,
  `apellidos` varchar(191) NOT NULL,
  `direccion` varchar(191) NOT NULL,
  `telefono` varchar(191) NOT NULL,
  `ciudad` varchar(191) NOT NULL,
  `placa` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `onwers`
--

INSERT INTO `onwers` (`id`, `numCedula`, `primerNomb`, `segundoNom`, `apellidos`, `direccion`, `telefono`, `ciudad`, `placa`, `created_at`, `updated_at`) VALUES
(1, '2323434325', 'Juan', 'Carlos', 'González Pérez', 'Calle Falsa 123', '555-1234567', 'Ciudad Ficticia', 'dssdds23', '2024-04-12 10:52:48', '2024-04-12 10:52:48'),
(2, '2323434325', 'Juan', 'Carlos', 'González Pérez', 'Calle Falsa 123', '555-1234567', 'Ciudad Ficticia', 'dssdds523', '2024-04-12 11:24:09', '2024-04-12 11:24:09'),
(3, '2323434325', 'Juan', 'Carlos', 'González Péddrez', 'Calle Falsa 123', '555-1234567', 'Ciudad Ficticia', 'dssdd00s23', '2024-04-12 11:25:18', '2024-04-12 11:25:18'),
(4, '1000698945', 'andres', 'juan', 'morales', 'conjunto altos de atochico', '3174310329', 'bogotá', 'anfg4667', '2024-04-12 17:13:33', '2024-04-12 17:13:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--

CREATE TABLE `vehicles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `placa` varchar(191) NOT NULL,
  `color` varchar(191) NOT NULL,
  `marca` varchar(191) NOT NULL,
  `tipoVehiculo` varchar(191) NOT NULL,
  `conductor` varchar(191) NOT NULL,
  `propietario` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`id`, `placa`, `color`, `marca`, `tipoVehiculo`, `conductor`, `propietario`, `created_at`, `updated_at`) VALUES
(1, 'dssdds23', 'blanco', 'renault', 'particular', '2323434325', '2323434325', '2024-04-12 10:51:23', '2024-04-12 10:51:23'),
(2, 'dssdds23', 'blanco', 'renault', 'particular', '2323434325', '2323434325', '2024-04-12 10:53:21', '2024-04-12 10:53:21'),
(3, 'dssdd00s23', 'blanco', 'renault', 'particular', '2323434325', '2323434325', '2024-04-12 11:25:01', '2024-04-12 11:25:01'),
(4, 'dssdd00s23', 'blanco', 'renault', 'particular', '2323434325', '2323434325', '2024-04-12 11:25:22', '2024-04-12 11:25:22'),
(5, 'ewewwe', 'rojo', 'renault', 'publico', '1000698947', '10069875', '2024-04-12 18:49:21', '2024-04-12 18:49:21');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `onwers`
--
ALTER TABLE `onwers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `onwers`
--
ALTER TABLE `onwers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
