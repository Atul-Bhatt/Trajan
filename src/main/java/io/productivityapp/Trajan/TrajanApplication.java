package io.productivityapp.Trajan;

import io.productivityapp.Trajan.repository.TaskDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TrajanApplication implements CommandLineRunner {
	@Autowired
	private TaskDao taskDoa;
	public static void main(String[] args) {
		SpringApplication.run(TrajanApplication.class, args);
	}
	@Override
	public void run(String... args) {
//		this.taskDoa.createTable();
	}
}
