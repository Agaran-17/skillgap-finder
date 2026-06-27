from fastapi import APIRouter, UploadFile, File

router = APIRouter()


@router.post("/upload")
async def upload_resume(
    resume: UploadFile = File(...)
):
    content = await resume.read()

    return {
        "filename": resume.filename,
        "content_type": resume.content_type,
        "file_size": len(content)
    }