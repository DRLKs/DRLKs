flowchart LR
  UI[Frontend - React/Vite] --> GW[API Gateway :8000]
  GW --> US[User Service :8001]
  GW --> CS[Calendar Service :8002]
  GW --> ES[Event Service :8003]
  GW --> NS[Notification Service :8004]
  GW --> AS[Auth Service :8005]
  GW --> IS[Integration Service :8006]

  US --> DB[(MongoDB)]
  CS --> DB
  ES --> DB
  NS --> DB
  IS --> DB

  IS --> GOOGLE[Google Calendar API]
  IS --> TEAMUP[Teamup API]
  IS --> OSM[OpenStreetMap/Nominatim]
  IS --> S3[AWS S3]
