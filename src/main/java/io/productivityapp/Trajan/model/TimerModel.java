package io.productivityapp.Trajan.model;

import java.time.LocalDate;

public class TimerModel {
    private LocalDate date;
    private int hours;

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
