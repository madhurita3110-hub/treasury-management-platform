from sqlalchemy import create_engine, text

DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/treasury"

engine = create_engine(DATABASE_URL)

def get_transactions():

    with engine.connect() as conn:

        result = conn.execute(text("""
        SELECT id, account_id, amount, type
        FROM transactions
        """))

        return [dict(row._mapping) for row in result]


def get_accounts():

    with engine.connect() as conn:

        result = conn.execute(text("""
        SELECT id, account_number, balance
        FROM accounts
        """))

        return [dict(row._mapping) for row in result]