from fastapi import APIRouter
from langchain_openai import ChatOpenAI

router = APIRouter(prefix="/ai")

llm = ChatOpenAI(model="gpt-4o-mini")

@router.post("/summarize")

def summarize(text:str):

    prompt = f"Summarize this treasury document:\n{text}"

    result = llm.invoke(prompt)

    return {
        "summary": result.content
    }