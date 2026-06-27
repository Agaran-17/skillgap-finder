from pydantic import BaseModel
class ResumeAnalysisResponse(BaseModel):
    resume_summary:str
    target_role:str
    match_percentage:int
    matching_skills:list[str]