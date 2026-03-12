from fastapi import APIRouter
import numpy as np

router = APIRouter(prefix="/ai")

@router.post("/detect-anomaly")

def detect_anomaly(transactions:list):

    mean = np.mean(transactions)

    anomalies = []

    for t in transactions:

        if t > mean * 2:
            anomalies.append(t)

    return {
        "anomalies": anomalies
    }