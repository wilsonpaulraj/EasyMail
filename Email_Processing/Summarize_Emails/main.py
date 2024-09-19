from fetch_emails import fetch_emails
from clean_emails import extract_email_parts
from process_text import preprocess_emails
from summarize_emails import summarize_emails
import pandas as pd

def save_summarized_emails(emails, filename='summarized_emails.txt'):
    with open(filename, 'w', encoding='utf-8') as file:
        for email in emails:
            summary_text = f"Sender: {email['sender']}\nSubject: {email['subject']}\nSummary: {email['summary']}\n"
            box_width = max(len(line) for line in summary_text.split('\n'))
            border_line = '+' + '-' * (box_width + 2) + '+\n'
            file.write(border_line)
            for line in summary_text.split('\n'):
                file.write(f"| {line.ljust(box_width)} |\n")
            file.write(border_line)
            file.write('\n')
    print(f"Summarized emails saved to {filename}")

def main():
    emails = fetch_emails()
    if not emails:
        print("No emails fetched.")
        return

    print(f"Fetched {len(emails)} emails.")
    
    email_parts = extract_email_parts(emails)
    if not email_parts:
        print("No email parts extracted.")
        return

    preprocessed_emails = preprocess_emails(email_parts)
    summarized_emails = summarize_emails(preprocessed_emails)
    save_summarized_emails(summarized_emails)

if __name__ == "__main__":
    main()