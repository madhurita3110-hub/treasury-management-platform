package com.treasury.service;

import com.treasury.model.Account;
import com.treasury.repository.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private final AccountRepository repo;

    public AccountService(AccountRepository repo) {
        this.repo = repo;
    }

    public List<Account> getAccounts() {
        return repo.findAll();
    }

    public Account create(Account account) {
        return repo.save(account);
    }
}