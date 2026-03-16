package com.treasury.controller;

import com.treasury.model.Transaction;
import com.treasury.service.TransactionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @GetMapping
    public List<Transaction> getTransactions() {
        return service.getTransactions();
    }

    @PostMapping
    public Transaction create(@RequestBody Transaction tx) {
        return service.createTransaction(tx);
    }
}