from fastapi import APIRouter
from services.document_summary import summarize_document

router = APIRouter()

@router.post("/ai/summarize")

def summarize(text: str):

    return {

        "summary": summarize_document(text)

    }