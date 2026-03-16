from services.rag_service import add_documents

def load_documents():

    docs = [

        "Treasury liquidity management policies",

        "Foreign exchange risk mitigation strategies",

        "Cash pooling best practices",

        "Treasury payment risk management"
    ]

    add_documents(docs)