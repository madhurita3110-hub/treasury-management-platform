from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings
from langchain_openai import ChatOpenAI

embedding = OpenAIEmbeddings()
llm = ChatOpenAI(model="gpt-4o-mini")

def ask_treasury_question(question):

    db = FAISS.load_local("vector_store/faiss_index", embedding)

    docs = db.similarity_search(question, k=3)

    context = "\n".join([doc.page_content for doc in docs])

    prompt = f"""
    You are a treasury financial assistant.

    Context:
    {context}

    Question:
    {question}
    """

    response = llm.invoke(prompt)

    return response.content