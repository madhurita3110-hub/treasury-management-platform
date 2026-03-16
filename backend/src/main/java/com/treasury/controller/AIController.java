package com.treasury.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin
public class AIController {

    @PostMapping("/chat")
    public String chat(@RequestBody String message) {

        RestTemplate restTemplate = new RestTemplate();

        String response = restTemplate.postForObject(
                "http://localhost:5000/ai/chat",
                message,
                String.class
        );

        return response;
    }

    @GetMapping("/analysis")
    public String analysis() {

        RestTemplate restTemplate = new RestTemplate();

        String response = restTemplate.getForObject(
                "http://localhost:5000/ai/analysis",
                String.class
        );

        return response;
    }

    @GetMapping("/anomalies")
    public String anomalies() {

        RestTemplate restTemplate = new RestTemplate();

        String response = restTemplate.getForObject(
                "http://localhost:5000/ai/anomalies",
                String.class
        );

        return response;
    }
}