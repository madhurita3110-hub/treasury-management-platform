package com.treasury.service;

import com.treasury.model.AuditLog;
import com.treasury.repository.AuditLogRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuditLogService {

    private final AuditLogRepository repo;

    public AuditLogService(AuditLogRepository repo) {
        this.repo = repo;
    }

    public List<AuditLog> getLogs() {
        return repo.findAll();
    }

    public AuditLog createLog(AuditLog log) {
        return repo.save(log);
    }
}