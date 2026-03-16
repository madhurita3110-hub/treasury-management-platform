package com.treasury.service;

import com.treasury.model.LiquidityForecast;
import com.treasury.repository.LiquidityForecastRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LiquidityForecastService {

    private final LiquidityForecastRepository repo;

    public LiquidityForecastService(LiquidityForecastRepository repo) {
        this.repo = repo;
    }

    public List<LiquidityForecast> getForecasts() {
        return repo.findAll();
    }

    public LiquidityForecast createForecast(LiquidityForecast forecast) {
        return repo.save(forecast);
    }
}