from fastapi import APIRouter
from langgraph.treasury_graph import TreasuryGraph

router = APIRouter()

@router.post("/ai/analysis")

def analyze():

    graph = TreasuryGraph()

    result = graph.run()

    return result