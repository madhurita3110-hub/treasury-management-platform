import faiss
from services.embedding_service import create_embeddings

documents = []

index = None


def add_documents(docs):

    global documents
    global index

    documents = docs

    vectors = create_embeddings(docs)

    dimension = len(vectors[0])

    index = faiss.IndexFlatL2(dimension)

    index.add(vectors)


def search_docs(query):

    query_vec = create_embeddings([query])

    D, I = index.search(query_vec, 3)

    return [documents[i] for i in I[0]]