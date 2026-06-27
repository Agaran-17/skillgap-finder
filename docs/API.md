# API Design

## Analyze Resume

Endpoint

POST /analyze

Purpose

Analyze a resume against a target job role.

Input

- PDF Resume
- Target Role

Processing

- Extract PDF Text
- Send Text to Gemini
- Receive Structured JSON

Output

ResumeAnalysisResponse