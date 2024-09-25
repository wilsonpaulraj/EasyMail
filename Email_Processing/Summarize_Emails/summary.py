import pandas as pd
from nltk.corpus import stopwords
from nltk.cluster.util import cosine_distance
from fetch_emails import fetch_emails
from clean_emails import extract_email_parts
import networkx as nx
import numpy as np
import re


def clean_sentence(sentence):
    return re.sub(r'[^A-Za-z]', ' ', sentence)


def sentence_similarity(sent1, sent2, stop_words=None):
    if stop_words is None:
        stop_words = []

    sent1 = clean_sentence(sent1)
    sent2 = clean_sentence(sent2)

    sent1 = [w.lower() for w in sent1.split() if w.lower() not in stop_words]
    sent2 = [w.lower() for w in sent2.split() if w.lower() not in stop_words]

    all_words = list(set(sent1 + sent2))

    vector1 = [0] * len(all_words)
    vector2 = [0] * len(all_words)

    for w in sent1:
        vector1[all_words.index(w)] += 1

    for w in sent2:
        vector2[all_words.index(w)] += 1

    return 1 - cosine_distance(vector1, vector2)


def build_similarity_matrix(sentences, stop_words):
    similarity_matrix = np.zeros((len(sentences), len(sentences)))
    for idx1 in range(len(sentences)):
        for idx2 in range(len(sentences)):
            if idx1 == idx2:
                continue
            similarity_matrix[idx1][idx2] = sentence_similarity(sentences[idx1], sentences[idx2], stop_words)

    return similarity_matrix


def summarize(sentences, top_n=4):
    stop_words = stopwords.words('english')
    summarized_text = []

    sentence_similarity_matrix = build_similarity_matrix(sentences, stop_words)

    sentence_similarity_graph = nx.from_numpy_array(sentence_similarity_matrix)
    scores = nx.pagerank(sentence_similarity_graph)

    ranked_sentences = sorted(((scores[i], s) for i, s in enumerate(sentences)), reverse=True)

    for i in range(min(top_n, len(ranked_sentences))):
        summarized_text.append(ranked_sentences[i][1])

    return " ".join(summarized_text)


emails = fetch_emails()
email_data = extract_email_parts(emails)

# Convert email_data to a DataFrame
email_df = pd.DataFrame(email_data)

summarized_emails = []

for index, email in email_df.iterrows():
    subject = email['subject']
    body = email['body']
    sender = email['sender']

    sentences = body.split(". ")
    summarized_text = summarize(sentences)
    summarized_emails.append({"subject": subject, "body": summarized_text, "sender": sender})

# Write the summarized emails to a file with UTF-8 encoding
with open('summarized_emails.txt', 'w', encoding='utf-8') as file:
    for email in summarized_emails:
        file.write(email['subject'] + "\n")
        file.write(email['body'] + "\n")
        file.write(email['sender'] + "\n")
        file.write("=" * 120 + "\n")

print("Summarization complete. Check the 'summarized_emails.txt' file.")
