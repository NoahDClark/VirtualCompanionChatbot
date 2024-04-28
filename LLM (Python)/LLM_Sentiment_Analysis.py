#Unfinished sentiment analysis portion
from transformers import pipeline

# Initialize the sentiment analysis pipeline
sentiment_analyzer = pipeline('sentiment-analysis')

def analyze_sentiment_and_generate_response(user_input):
    global conversation_history
    conversation_history.append(user_input)

    # Analyze sentiment of the user's input
    sentiment_result = sentiment_analyzer(user_input)[0]
    sentiment_label = sentiment_result['label']
    print(f"Detected sentiment: {sentiment_label} with a score of {sentiment_result['score']:.2f}")

    # Here, we can adjust the response generation based on the detected sentiment.
    # For simplicity, this example will just append the sentiment to the chatbot's response for demonstration.

    # Generate response considering the conversation history
    relevant_history = conversation_history[-5:]
    response = chatbot(" ".join(relevant_history), max_new_tokens=50, num_return_sequences=1)[0]['generated_text']
    response_only = response[len(" ".join(relevant_history)):].strip()
    conversation_history.append(response_only)

    # Tailor the response based on sentiment (example adjustment)
    tailored_response = f"{response_only} (Responding with {sentiment_label} sentiment)"

    return tailored_response
