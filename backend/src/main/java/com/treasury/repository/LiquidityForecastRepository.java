package com.treasury.repository;

import com.treasury.model.LiquidityForecast;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LiquidityForecastRepository extends JpaRepository<LiquidityForecast, Long> {
}