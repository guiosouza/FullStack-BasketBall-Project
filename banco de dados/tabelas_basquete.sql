-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbjcbc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbjcbc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbjcbc` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `dbjcbc` ;

-- -----------------------------------------------------
-- Table `dbjcbc`.`equipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbjcbc`.`equipe` (
  `idequipe` INT NOT NULL,
  PRIMARY KEY (`idequipe`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbjcbc`.`cidade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbjcbc`.`cidade` (
  `idcidade` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `time_idtime` INT NOT NULL,
  PRIMARY KEY (`idcidade`),
  INDEX `fk_cidade_time_idx` (`time_idtime` ASC) VISIBLE,
  CONSTRAINT `fk_cidade_time`
    FOREIGN KEY (`time_idtime`)
    REFERENCES `dbjcbc`.`equipe` (`idequipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbjcbc`.`jogador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbjcbc`.`jogador` (
  `idjogador` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `equipe_idequipe` INT NOT NULL,
  PRIMARY KEY (`idjogador`),
  INDEX `fk_jogador_equipe1_idx` (`equipe_idequipe` ASC) VISIBLE,
  CONSTRAINT `fk_jogador_equipe1`
    FOREIGN KEY (`equipe_idequipe`)
    REFERENCES `dbjcbc`.`equipe` (`idequipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbjcbc`.`tecnico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbjcbc`.`tecnico` (
  `idtecnico` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `funcao` VARCHAR(45) NULL COMMENT '[1/2/3]\n1 = ofensivo\n2 = defensivo\n3 = preparador fisico',
  `equipe_idequipe` INT NOT NULL,
  PRIMARY KEY (`idtecnico`),
  INDEX `fk_tecnico_equipe1_idx` (`equipe_idequipe` ASC) VISIBLE,
  CONSTRAINT `fk_tecnico_equipe1`
    FOREIGN KEY (`equipe_idequipe`)
    REFERENCES `dbjcbc`.`equipe` (`idequipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbjcbc`.`joga`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbjcbc`.`joga` (
  `equipe_casa` INT NOT NULL,
  `equipe_visitante` INT NOT NULL,
  `pontos_casa` VARCHAR(45) NULL,
  `pontos_visitante` VARCHAR(45) NULL,
  `data` VARCHAR(45) NULL,
  PRIMARY KEY (`equipe_casa`, `equipe_visitante`),
  INDEX `fk_equipe_has_equipe_equipe2_idx` (`equipe_visitante` ASC) VISIBLE,
  INDEX `fk_equipe_has_equipe_equipe1_idx` (`equipe_casa` ASC) VISIBLE,
  CONSTRAINT `fk_equipe_has_equipe_equipe1`
    FOREIGN KEY (`equipe_casa`)
    REFERENCES `dbjcbc`.`equipe` (`idequipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_equipe_has_equipe_equipe2`
    FOREIGN KEY (`equipe_visitante`)
    REFERENCES `dbjcbc`.`equipe` (`idequipe`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
