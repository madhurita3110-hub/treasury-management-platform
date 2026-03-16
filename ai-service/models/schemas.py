from pydantic import BaseModel
from typing import List

class ChatRequest(BaseModel):
    question: str

class ChatResponse(BaseModel):
    answer: str

class Transaction(BaseModel):
    id: int
    account_id: int
    amount: float
    type: str
    description: str

class AnomalyResponse(BaseModel):
    anomalies: List[Transaction]