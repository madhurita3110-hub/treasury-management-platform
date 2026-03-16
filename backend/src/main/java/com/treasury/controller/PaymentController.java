package com.treasury.controller;

import com.treasury.model.Payment;
import com.treasury.service.PaymentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin
public class PaymentController {

    private final PaymentService service;

    public PaymentController(PaymentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Payment> getPayments() {
        return service.getPayments();
    }

    @PostMapping
    public Payment create(@RequestBody Payment payment) {
        return service.createPayment(payment);
    }
}