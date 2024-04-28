from transformers import pipeline


# Load the chatbot model from a local directory
model_path = "place_model_path_here" #Current model path is saved to Cesar's computer; please upload ASAP
chatbot = pipeline('text-generation', model=model_path, temperature=0.8, top_p=0.9, max_length=50)


conversation_history = []

def generate_response(user_input):
    global conversation_history
    conversation_history.append(user_input)

    # Prepare the model input
    model_input = " ".join(conversation_history[-4:])  # Keep the last 4 exchanges

    # Generate the response
    responses = chatbot(model_input, max_new_tokens=50, num_return_sequences=1)
    model_response = responses[0]['generated_text'][len(model_input):].strip()

    conversation_history.append(model_response)

    # Optionally, post-process the response here

    return model_response

from flask import Flask, request, jsonify

app = Flask(__name__)
@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json['text']
    bot_response = generate_response(user_input)
    return jsonify({'reply': bot_response})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
