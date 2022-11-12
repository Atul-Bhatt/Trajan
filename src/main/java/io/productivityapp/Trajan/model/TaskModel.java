package io.productivityapp.Trajan.model;

public class TaskModel {

    public TaskModel(String task, int hours) {
        this.task = task;
        this.taskHours = hours;
    }
    private String task;
    private int taskHours;

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
