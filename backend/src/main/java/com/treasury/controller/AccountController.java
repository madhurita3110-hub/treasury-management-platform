package com.treasury.controller;

import com.treasury.model.Account;
import com.treasury.service.AccountService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin
public class AccountController {

    private final AccountService service;

    public AccountController(AccountService service) {
        this.service = service;
    }

    @GetMapping
    public List<Account> getAccounts() {
        return service.getAccounts();
    }

    @PostMapping
    public Account create(@RequestBody Account account) {
        return service.create(account);
    }
}