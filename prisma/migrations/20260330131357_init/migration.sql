-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mot_de_passe` VARCHAR(191) NOT NULL,
    `role` ENUM('client', 'admin') NOT NULL DEFAULT 'client',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produits` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` TEXT NULL,
    `prix` DECIMAL(10, 2) NOT NULL,
    `image` VARCHAR(191) NULL,
    `disponible` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commandes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `statut` ENUM('en_attente', 'confirmee', 'en_preparation', 'prete', 'livree', 'annulee') NOT NULL DEFAULT 'en_attente',
    `total` DECIMAL(10, 2) NOT NULL,
    `adresse_livraison` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lignes_commande` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `commande_id` INTEGER NOT NULL,
    `produit_id` INTEGER NOT NULL,
    `quantite` INTEGER NOT NULL,
    `prix_unitaire` DECIMAL(10, 2) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `commandes` ADD CONSTRAINT `commandes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lignes_commande` ADD CONSTRAINT `lignes_commande_commande_id_fkey` FOREIGN KEY (`commande_id`) REFERENCES `commandes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lignes_commande` ADD CONSTRAINT `lignes_commande_produit_id_fkey` FOREIGN KEY (`produit_id`) REFERENCES `produits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
