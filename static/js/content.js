var coding = `
<div class="col l12 m12 s12 z-depth-0">
  <div class="container">
    <div class="row">
      <div class="col l11 m11 s12 left-align">
      
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

        <div class="row" style="margin-top: 50px !important">

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/periodica.png" 
              onclick="showModal(
                'Periodica', 
                '<b>Description:</b> Staying up-to-date on news and current events is important, but I have always hated how political and biased many news stories are these days. I wanted a way to read news in a more objective way, so I built Periodica, an app that lets you read news in the form of AI-generated summaries. I used the Google News API to get the latest news stories and then fed them to an LLM to generate a summaries.', 
                '<b>Technologies:</b> Google News API, OpenAI, Flask, MongoDB, AWS Lambda', 
                'static/img/coding/periodica.png',
                ''
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that lets you read news in the form of AI-generated summaries
            </p>
            <br class="hide-on-med-and-up">
          </div>

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/serenademe3.png" 
              onclick="showModal(
                'SerenadeMe',
                '<b>Description:</b> SerenadeMe is an AI that integrates with your Spotify account and creates playlists of recommended songs based on your likes. I built this app because I love listening to music but often find myself listening to the same songs over and over again. I wanted a way to discover new music that I would like, so I built SerenadeMe with a good friend. We registered the app on Spotify with the goal of sending it out to all our friends and family, but Spotify rejected our app because they do not allow developers to use any sort of machine learning or AI to develop on top of their API. Oh well! We still had a lot of fun building it and I have been using it to discover new music for myself. I have also been using it to discover new music for my friends and family by creating playlists for them and sending them the links. I have gotten great feedback from them and hope you enjoy it as well if it has not been taken down by Spotify by the time you use it!',
                '<b>Technologies:</b> Google Books API, OpenAI, Amazon Associates API, Flask, MongoDB', 
                'static/img/coding/serenademe3.png',
                '<b>URL:</b> <a target=_blank href=https://serenademe.herokuapp.com>www.serenademe.io</a>'
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that creates Spotify playlists of recommended songs based on your likes
            </p>
            <br class="hide-on-med-and-up">
          </div>

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/infinito.png" 
              onclick="showModal(
                'Infinito', 
                '<b>Description:</b> This project was inspired by The Infinite Conversation, an AI generated, never-ending discussion between Werner Herzog and Slavoj Žižek. My twist on it was to create a conversation between two LLMs with a focus on interesting and controversial conversation topics. I also experimented with a few different text-to-speech technologies, trying the built-in browser package which was robotic, Amazon Polly which was slow, and ElevenLabs which was perfect (despite being a bit expensive). My prompt for both sides of the conversation after some experimentation is: <br><br><i>Continue only the next line (not more than one) of this conversation in the most engaging way possible for a third-party listener of the conversation who loves hearing lively debates, friendly banter, interesting stories, and learning new things. Do not let the conversation end and do not say bye; suggest a change of topic instead if the conversation is in a lull.</i>', 
                '<b>Technologies:</b> OpenAI, Flask, ElevenLabs', 
                'static/img/coding/infinito.png',
                '<b>URL:</b> <a target=_blank href=https://infinito.herokuapp.com>www.infinito.io</a>'
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that plays an infinite conversation between two LLMs
            </p>
            <br class="hide-on-med-and-up">
          </div>

        </div>

        <div class="row" style="margin-top: 50px !important">

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/plumo.png" 
              onclick="showModal(
                'Plumo', 
                '<b>Description:</b> An app that analyzes your journal entries and gives you life advice. I built this app because I have always been a fan of journaling and have found it to be a great way to reflect on my life and make better decisions. I wanted a way to get advice from my journal entries without having to read through them all, so I built Plumo.', 
                '<b>Technologies:</b> OpenAI, Flask, MongoDB', 
                'static/img/coding/plumo.png',
                ''
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that analyzes your journal entries and gives you life advice
            </p>
            <br class="hide-on-med-and-up">
          </div>

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/biblio.png" 
              onclick="showModal(
                'Biblio', 
                '<b>Description:</b> Back when OpenAI had not yet released ChatGPT and the best model out was Da Vinci, I wanted a way to interact with the LLM on the go. I built Biblio, an SMS-based version of ChatGPT. This one is pretty self-explanatory and was a fun project to build. Within a few months of me building it, OpenAI released ChatGPT. Classic!',
                '<b>Technologies:</b> OpenAI, Twilio, Flask', 
                'static/img/coding/biblio.png',
                ''
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An SMS-based version of ChatGPT
            </p>
            <br class="hide-on-med-and-up">
          </div>

          <div class="col l4 m4 s12 minimargin">
            <img class="pointer responsive-img" src="static/img/coding/rundown.png" 
              onclick="showModal(
                'Rundown', 
                '<b>Description:</b> Google has a cool feature called People Also Ask when you search for certain topics that lists questions and answers related to the topic you searched for. I thought it would be cool to build an app that does this for any topic and includes 25-50 questions rather than the 5 Google shows, so I built Rundown, an app that gives you a complete rundown of any topic.',
                '<b>Technologies:</b> OpenAI, Flask',
                'static/img/coding/rundown.png',
                ''
              )"
            >
            <p class="black-text nomargin menuitem left-align" style="width: 75%">
              An app that gives you a complete rundown of any topic
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