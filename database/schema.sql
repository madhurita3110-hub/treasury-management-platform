
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, role) VALUES
('Alice Johnson', 'alice@example.com', 'admin'),
('Bob Smith', 'bob@example.com', 'treasury_manager'),
('Charlie Lee', 'charlie@example.com', 'auditor');

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    account_number VARCHAR(50) UNIQUE,
    bank_name VARCHAR(100),
    currency VARCHAR(10) DEFAULT 'USD',
    balance DECIMAL(18,2) DEFAULT 0,
    account_type VARCHAR(50),
    owner_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO accounts (account_number, bank_name, currency, balance, account_type, owner_id) VALUES
('ACC1001', 'Bank of America', 'USD', 100000.00, 'operating', 1),
('ACC1002', 'Wells Fargo', 'USD', 50000.00, 'savings', 2),
('ACC1003', 'Chase', 'EUR', 75000.00, 'investment', 2);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    account_id INT REFERENCES accounts(id),
    amount DECIMAL(18,2) NOT NULL,
    type VARCHAR(20),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    reference_number VARCHAR(50) UNIQUE
);

INSERT INTO transactions (account_id, amount, type, description, reference_number) VALUES
(1, 5000.00, 'credit', 'Initial deposit', 'TXN1001'),
(1, 2000.00, 'debit', 'Vendor payment', 'TXN1002'),
(2, 10000.00, 'credit', 'Capital injection', 'TXN1003'),
(3, 5000.00, 'debit', 'Investment purchase', 'TXN1004');

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    from_account INT REFERENCES accounts(id),
    to_account INT REFERENCES accounts(id),
    amount DECIMAL(18,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'USD',
    status VARCHAR(20) DEFAULT 'pending',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    reference_number VARCHAR(50) UNIQUE
);

INSERT INTO payments (from_account, to_account, amount, status, reference_number) VALUES
(1, 2, 1500.00, 'completed', 'PAY1001'),
(2, 3, 2000.00, 'pending', 'PAY1002'),
(1, 3, 500.00, 'failed', 'PAY1003');

CREATE TABLE liquidity_forecast (
    id SERIAL PRIMARY KEY,
    forecast_date DATE NOT NULL,
    predicted_balance DECIMAL(18,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO liquidity_forecast (forecast_date, predicted_balance) VALUES
('2026-03-15', 120000.00),
('2026-03-16', 115000.00),
('2026-03-17', 130000.00);

CREATE TABLE currencies (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) UNIQUE,
    name VARCHAR(50)
);

INSERT INTO currencies (code, name) VALUES
('USD', 'US Dollar'),
('EUR', 'Euro'),
('JPY', 'Japanese Yen');

CREATE TABLE exchange_rates (
    id SERIAL PRIMARY KEY,
    from_currency VARCHAR(10) REFERENCES currencies(code),
    to_currency VARCHAR(10) REFERENCES currencies(code),
    rate DECIMAL(18,6),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO exchange_rates (from_currency, to_currency, rate) VALUES
('USD', 'EUR', 0.93),
('EUR', 'USD', 1.08),
('USD', 'JPY', 140.50),
('JPY', 'USD', 0.0071);

CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    action VARCHAR(100),
    table_name VARCHAR(50),
    record_id INT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO audit_logs (user_id, action, table_name, record_id) VALUES
(1, 'Created new account', 'accounts', 1),
(2, 'Processed payment', 'payments', 1),
(3, 'Reviewed transaction', 'transactions', 2);