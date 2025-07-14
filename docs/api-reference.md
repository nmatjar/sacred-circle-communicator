# OCTO Communicator API Reference

## Overview

The OCTO Communicator API provides comprehensive access to ProfileCoder 3.3 data, Quantum Presence Interface, and MCIC-8/7 interaction systems. This RESTful API enables integration with external tools, automation systems, and third-party applications.

## Base URL
```
https://api.octo-communicator.dev/v1
```

## Authentication

### API Key Authentication
```http
Authorization: Bearer YOUR_API_KEY
```

### OAuth 2.0 (Recommended for user applications)
```http
Authorization: Bearer YOUR_OAUTH_TOKEN
```

## Core Endpoints

### Profile Management

#### Get User Profile
```http
GET /profiles/{userId}
```

**Response:**
```json
{
  "userId": "user-123",
  "profileCoder": "📄{VR=3.3;PI=user-123;OW=Alex Chen} ▪ 💼{WS=🔄^5;NL=🔇^4}...",
  "segments": {
    "metadata": {
      "version": "3.3",
      "profileId": "user-123",
      "owner": "Alex Chen",
      "lastUpdated": "2025-01-14T16:30:00Z"
    },
    "workEnvironment": {
      "workStyle": "🔄",
      "workStyleWeight": 5,
      "noiseLevel": "🔇",
      "noiseLevelWeight": 4
    }
  },
  "privacy": {
    "visibility": "team",
    "shareWith": ["team-members", "clients"],
    "hiddenSegments": []
  }
}
```

#### Update Profile Segment
```http
PATCH /profiles/{userId}/segments/{segmentId}
```

**Request Body:**
```json
{
  "segment": "🟢{ST=A~Energetic;AC=COLLAB;IP=SYNC^4}",
  "expiresAt": "2025-01-14T18:00:00Z"
}
```

### Presence Management

#### Get Current Presence
```http
GET /presence/{userId}
```

**Response:**
```json
{
  "userId": "user-123",
  "timestamp": "2025-01-14T16:30:00Z",
  "liveStatus": {
    "status": "A",
    "statusQualifier": "Energetic",
    "activity": "COLLAB",
    "interruptionPreference": "SYNC",
    "interruptionWeight": 4,
    "interruptionThreshold": "IMP",
    "expiresAt": "2025-01-14T18:00:00Z"
  },
  "cognitiveState": {
    "cognitiveLoad": "M",
    "cognitiveLoadWeight": 3,
    "attentionState": "AVA",
    "attentionWeight": 4,
    "energyLevel": "H",
    "energyWeight": 5,
    "optimalTaskType": "CR",
    "flowState": "NA"
  },
  "socialResonance": {
    "collaborationMode": "OFFER",
    "collaborationWeight": 4,
    "socialBandwidth": "H",
    "bandwidthWeight": 4,
    "serendipityOpenness": "OPEN",
    "serendipityWeight": 3
  },
  "urbanIntegration": {
    "environmentInteraction": "ACTIVE",
    "resourceRequests": ["QUIET"],
    "locationAware": true
  },
  "aiPartnership": {
    "delegationLevel": "R",
    "delegationWeight": 4,
    "aiVisibility": "DISC",
    "automatedTasks": ["email_triage", "calendar_mgmt"]
  }
}
```

#### Update Presence
```http
PUT /presence/{userId}
```

**Request Body:**
```json
{
  "liveStatus": {
    "status": "B",
    "statusQualifier": "Deep Work",
    "activity": "DEEP",
    "expiresAt": "2025-01-14T17:00:00Z"
  },
  "cognitiveState": {
    "cognitiveLoad": "H",
    "attentionState": "FOC",
    "flowState": "MAINTAIN"
  }
}
```

### Contact Management

#### Get Contacts
```http
GET /contacts?context={context}&limit={limit}&offset={offset}
```

**Parameters:**
- `context`: Filter by relationship context (@Team, @Client, @Personal)
- `limit`: Number of results (default: 50, max: 200)
- `offset`: Pagination offset

**Response:**
```json
{
  "contacts": [
    {
      "contactId": "contact-456",
      "name": "Sarah Johnson",
      "relationship": "@Team",
      "compatibilityScore": 0.87,
      "lastInteraction": "2025-01-14T15:30:00Z",
      "presence": {
        "status": "A",
        "activity": "COLLAB",
        "cognitiveLoad": "M"
      },
      "mcicPreferences": ["🔄", "📊", "💡"]
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 50,
    "offset": 0,
    "hasMore": true
  }
}
```

#### Analyze Contact Compatibility
```http
POST /contacts/{contactId}/compatibility
```

**Response:**
```json
{
  "compatibilityScore": 0.87,
  "analysis": {
    "communicationStyle": {
      "score": 0.92,
      "details": "Both prefer direct, collaborative communication"
    },
    "workStyle": {
      "score": 0.85,
      "details": "Complementary work preferences - remote/flexible"
    },
    "cognitiveStyle": {
      "score": 0.84,
      "details": "Similar analytical thinking patterns"
    }
  },
  "recommendations": [
    "Best collaboration times: Tuesday mornings",
    "Preferred communication: Video calls for brainstorming",
    "Optimal project types: Data analysis and strategy"
  ]
}
```

### MCIC Interactions

#### Get Optimal Intentions
```http
GET /mcic/{contactId}/intentions
```

**Response:**
```json
{
  "contactId": "contact-456",
  "availableIntentions": [
    {
      "intention": "🔄",
      "name": "WSPÓŁPRACUJ",
      "relevanceScore": 0.95,
      "recentSuccess": 0.88,
      "suggestedChannels": ["video", "chat"]
    },
    {
      "intention": "📊",
      "name": "ANALIZUJ",
      "relevanceScore": 0.91,
      "recentSuccess": 0.92,
      "suggestedChannels": ["email", "document"]
    }
  ],
  "hiddenIntentions": ["⚡"],
  "contextualNotes": "High collaboration compatibility, avoid urgent requests during focus time"
}
```

#### Log Interaction
```http
POST /mcic/interactions
```

**Request Body:**
```json
{
  "contactId": "contact-456",
  "intention": "🔄",
  "channel": "video",
  "duration": 1800,
  "outcome": "successful",
  "satisfaction": 4.5,
  "notes": "Great brainstorming session on Q4 strategy"
}
```

### Team Analytics

#### Get Team Presence Overview
```http
GET /teams/{teamId}/presence
```

**Response:**
```json
{
  "teamId": "team-789",
  "timestamp": "2025-01-14T16:30:00Z",
  "overview": {
    "totalMembers": 8,
    "available": 5,
    "busy": 2,
    "away": 1,
    "averageCognitiveLoad": 0.65,
    "collaborationReadiness": 0.78
  },
  "members": [
    {
      "userId": "user-123",
      "name": "Alex Chen",
      "status": "A",
      "cognitiveLoad": "M",
      "collaborationMode": "OFFER"
    }
  ],
  "insights": {
    "optimalCollaborationWindow": "2025-01-14T17:00:00Z",
    "teamEnergyLevel": "high",
    "recommendedActivities": ["brainstorming", "planning"]
  }
}
```

#### Get Team Compatibility Matrix
```http
GET /teams/{teamId}/compatibility
```

**Response:**
```json
{
  "teamId": "team-789",
  "compatibilityMatrix": [
    {
      "member1": "user-123",
      "member2": "user-456",
      "score": 0.87,
      "strengths": ["communication", "work-style"],
      "challenges": ["time-zones"]
    }
  ],
  "teamDynamics": {
    "averageCompatibility": 0.82,
    "strongPairs": 6,
    "improvementAreas": ["cross-timezone collaboration"]
  },
  "recommendations": [
    "Schedule team meetings at 10:00 AM for optimal energy alignment",
    "Pair Alex and Sarah for analytical projects"
  ]
}
```

## Webhooks

### Presence Change Events
```http
POST /webhooks/presence
```

**Payload:**
```json
{
  "event": "presence.updated",
  "userId": "user-123",
  "timestamp": "2025-01-14T16:30:00Z",
  "changes": {
    "liveStatus": {
      "from": "A",
      "to": "B"
    },
    "cognitiveState": {
      "cognitiveLoad": {
        "from": "M",
        "to": "H"
      }
    }
  }
}
```

### Interaction Events
```http
POST /webhooks/interactions
```

**Payload:**
```json
{
  "event": "interaction.completed",
  "userId": "user-123",
  "contactId": "contact-456",
  "intention": "🔄",
  "outcome": "successful",
  "timestamp": "2025-01-14T16:30:00Z"
}
```

## Integration Examples

### Calendar Integration
```javascript
// Automatically update presence based on calendar events
const calendarEvent = {
  title: "Deep Work Block",
  start: "2025-01-14T14:00:00Z",
  end: "2025-01-14T16:00:00Z"
};

await octoAPI.updatePresence(userId, {
  liveStatus: {
    status: "B",
    statusQualifier: "Deep Work",
    activity: "DEEP",
    expiresAt: calendarEvent.end
  },
  cognitiveState: {
    attentionState: "FOC",
    flowState: "ENTER"
  }
});
```

### Slack Bot Integration
```javascript
// Slack command: /octo-status
app.command('/octo-status', async ({ command, ack, respond }) => {
  await ack();
  
  const presence = await octoAPI.getPresence(command.user_id);
  const status = formatPresenceForSlack(presence);
  
  await respond({
    text: `Your OCTO status: ${status}`,
    response_type: 'ephemeral'
  });
});
```

### Smart Building Integration
```javascript
// Update presence based on room occupancy
const roomSensor = {
  roomId: "conf-room-a",
  occupied: true,
  noiseLevel: 45,
  lightLevel: 800
};

if (roomSensor.occupied && roomSensor.noiseLevel < 50) {
  await octoAPI.updatePresence(userId, {
    liveStatus: {
      status: "B",
      activity: "MEETING"
    },
    urbanIntegration: {
      environmentInteraction: "ACTIVE",
      resourceRequests: ["QUIET"]
    }
  });
}
```

## Rate Limits

- **Standard tier**: 1000 requests/hour
- **Premium tier**: 10,000 requests/hour
- **Enterprise tier**: Custom limits

Rate limit headers:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642176000
```

## Error Handling

### Standard Error Response
```json
{
  "error": {
    "code": "INVALID_PROFILE_SEGMENT",
    "message": "The provided ProfileCoder segment is malformed",
    "details": {
      "segment": "🟢{ST=INVALID}",
      "issue": "Unknown status value 'INVALID'"
    },
    "timestamp": "2025-01-14T16:30:00Z"
  }
}
```

### Common Error Codes
- `UNAUTHORIZED` (401) - Invalid or missing authentication
- `FORBIDDEN` (403) - Insufficient permissions
- `NOT_FOUND` (404) - Resource not found
- `RATE_LIMITED` (429) - Rate limit exceeded
- `INVALID_PROFILE_SEGMENT` (400) - Malformed ProfileCoder data
- `PRESENCE_CONFLICT` (409) - Conflicting presence updates

## SDK Libraries

### JavaScript/TypeScript
```bash
npm install @octo-communicator/sdk
```

```javascript
import { OctoAPI } from '@octo-communicator/sdk';

const octo = new OctoAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.octo-communicator.dev/v1'
});

const presence = await octo.presence.get('user-123');
```

### Python
```bash
pip install octo-communicator-sdk
```

```python
from octo_communicator import OctoAPI

octo = OctoAPI(api_key='your-api-key')
presence = octo.presence.get('user-123')
```

### Go
```bash
go get github.com/octo-communicator/go-sdk
```

```go
import "github.com/octo-communicator/go-sdk"

client := octosdk.NewClient("your-api-key")
presence, err := client.Presence.Get("user-123")
```

## Security Considerations

### Data Privacy
- All ProfileCoder data is encrypted at rest and in transit
- Granular permission controls for data sharing
- GDPR and CCPA compliant data handling
- User-controlled data retention policies

### API Security
- OAuth 2.0 with PKCE for user applications
- API key rotation and management
- Request signing for sensitive operations
- IP allowlisting for enterprise accounts

### Audit Logging
- All API calls are logged with user attribution
- Presence changes tracked with timestamps
- Data access patterns monitored for anomalies
- Compliance reporting available

---

*The OCTO Communicator API enables seamless integration of ProfileCoder 3.3 and Quantum Presence Intelligence into your existing workflows and tools.*
