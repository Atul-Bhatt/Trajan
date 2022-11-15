package io.productivityapp.Trajan.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TaskModel {
    @Id
    private int id;
    private String task;
    private int taskHours;


    public TaskModel(String task, int hours) {
        this.id = id;
        this.task = task;
        this.taskHours = hours;
    }

    public int getId() { return this.id; }
    public void setId(int id) { this.id = id; }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public int getTaskHours() {
        return taskHours;
    }

    public void setTaskHours(int taskHours) {
        this.taskHours = taskHours;
    }
}
