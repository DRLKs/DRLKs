flowchart LR
  UI[Frontend - React/Vite] --> NG[Nginx Reverse Proxy]
  NG --> GW[FastAPI API Gateway :8000]

  GW --> HS[Health Service]
  GW --> IS[Insights Service]
  GW --> VS[Visualization Service]
  GW --> CS[Categories Service]
  GW --> AIS[AI Service - Multi Agent]

  HS --> ORACLE[(Oracle Autonomous Database 23ai)]
  IS --> ORACLE
  VS --> ORACLE
  CS --> ORACLE
  AIS --> ORACLE

  AIS --> XAI[xAI API]
  AIS --> TAVILY[Tavily Search API]
