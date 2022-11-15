package io.productivityapp.Trajan.service;

import io.productivityapp.Trajan.model.TaskModel;
import io.productivityapp.Trajan.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class DataService {

    @Autowired
    public TaskRepository taskRepository;

    List<TaskModel> tasks;

    public List<TaskModel> getAllTasks() {
        tasks = new ArrayList<>();
        taskRepository.findAll()
                .forEach(tasks::add);
        return tasks;
    }

    public void addTask(TaskModel task) {
        taskRepository.save(task);
    }
}
