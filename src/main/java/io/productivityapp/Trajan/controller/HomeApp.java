package io.productivityapp.Trajan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeApp {

    @GetMapping("/")
    public String home(){
        return "home";
    }
}
