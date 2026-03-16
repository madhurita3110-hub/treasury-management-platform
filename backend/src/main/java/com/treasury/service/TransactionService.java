package com.treasury.service;

import com.treasury.model.Transaction;
import com.treasury.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository repo;

    public TransactionService(TransactionRepository repo) {
        this.repo = repo;
    }

    public List<Transaction> getTransactions() {
        return repo.findAll();
    }

    public Transaction createTransaction(Transaction tx) {
        return repo.save(tx);
    }
}