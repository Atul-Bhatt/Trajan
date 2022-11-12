package io.productivityapp.Trajan;

import io.productivityapp.Trajan.model.TaskModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class DataService {

    List<TaskModel> tasks;

    public DataService() {
        tasks = new ArrayList<>();
        tasks.add(new TaskModel("Go To Gym", 1));
        tasks.add(new TaskModel("Make Coffee", 1));
        tasks.add(new TaskModel("Commit to Trajan", 2));
    }

    public List<TaskModel> getAllTasks() {
        return tasks;
    }

    public void addTask(TaskModel task) {
        System.out.println("------------------------------");
        System.out.println(task.getTask());
        System.out.println(task.getTaskHours());
        System.out.println("------------------------------");
    }
}
