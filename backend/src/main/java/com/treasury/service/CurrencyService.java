package com.treasury.service;

import com.treasury.model.Currency;
import com.treasury.repository.CurrencyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrencyService {

    private final CurrencyRepository repo;

    public CurrencyService(CurrencyRepository repo) {
        this.repo = repo;
    }

    public List<Currency> getCurrencies() {
        return repo.findAll();
    }

    public Currency createCurrency(Currency currency) {
        return repo.save(currency);
    }
}