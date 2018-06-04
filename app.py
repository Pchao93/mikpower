from flask import Flask, render_template
from flask import jsonify
from pymongo import MongoClient
import urllib.request
import requests
import json
import os

client = MongoClient()
db = client.MikPower
collection = db.MikPower

app = Flask(__name__)
# app.debug = True
@app.route('/')
def render_index():
   return render_template("index.html")

@app.route('/api/playbyplay/<game_id>')
def fetchPlaybyPlay(game_id):
    print("get here")
    print(game_id)
    url = f"http://stats.nba.com/stats/playbyplayv2/?GameID={game_id}&StartPeriod=1&EndPeriod=14"
    headers = {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive',
        'Host': 'stats.nba.com',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }

    req = urllib.request.Request(url, b"", headers)

    contents = requests.get(url, headers = headers) # urllib.request.urlopen(req)

    dictionary = json.loads(contents.text)
    return jsonify(dictionary)

@app.route('/api/games/<date>')
def fetchGames(date):
    contents = urllib.request.urlopen(f"http://data.nba.net/10s/prod/v1/2018{date}/scoreboard.json").read()
    dictionary = json.loads(contents)
    return jsonify(dictionary)




if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    # app.run(host='0.0.0.0', port=port)
    app.run
