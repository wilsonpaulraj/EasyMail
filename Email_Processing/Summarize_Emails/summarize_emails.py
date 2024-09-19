import nltk
from collections import Counter

def summarize_text(text, num_sentences=3):
    sentences = nltk.sent_tokenize(text)
    word_frequencies = Counter(nltk.word_tokenize(text.lower()))
    sentence_scores = {}
    for sentence in sentences:
        for word in nltk.word_tokenize(sentence.lower()):
            if word in word_frequencies:
                if sentence not in sentence_scores:
                    sentence_scores[sentence] = word_frequencies[word]
                else:
                    sentence_scores[sentence] += word_frequencies[word]
    summarized_sentences = sorted(sentence_scores, key=sentence_scores.get, reverse=True)[:num_sentences]
    return ' '.join(summarized_sentences)

def summarize_emails(emails):
    for email in emails:
        email['summary'] = summarize_text(email['clean_body'])
    return emails
