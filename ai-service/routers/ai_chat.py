from fastapi import APIRouter
from langgraph.treasury_graph import treasury_agent

router = APIRouter(prefix="/ai")

@router.post("/chat")

def chat(question:str):

    result = treasury_agent.invoke(
        {"question":question}
    )

    return {
        "response": result["answer"]
    }