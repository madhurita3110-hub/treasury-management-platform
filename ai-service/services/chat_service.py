from services.db_service import get_accounts, get_transactions

def treasury_chat(question):

    accounts = get_accounts()

    transactions = get_transactions()

    balance = sum(a["balance"] for a in accounts)

    response = f"""
Treasury Summary

Total Accounts: {len(accounts)}

Total Liquidity: {balance}

Total Transactions: {len(transactions)}

User Question: {question}
"""

    return response