package com.treasury.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AIService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String getAIInsight(String question) {
        String aiEndpoint = "http://localhost:5000/ai/insight";
        return restTemplate.postForObject(aiEndpoint, question, String.class);
    }
}