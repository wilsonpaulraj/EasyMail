import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB


import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords

data = pd.read_csv("..//Datasets//dataset.csv")
df = pd.DataFrame(data)




encoder = OneHotEncoder(sparse_output=False)
df['Category'] = encoder.fit_transform(df[['Category']])
print(df.head())

X_train, X_test, y_train, y_test = train_test_split( df['Masseges'],df['Category'], test_size=0.25, random_state=42)


pipeline = Pipeline(steps=[
    ('tfidf', TfidfVectorizer(stop_words=stopwords.words('english'))),
    ('classifier', MultinomialNB())
])

pipeline.fit(X_train, y_train)

print(f'Score : {pipeline.score(X_test, y_test)}')

