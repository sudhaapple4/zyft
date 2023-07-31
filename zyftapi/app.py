from flask import Flask, render_template,request
import requests

# create flask object
app = Flask(__name__, template_folder='template')

def fetch_data_from_api(api_url):
    response = requests.get(api_url)
    if response.status_code == 200:
        data = response.json()
        # print('-------------data ',data['products'])
        return data['products']
    else:
        print(f"Failed to fetch data from API. Status code: {response.status_code}")
        return None
    
@app.route('/')
def index():
    api_url = 'https://dummyjson.com/products/'

    # Fetch data from the API
    data = fetch_data_from_api(api_url)

    if data:
        # Assuming the data from the API is a list, you can pass it to the template
        data_list = data
        # print(data_list)
        return render_template('index.html', data_list=data_list)

    else:
        # Handle the case when data cannot be fetched from the API
        return "Failed to fetch data from API."

if __name__ == '__main__':
    app.run(debug=True)