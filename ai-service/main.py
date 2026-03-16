from fastapi import FastAPI

from routers import ai_analysis
from routers import ai_chat
from routers import anomaly_detection
from routers import document_summary

app = FastAPI(title="Treasury AI Service")

app.include_router(ai_analysis.router)
app.include_router(ai_chat.router)
app.include_router(anomaly_detection.router)
app.include_router(document_summary.router)

@app.get("/")

def root():

    return {"status":"AI service running"}