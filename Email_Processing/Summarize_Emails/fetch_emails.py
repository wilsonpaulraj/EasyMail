from imap_tools import MailBox, AND, ImapToolsError
from email.header import decode_header
import pandas as pd
from bs4 import BeautifulSoup
from datetime import datetime

# Email account credentials
IMAP_SERVER = 'imap.gmail.com'

def fetch_emails(email, password, start_date, end_date):
    email_data = []

    start_date = datetime.strptime(start_date, "%Y-%m-%d").date()
    end_date = datetime.strptime(end_date, "%Y-%m-%d").date()

    try:
        # Connect and login to the email account
        with MailBox(IMAP_SERVER).login(email, password) as mailbox:
            # Fetch emails within the date range
            for msg in mailbox.fetch(AND(date=start_date)):
                if start_date <= msg.date.date() <= end_date:
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
                        'body': body.strip()
                    })

    except ImapToolsError as e:
        print("Login failed: incorrect email or password.")
        print(e)
        return ["AuthError"]

    return email_data
