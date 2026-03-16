from services.db_service import get_transactions
from services.rag_service import search


class TreasuryAgent:

    def answer(self, question):

        q = question.lower()

        if "transactions" in q:
            tx = get_transactions()

            total = sum(t["amount"] for t in tx)

            return f"Total transaction volume is {total}"

        docs = search(question)

        if docs:
            return docs[0]

        return "Treasury operations appear normal"