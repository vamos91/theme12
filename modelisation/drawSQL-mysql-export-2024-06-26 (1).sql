CREATE TABLE `artwork`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `theme` ENUM('peinture', 'sculture') NOT NULL,
    `date_of_creation` DATE NOT NULL,
    `artist_id` INT NOT NULL,
    `gallery_id` INT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);
ALTER TABLE
    `artwork` ADD INDEX `artwork_artist_id_gallery_id_index`(`artist_id`, `gallery_id`);
CREATE TABLE `artist`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `style` ENUM('cubisme', 'réalisme', 'impressionnisme', 'art abstrait') NOT NULL,
    `nationality` VARCHAR(255) NOT NULL,
    `period` ENUM('classic', 'renaissance', 'modern') NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);
CREATE TABLE `gallery`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `city` VARCHAR(255) NOT NULL,
    `type` ENUM('art contemporain', 'art moderne') NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL
);
ALTER TABLE
    `artwork` ADD CONSTRAINT `artwork_gallery_id_foreign` FOREIGN KEY(`gallery_id`) REFERENCES `gallery`(`id`);
ALTER TABLE
    `artwork` ADD CONSTRAINT `artwork_artist_id_foreign` FOREIGN KEY(`artist_id`) REFERENCES `artist`(`id`);