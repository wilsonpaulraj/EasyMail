from bs4 import BeautifulSoup
import re

def clean_email_body(body):
    soup = BeautifulSoup(body, "html.parser")
    clean_text = soup.get_text()
    clean_text = re.sub(r'\s+', ' ', clean_text).strip()
    return clean_text

def extract_email_parts(emails):
    email_data = []
    for email in emails:
        sender = email.get('from')
        subject = email.get('subject')
        body = clean_email_body(email.get('body', ''))
        email_data.append({'sender': sender, 'subject': subject, 'body': body})
    return email_data
