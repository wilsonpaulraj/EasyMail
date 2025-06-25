import re
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from transformers import pipeline
import textwrap
import requests
from bs4 import BeautifulSoup

# Import custom modules for fetching and cleaning emails
from fetch_emails import fetch_emails
from clean_emails import extract_email_parts

# Initialize the summarization pipeline
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

# Function to extract keywords from the text
def extract_keywords(text, top_n=5):
    words = word_tokenize(re.sub(r'[^A-Za-z\s]', '', text.lower()))
    stop_words = set(stopwords.words('english'))
    filtered_words = [word for word in words if word not in stop_words]
    freq = nltk.FreqDist(filtered_words)
    most_common = freq.most_common(top_n)
    return [word for word, _ in most_common]

# Function to split body into chunks
def split_into_chunks(text, max_length):
    return textwrap.wrap(text, max_length)

# Function to summarize email using Hugging Face summarizer
def summarize_email(subject, body):
    max_input_length = 1024  # Max input length for the model
    chunk_size = 1000  # Adjust this based on the max input length and some buffer

    # Split body into chunks
    body_chunks = split_into_chunks(body, chunk_size)

    # Summarize each chunk and combine the results
    summary = ''
    for chunk in body_chunks:
        summary_chunk = summarizer(chunk, max_length=100, min_length=30, do_sample=False)[0]['summary_text']
        summary += summary_chunk + ' '

    return summary.strip()

# Function to extract important links from the email body
def extract_links(text):
    soup = BeautifulSoup(text, 'html.parser')
    links = [a['href'] for a in soup.find_all('a', href=True)]
    return links

# Fetch and process emails
emails = fetch_emails('wilsonpaulrajd@gmail.com', 'rtrx veke jtsc acux', '2024-9-12', '2024-10-12')
email_data = extract_email_parts(emails)

# Create DataFrame for email data
email_df = pd.DataFrame(email_data)

# Summarize emails and extract important links
summarized_emails = []
for index, email in email_df.iterrows():
    subject = email['subject']
    body = email['body']
    sender = email['sender']

    summarized_text = summarize_email(subject, body)
    important_links = extract_links(body)

    summarized_emails.append({
        "subject": subject,
        "body": summarized_text,
        "sender": sender,
        "links": important_links
    })

# Write summarized emails to a text file
with open('summarized_emails.txt', 'w', encoding='utf-8') as file:
    for email in summarized_emails:
        file.write(f"Sender: {email['sender']}\n")
        file.write(f"Subject: {email['subject']}\n")
        file.write(f"Summary: {email['body']}\n")
        if email['links']:
            file.write("Links:\n")
            for link in email['links']:
                file.write(f"{link}\n")
        file.write("=" * 120 + "\n")

print("Summarization complete. Check the 'summarized_emails.txt' file.")
