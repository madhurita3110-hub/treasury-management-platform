package com.treasury.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    private Double amount;

    private String type;

    @Column(name = "transaction_date")
    private LocalDateTime transactionDate = LocalDateTime.now();

    private String description;

    @Column(unique = true)
    private String referenceNumber;
}