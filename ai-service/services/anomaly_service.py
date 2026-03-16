from sklearn.ensemble import IsolationForest
import numpy as np
from services.db_service import get_transactions

def detect_anomalies():

    transactions = get_transactions()

    amounts = [t["amount"] for t in transactions]

    X = np.array(amounts).reshape(-1,1)

    model = IsolationForest(contamination=0.1)

    model.fit(X)

    predictions = model.predict(X)

    anomalies = []

    for i,p in enumerate(predictions):

        if p == -1:
            anomalies.append(transactions[i])

    return anomalies