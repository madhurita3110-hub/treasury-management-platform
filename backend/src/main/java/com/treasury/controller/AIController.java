package com.treasury.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin
public class AIController {

    @PostMapping("/insight")
    public String getInsight(@RequestBody String question) {

        RestTemplate restTemplate = new RestTemplate();

        String response = restTemplate.postForObject(
                "http://localhost:5000/ai/insight",
                question,
                String.class
        );

        return response;
    }
}