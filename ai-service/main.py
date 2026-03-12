from fastapi import FastAPI
from routers import ai_chat, anomaly_detection, document_summary

app = FastAPI(
    title="Treasury AI Service"
)

app.include_router(ai_chat.router)
app.include_router(anomaly_detection.router)
app.include_router(document_summary.router)

@app.get("/")
def health():
    return {"status": "AI service running"}