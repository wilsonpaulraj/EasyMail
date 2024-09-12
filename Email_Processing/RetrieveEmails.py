import imaplib
import email
from email.header import decode_header
import pandas as pd

# Email account credentials
IMAP_SERVER = 'imap.gmail.com'
EMAIL_ACCOUNT = 'wilsonpaulrajd@gmail.com'
PASSWORD = 'aqvr uqvy wmlf ulst'

def fetch_emails():
    # Connect to the server
    mail = imaplib.IMAP4_SSL(IMAP_SERVER)
    
    # Log in to the account
    mail.login(EMAIL_ACCOUNT, PASSWORD)
    
    # Select the mailbox you want to use
    mail.select('inbox')
    
    # Search for all emails in the inbox
    status, messages = mail.search(None, 'ALL')
    
    # Convert messages to a list of email IDs
    email_ids = messages[0].split()
    
    # Create a list to store email data
    email_data = []
    
    for email_id in email_ids[:5]:
        # Fetch the email by ID
        status, msg_data = mail.fetch(email_id, '(RFC822)')
        
        for response_part in msg_data:
            if isinstance(response_part, tuple):
                msg = email.message_from_bytes(response_part[1])
                
                # Decode the email subject
                subject, encoding = decode_header(msg['Subject'])[0]
                if isinstance(subject, bytes):
                    subject = subject.decode(encoding if encoding else 'utf-8')
                
                # Decode the email sender
                from_ = msg.get('From')
                
                # Extract email body
                body = ""
                if msg.is_multipart():
                    for part in msg.walk():
                        content_type = part.get_content_type()
                        content_disposition = str(part.get('Content-Disposition'))
                        if 'attachment' not in content_disposition:
                            part_payload = part.get_payload(decode=True)
                            if part_payload:
                                body = part_payload.decode(errors='ignore')  # Handle decoding errors
                else:
                    part_payload = msg.get_payload(decode=True)
                    if part_payload:
                        body = part_payload.decode(errors='ignore')  # Handle decoding errors
                
                email_data.append({
                    'from': from_,
                    'subject': subject,
                    'body': body
                })
    
    # Close the connection and logout
    mail.close()
    mail.logout()
    
    return email_data

# Fetch emails and convert to DataFrame
email_data = fetch_emails()
df = pd.DataFrame(email_data)

print(df)
