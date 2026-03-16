from fastapi import APIRouter
from services.chat_service import treasury_chat

router = APIRouter()

@router.post("/ai/chat")

def chat(question: str):

    return {

        "response": treasury_chat(question)

    }