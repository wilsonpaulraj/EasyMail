from transformers import pipeline
from fetch_emails import fetch_emails
from clean_emails import extract_email_parts

# Fetch emails
emails = fetch_emails()

# Extract and clean email parts
email_data = [email['body'] for email in extract_email_parts(emails)]

# Initialize the summarization pipeline
summarizer = pipeline('summarization')

# Summarize the email data
summarized_text = summarizer(email_data, max_length=30, min_length=3,  do_sample=False)

# Print summarized text
for i, summary in enumerate(summarized_text):
    print(f"Email {i+1} Summary: {summary['summary_text']}")
