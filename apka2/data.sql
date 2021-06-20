-- CREATE USER 'root2'@'localhost' IDENTIFIED BY 'root';
-- GRANT ALL PRIVILEGES ON *.* TO 'root2'@'%';


CREATE  TABLE IF NOT EXISTS `heroes` (
    `id` BIGINT UNSIGNED AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `age` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
    )

    ENGINE = InnoDB;

INSERT INTO `heroes` (`name`, `age`) VALUES ('Batman', '50');
INSERT INTO `heroes` (`name`, `age`) VALUES ('Spider Man', '18');
INSERT INTO `heroes` (`name`, `age`) VALUES ('Thor', '300');
INSERT INTO `heroes` (`name`, `age`) VALUES ('Black Widow', '35');