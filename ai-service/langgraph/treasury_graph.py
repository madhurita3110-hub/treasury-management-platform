from langgraph.graph import StateGraph


def build_graph():

    graph = StateGraph()

    graph.add_node("retrieve_data")

    graph.add_node("analyze_transactions")

    graph.add_node("generate_answer")

    graph.set_entry_point("retrieve_data")

    return graph.compile()