package com.project.be_health;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

//@EnableJpaAuditing // JAP Auditing 활성화
@SpringBootApplication
public class BeHealthApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeHealthApplication.class, args);
	}
}
