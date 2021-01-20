import tweepy
from time import sleep
#from config import create_api
from tweepybots.credentials import *

print("Program running...")

## Authenticate to Twitter
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)

# auth.set_access_token("ACCESS_TOKEN", "ACCESS_TOKEN_SECRET")
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

## Create API object
api = tweepy.API(auth)


try:
    api.verify_credentials()
    print("Authentication OK")
except:
    print("Error during authentication")

## Create API object
api = tweepy.API(auth, wait_on_rate_limit=True,
    wait_on_rate_limit_notify=True)



ids = ['3076649353', '3006430517', '3006481618', '3006403895', '3003374135', '68227206', '1252862957182046208']
while True:
    for i in ids:
        #for tweet in tweepy.Cursor(api.user_timeline,id='183058979').items(1):
        for tweet in tweepy.Cursor(api.user_timeline,i).items(5):
            try:
                # Add \n escape character to print() to organize tweets
                print('\nTweet by: @' + tweet.user.screen_name)

                # Retweet tweets as they are found
                tweet.retweet()
                print('Retweeted the tweet')

                sleep(5)

            except tweepy.TweepError as e:
                print(e.reason)

            except StopIteration:
                break
    sleep(3600)

#print("Test Complete.")