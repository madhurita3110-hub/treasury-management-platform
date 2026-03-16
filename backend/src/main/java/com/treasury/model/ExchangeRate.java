package com.treasury.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "exchange_rates")
public class ExchangeRate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "from_currency")
    private Currency fromCurrency;

    @ManyToOne
    @JoinColumn(name = "to_currency")
    private Currency toCurrency;

    private Double rate;

    private LocalDateTime date = LocalDateTime.now();
}