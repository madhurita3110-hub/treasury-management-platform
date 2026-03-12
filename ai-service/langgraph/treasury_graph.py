from langgraph.graph import StateGraph
from services.rag_service import ask_treasury_question

class TreasuryState(dict):
    question: str
    answer: str


def ai_node(state):

    answer = ask_treasury_question(state["question"])

    return {"answer": answer}


graph = StateGraph(TreasuryState)

graph.add_node("ai_node", ai_node)

graph.set_entry_point("ai_node")

treasury_agent = graph.compile()