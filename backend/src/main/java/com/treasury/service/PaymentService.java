package com.treasury.service;

import com.treasury.model.Payment;
import com.treasury.repository.PaymentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    private final PaymentRepository repo;

    public PaymentService(PaymentRepository repo) {
        this.repo = repo;
    }

    public List<Payment> getPayments() {
        return repo.findAll();
    }

    public Payment createPayment(Payment payment) {
        return repo.save(payment);
    }
}