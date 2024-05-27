var coding = `
<div class="col l12 m12 s12 z-depth-0">
  <div class="container">
    <div class="row">
      <div class="col l11 m11 s12 left-align">

      <div class="row">
          <div class="col l12 m12 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/groknotes.png" 
              onclick="showModal(
                'GrokNotes', 
                '<b>Description:</b> ChatGPT is great to learn about topics at a high level, but to really get deep, you have to ask many follow-up questions. The best way to learn about a topic in detail is still to take a course on it, but courses are expensive and time-consuming. I built GrokNotes to solve this problem. GrokNotes is an app that uses AI to generate course notes for any subject. You can enter any topic and GrokNotes will generate a list of the most important concepts in that topic. You can then click on any concept to get detailed lecture notes for that concept. I also incorporated a feature that tests your understanding of concepts by asking you to type them in your own words and uses AI to check your answers. I encourage you to give it a try and hope you find it useful!', 
                '<b>Technologies:</b> React, OpenAI, Flask, Redis, MongoDB', 
                'static/img/coding/groknotes2.png',
                '<b>URL:</b> <a target=_blank href=https://groknotes.xyz>www.groknotes.xyz</a>'
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that uses AI to teach you anything
            </p>
            <br class="hide-on-med-and-up">
          </div>
        </div>
      
        <div class="row">

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/mantro.png" 
              onclick="showModal(
                'Mantro', 
                '<b>Description:</b> After a deep conversation with a friend about mindfulness, he recommended a book which I really wanted to read, but I knew that I would probably buy it and start it but eventually get busy and never finish it. I thought it would be great if there was a way to get the key insights from the book without having to read the whole thing, so so I built Mantro, an app that summarizes books and lets you interact with the author. I used the Google Books API to scrape books then fed them to an LLM to generate a summary. I then added a feature where you can ask the author questions and the LLM will generate a response as if the author was responding. I added several more features such as book collections, summarizing multiple books at once, and searching books by topic.',
                '<b>Technologies:</b> Google Books API, OpenAI, Amazon Associates API, Flask, MongoDB', 
                'static/img/coding/mantro.png',
                ''
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that summarizes books and lets you interact with the author
            </p>
            <br class="hide-on-med-and-up">
          </div>

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/rmfl.png" 
              onclick="showModal(
                'Roast My Fantasy League', 
                '<b>Description:</b> During the 2023 NFL season, one of my roommates who is big into football added me to his fantasy football league. I had never played fantasy football before and was very eager to try it because I had always found the concept fascinating. We used an app called Sleeper to administer the league, which had a robust and easy-to-use API. I started by scraping my roster and wrote a script to see if there were better players on the waver wire that I could pick up. I then thought about the classic How Bad Is Your Streaming Music app that went viral in 2021 for roasting your Spotify listening history and thought it would be fun to build a similar app for fantasy football. I built the app in a few hours and it was a lot of fun to use.',
                '<b>Technologies:</b> Sleeper API, OpenAI, Flask, MongoDB', 
                'static/img/coding/rmfl.png',
                '<b>URL:</b> <a target=_blank href=http://roastmyfantasyleague.com>www.roastmyfantasyleague.com</a>'
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that roasts your fantasy football roster
            </p>
            <br class="hide-on-med-and-up">
          </div>

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/lucidia.png" 
              onclick="showModal(
                'Sacred Texts', 
                '<b>Description:</b> Between 1903 and 1911, author Leo Tolstoy collected his favorite quotes of insight and wisdom which he published in a book called A Calendar of Wisdom. I bought this book to read on vacation and loved every quote but felt I was not able to fully process and retain each one, so I built an app that texts me one random quote each day. As generative image models have become more popular, I also added a feature that generates a random image to accompany each quote by chaining an LLM to generate a painting description from the quote and feeding it to DALLE. I encourage you to sign up in the link below!', 
                '<b>Technologies:</b> OpenAI, DALLE, Twilio, Flask, MongoDB, AWS Lambda',
                'static/img/coding/lucidia.png',
                '<b>URL:</b> <a target=_blank href=http://buddhisttexts.io>www.sacredtexts.io</a>'
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that texts you a daily quote of wisdom with accompanying art
            </p>
            <br class="hide-on-med-and-up">
          </div>

        </div>


        <div class="row" style="margin-top: 50px !important">

          
        
        </div>

      </div>
    </div>
  </div>
</div>
`;