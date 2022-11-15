package io.productivityapp.Trajan.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TaskDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void createTable() {
        var query = "create table tasks(id serial primary key, task character varying, hours integer);";
        int update = this.jdbcTemplate.update(query);
        System.out.println(update);
    }
}
