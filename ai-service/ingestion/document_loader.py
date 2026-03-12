from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings

def ingest_documents():

    loader = TextLoader("documents/treasury_policy.txt")

    docs = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )

    chunks = splitter.split_documents(docs)

    db = FAISS.from_documents(
        chunks,
        OpenAIEmbeddings()
    )

    db.save_local("vector_store/faiss_index")