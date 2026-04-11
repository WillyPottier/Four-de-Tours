/*
  Warnings:

  - Added the required column `mode_livraison` to the `commandes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `commandes` ADD COLUMN `mode_livraison` ENUM('livraison', 'retrait') NOT NULL,
    MODIFY `statut` ENUM('en_attente', 'confirmee', 'en_preparation', 'prete', 'expediee', 'livree', 'retiree', 'annulee') NOT NULL DEFAULT 'en_attente';
