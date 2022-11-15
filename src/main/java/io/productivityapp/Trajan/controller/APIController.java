package io.productivityapp.Trajan.controller;

import io.productivityapp.Trajan.service.DataService;
import io.productivityapp.Trajan.model.TaskModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class APIController {
    @Autowired
    private DataService dataService;

    @RequestMapping("/tasks")
    public List<TaskModel> getAllTasks() {
        return dataService.getAllTasks();
    }

    @RequestMapping(method=RequestMethod.POST, value="/tasks")
    public void addTask(@RequestBody TaskModel task) {
        dataService.addTask(task);
    }
}
