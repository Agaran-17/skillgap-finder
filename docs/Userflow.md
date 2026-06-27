# User Flow

1. User opens SkillGap Finder.

2. User uploads a PDF resume.

3. User enters a target job role.

4. Frontend sends the resume and role to the backend.

5. Backend extracts resume text.

6. Backend sends the extracted text and target role to Gemini.

7. Gemini returns structured JSON.

8. Backend validates the response.

9. Frontend displays the analysis report.