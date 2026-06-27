import fitz


def extract_text_from_pdf(pdf_bytes: bytes) -> str:
    document = fitz.open(
        stream=pdf_bytes,
        filetype="pdf"
    )

    extracted_text = ""

    for page_num in range(document.page_count):
        page = document.load_page(page_num)
        extracted_text += page.get_text()

    document.close()

    return extracted_text