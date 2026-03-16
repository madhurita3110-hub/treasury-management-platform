from fastapi import APIRouter
from services.anomaly_service import detect_anomalies

router = APIRouter()

@router.get("/ai/anomalies")

def anomalies():

    result = detect_anomalies()

    return {

        "anomalies": result

    }