package com.treasury.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "liquidity_forecast")
public class LiquidityForecast {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate forecastDate;

    private Double predictedBalance;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}