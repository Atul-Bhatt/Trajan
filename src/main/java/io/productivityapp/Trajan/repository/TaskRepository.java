package io.productivityapp.Trajan.repository;

import io.productivityapp.Trajan.model.TaskModel;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<TaskModel, Integer> {

}
