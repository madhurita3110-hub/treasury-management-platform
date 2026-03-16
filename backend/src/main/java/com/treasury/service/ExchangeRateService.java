package com.treasury.service;

import com.treasury.model.ExchangeRate;
import com.treasury.repository.ExchangeRateRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExchangeRateService {

    private final ExchangeRateRepository repo;

    public ExchangeRateService(ExchangeRateRepository repo) {
        this.repo = repo;
    }

    public List<ExchangeRate> getRates() {
        return repo.findAll();
    }

    public ExchangeRate createRate(ExchangeRate rate) {
        return repo.save(rate);
    }
}