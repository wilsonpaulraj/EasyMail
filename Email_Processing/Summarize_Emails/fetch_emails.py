from imap_tools import MailBox, AND
from email.header import decode_header
import pandas as pd
from bs4 import BeautifulSoup

# Email account credentials
IMAP_SERVER = 'imap.gmail.com'
EMAIL_ACCOUNT = 'wilsonpaulrajd@gmail.com'
PASSWORD = 'rtrx veke jtsc acux'

def fetch_emails():
    email_data = []
    
    # Connect and login to the email account
    with MailBox(IMAP_SERVER).login(EMAIL_ACCOUNT, PASSWORD) as mailbox:
        # Fetch all emails from the inbox
        for msg in mailbox.fetch(limit=5, reverse=True):
            # Decode the email subject
            subject, encoding = decode_header(msg.subject)[0]
            if isinstance(subject, bytes):
                subject = subject.decode(encoding if encoding else 'utf-8')
            
            # Decode the email sender
            from_ = msg.from_
            
            # Extract email body
            body = ""
            if msg.html:
                soup = BeautifulSoup(msg.html, "html.parser")
                body = soup.get_text()
            elif msg.text:
                body = msg.text
            
            email_data.append({
                'from': from_,
                'subject': subject,
                'body': body.strip()  # Strip leading/trailing whitespace
            })
    

    return email_data
    