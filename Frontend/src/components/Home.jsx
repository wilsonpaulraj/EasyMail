import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-lightGray flex flex-col items-center justify-center text-darkGray">
            <header className="w-full py-8 bg-primary text-white text-center">
                <h1 className="text-5xl font-bold">Welcome to EasyMail</h1>
                <p className="mt-2 text-lg">Your Personal Email Summarization Tool</p>
            </header>

            <main className="flex-1 w-full flex flex-col items-center px-4 py-16">
                <h2 className="text-4xl font-semibold text-center mb-8">Stay on Top of Your Emails</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-primary">Summarize Emails</h3>
                        <p className="mt-4">Get concise summaries of your unread emails with a single click.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-secondary">Organize Your Inbox</h3>
                        <p className="mt-4">Automatically categorize and prioritize your emails for easy management.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold text-accent">Stay Notified</h3>
                        <p className="mt-4">Receive real-time notifications about important emails.</p>
                    </div>
                </div>
            </main>

            <footer className="w-full py-4 bg-primary text-white text-center">
                <p>&copy; 2024 EasyMail. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
