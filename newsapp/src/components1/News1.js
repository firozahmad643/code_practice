import Newsitem1 from "./Newsitem1";
import React from "react";
import Spinner1 from "./Spinner1";
class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                  "source": {
                    "id": null,
                    "name": "Hindustan Times"
                  },
                  "author": "HT Sports Desk",
                  "title": "Watch: Pakistan tailender refuses to shake hands with Stokes after England win - Hindustan Times",
                  "description": "Even as the DRS was being taken and the third umpire was going through the process, England captain Ben Stokes prematurely walked up to Mohammad Ali to shake hands with him. However, the Pakistan No. 11 batter refused to do so. | Cricket",
                  "url": "https://www.hindustantimes.com/cricket/watch-pakistan-tail-ender-refuses-to-shake-hands-with-ben-stokes-after-england-win-series-in-2nd-test-video-viral-101670835258862.html",
                  "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/stokes-ali-screengrab_1670835585185_1670835593699_1670835593699.jpg",
                  "publishedAt": "2022-12-13T01:56:00Z",
                  "content": "Mark Wood grabbed four wickets as England beat Pakistan by 26 runs in the second Multan Test to clinch the three-match series with an unassailable 2-0 lead. Requiring 355 to win, Pakistan put up a br… [+3480 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Crictracker.com"
                  },
                  "author": "Vaishnavi Iyer",
                  "title": "BBL 2022: Match 1, THU vs STA Match Prediction – Who will win today’s BBL match between THU vs STA? - CricTracker",
                  "description": "The Big Bash League 2022 will kick start on Tuesday, December 13, at the Manuka Oval in Canberra where Sydney Thunder will lock horns against Melbourne Stars. Sydney Thunder made it to the knockout ga",
                  "url": "https://www.crictracker.com/cricket-match-predictions/bbl-2022-match-1-st-vs-ms-match-prediction-who-will-win-todays-bbl-match-between-st-vs-ms/",
                  "urlToImage": "https://media.crictracker.com/media/featureimage/Melbourne-Stars-vs-Sydney-Thunder.jpg",
                  "publishedAt": "2022-12-12T18:15:00Z",
                  "content": "The Big Bash League 2022 will kick start on Tuesday, December 13, at the Manuka Oval in Canberra where Sydney Thunder will lock horns against Melbourne Stars. Sydney Thunder made it to the knockout g… [+2210 chars]"
                },
                {
                  "source": {
                    "id": "google-news",
                    "name": "Google News"
                  },
                  "author": null,
                  "title": "Ronaldo Nazario: 'Footballers need psychologists in life. Neymar will play for Brazil again … And Kaka's English is not great!' - The Indian Express",
                  "description": null,
                  "url": "https://news.google.com/__i/rss/rd/articles/CBMisgFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvc3BvcnRzL2Zvb3RiYWxsL3JvbmFsZG8tbmF6YXJpby1mb290YmFsbGVycy1uZWVkLXBzeWNob2xvZ2lzdHMtaW4tbGlmZS1uZXltYXItd2lsbC1wbGF5LWZvci1icmF6aWwtYWdhaW4tYW5kLWtha2FzLWVuZ2xpc2gtaXMtbm90LWdyZWF0LTgzMjA4ODAv0gEA?oc=5",
                  "urlToImage": null,
                  "publishedAt": "2022-12-12T17:25:49Z",
                  "content": null
                },
                {
                  "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                  },
                  "author": "Danyal Rasool",
                  "title": "Chronicle of a collapse foretold - Pakistan's meltdown in Multan - ESPNcricinfo",
                  "description": "For a while, Pakistan promised much in the second Test, but there would be no improbable fourth-innings glory, just another defeat",
                  "url": "https://www.espncricinfo.com/story/pak-vs-eng-2022-23-wtc-multan-test-chronicle-of-a-collapse-foretold-pakistans-meltdown-in-multan-1349450",
                  "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/350700/350753.6.jpg",
                  "publishedAt": "2022-12-12T16:32:03Z",
                  "content": "FeatureFor a while, Pakistan promised much in the second Test, but there would be no improbable fourth-innings glory, just another defeat\r\nDanyal Rasool is a sub-editor at ESPNcricinfo. @Danny61000"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Liverpoolworld.uk"
                  },
                  "author": "Will Rooney",
                  "title": "Liverpool player ratings: one star gets 8/10 but several 5/10s vs Lyon - LiverpoolWorld",
                  "description": "Liverpool player ratings from the 3-1 loss against Lyon in the Dubai Super Cup.",
                  "url": "https://www.liverpoolworld.uk/sport/football/liverpool/liverpool-player-ratings-one-star-gets-810-but-several-510s-vs-lyon-3949883",
                  "urlToImage": "https://www.liverpoolworld.uk/jpim-static/image/2022/12/11/15/GettyImages-1448330138.jpg?width=1200&enable=upscale",
                  "publishedAt": "2022-12-12T16:20:21Z",
                  "content": "Liverpool player ratings from the 3-1 loss against Lyon in the Dubai Super Cup. Liverpools return to action ended in defeat as they fell to a a 3-1 loss to Lyon in the Dubai Super Cup.\r\nFabio Carvalh… [+1770 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "NDTV News"
                  },
                  "author": "Agence France-Presse",
                  "title": "\"There Might Be Arguments...\": Argentina Coach Lionel Scaloni On Stormy World Cup Clash With Netherl.. - NDTV Sports",
                  "description": "Argentina team was heavily criticised following its bad-tempered last-eight clash with the Netherlands last week",
                  "url": "https://sports.ndtv.com/fifa-world-cup-2022/there-might-be-arguments-argentina-coach-lionel-scaloni-on-stormy-world-cup-clash-with-netherlands-3600761",
                  "urlToImage": "https://c.ndtvimg.com/2022-12/r9ulnoj8_argentina_625x300_12_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
                  "publishedAt": "2022-12-12T15:53:00Z",
                  "content": "Argentina coach Lionel Scaloni defended his players from accusations of misconduct in their fractious World Cup quarter-final against the Netherlands, insisting on Monday that the game was played in … [+2576 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "The Indian Express"
                  },
                  "author": "Sandip G",
                  "title": "From Saudi Arabia shock to one step from final: How Argentina and Messi made it - The Indian Express",
                  "description": "Savvy coach, family time, a dinner turnaround and the team in which Messi is playing for the rest and the rest are playing for Messi have helped the team make a comeback.",
                  "url": "https://indianexpress.com/article/sports/football/from-saudi-arabia-shock-to-one-step-from-final-how-argentina-and-messi-made-it-8320727/",
                  "urlToImage": "https://images.indianexpress.com/2022/12/ARG-4.jpg",
                  "publishedAt": "2022-12-12T14:38:38Z",
                  "content": "THE EVENING Saudi Arabia defeated Argentina, manager Lionel Scaloni called for an early dinner.Usually, the players take dinner in groups, or sometimes alone, but this time Scaloni insisted on dining… [+5588 chars]"
                },
                {
                  "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                  },
                  "author": "Vithushan Ehantharajah",
                  "title": "Mark Wood feels the ache of satisfaction after providing the speed that England need - ESPNcricinfo",
                  "description": "Fast bowler back to Test cricket with a bang after proving he's not out of road yet",
                  "url": "https://www.espncricinfo.com/story/pakistan-vs-england-2nd-test-multan-mark-wood-feels-ache-of-satisfaction-after-providing-speed-that-england-need-1349441",
                  "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/350700/350764.6.jpg",
                  "publishedAt": "2022-12-12T14:38:20Z",
                  "content": "Mark Wood's six wickets included a priceless two-wicket burst before lunch on the final day  •  Matthew Lewis/Getty Images"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Cricbuzz"
                  },
                  "author": null,
                  "title": "Chetan Sharma-led selection panel to watch first round Ranji games | Cricbuzz.com - Cricbuzz - Cricbuzz",
                  "description": "Chetan will be in Mohali for Punjab's game while Joshi will be in Pune. Harvinder will be in Hyderabad for the home team's clash against TN and Mohanty will be in Kolkata for the Bengal-UP game",
                  "url": "https://www.cricbuzz.com/cricket-news/124807/chetan-sharma-led-selection-panel-to-watch-first-round-ranji-games",
                  "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c250192/the-bcci-has-given-the-ranji-a.jpg",
                  "publishedAt": "2022-12-12T14:35:57Z",
                  "content": "The BCCI has given the Ranji assignment to the outgoing Chetan Sharma-led selection committee © BCCI\r\nThe old guard is not done yet. Even as the new season of the Ranji Trophy starts on Tuesday, the … [+2636 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Barca Blaugranes"
                  },
                  "author": "Josh Suttr",
                  "title": "Barcelona eyeing Morocco World Cup star Azzedine Ounah - report - Barca Blaugranes",
                  "description": "The midfielder is seen as a ‘low-cost option’",
                  "url": "https://www.barcablaugranes.com/2022/12/12/23505189/barcelona-eyeing-morocco-world-cup-star-azzedine-ounah-report",
                  "urlToImage": "https://cdn.vox-cdn.com/thumbor/jH3D9w5WHvuUQD4Pj_sNgxlRgGM=/0x430:6000x3571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24284882/1245522067.jpg",
                  "publishedAt": "2022-12-12T14:00:00Z",
                  "content": "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility rest… [+124 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Bavarian Football Works"
                  },
                  "author": "Ineednoname",
                  "title": "Report: Bayern Munich turn to a literal giant U-19 keeper as their Manuel Neuer replacement - Bavarian Football Works",
                  "description": "Didn’t realize Bayern recruited keepers from the Attack on Titan universe.",
                  "url": "https://www.bavarianfootballworks.com/2022/12/12/23505197/bayern-munich-report-giant-u19-keeper-manuel-neuer-replacement-tom-ritzy-hulsmann-nubel-livakovic",
                  "urlToImage": "https://cdn.vox-cdn.com/thumbor/UhFnpWGtYZ_NDB2-rUc6_AWRggk=/0x478:4820x3002/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24284917/1244552835.jpg",
                  "publishedAt": "2022-12-12T14:00:00Z",
                  "content": "Wait a second, hes HOW tall? According to a report by Bild, Bayern Munich will take U-19 keeper Tom Ritzy Hulsmann to the training camp in Qatar with the rest of the team. After the season-ending inj… [+1274 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "SportsCafe"
                  },
                  "author": "SportsCafe Desk",
                  "title": "LPL 2022 | Twitter reacts to Nuwan Pradeep's unwanted headshot for Azam Khan leading him to leave field on stretcher - SportsCafe",
                  "description": "Cricket fields often see unfortunate incidents that sometimes even turn horrifying for the players. While keeping behind the stumps, Azam Khan was struck on his forehead by Nuwan Pradeep, and it was so terrible for the Pakistani player that the support staff …",
                  "url": "https://sportscafe.in/cricket/articles/2022/dec/12/lpl-2022-twitter-reacts-to-nuwan-pradeeps-unwanted-headshot-for-azam-khan-leading-him-to-leave-field-on-stretcher",
                  "urlToImage": "https://sportscafe.in/img/es3-cfill-w800-h418/articles/cricket-2023/azam_khan_pcb.scorimg.webp",
                  "publishedAt": "2022-12-12T13:57:23Z",
                  "content": "Since then, Azam has been continuously playing franchise leagues, such as CPL, T10, and the ongoing Lanka Premier League (LPL) to earn a recall from Pakistan. However, it took a halt on Monday during… [+230 chars]"
                },
                {
                  "source": {
                    "id": "google-news",
                    "name": "Google News"
                  },
                  "author": null,
                  "title": "FIFA World Cup 2022, December 12 schedule: What are the matches happening in Qatar today? - Sportstar",
                  "description": null,
                  "url": "https://news.google.com/__i/rss/rd/articles/CBMinwFodHRwczovL3Nwb3J0c3Rhci50aGVoaW5kdS5jb20vZm9vdGJhbGwvZmlmYS13b3JsZC1jdXAvbmV3cy9maWZhLXdvcmxkLWN1cC0yMDIyLWRlY2VtYmVyLTEyLXNjaGVkdWxlLW1hdGNoZXMtdG9kYXktcWF0YXItc2VtaWZpbmFsLWZpeHR1cmVzL2FydGljbGU2NjI1Mjc1OS5lY2XSAaQBaHR0cHM6Ly9zcG9ydHN0YXIudGhlaGluZHUuY29tL2Zvb3RiYWxsL2ZpZmEtd29ybGQtY3VwL25ld3MvZmlmYS13b3JsZC1jdXAtMjAyMi1kZWNlbWJlci0xMi1zY2hlZHVsZS1tYXRjaGVzLXRvZGF5LXFhdGFyLXNlbWlmaW5hbC1maXh0dXJlcy9hcnRpY2xlNjYyNTI3NTkuZWNlL2FtcC8?oc=5",
                  "urlToImage": null,
                  "publishedAt": "2022-12-12T13:31:08Z",
                  "content": null
                },
                {
                  "source": {
                    "id": null,
                    "name": "Hindustan Times"
                  },
                  "author": "HT Sports Desk",
                  "title": "BCCI contracts: Suryakumar, Gill set for huge pay upgrade; Rahane, Ishant out - Hindustan Times",
                  "description": "Suryakumar Yadav and Shubman Gill are all set to rewarded handsomely for their stellar run of form as the BCCI is likely to promote the two batters in their list of centrally-contracted cricketers. | Cricket",
                  "url": "https://www.hindustantimes.com/cricket/bcci-central-contracts-suryakumar-yadav-shubman-gill-set-for-big-pay-upgrade-ajinkya-rahane-ishant-sharma-on-the-way-out-report-101670850703584.html",
                  "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/surya-gill-getty_1670851070365_1670851078607_1670851078607.jpg",
                  "publishedAt": "2022-12-12T13:21:10Z",
                  "content": "India batters Suryakumar Yadav and Shubman Gill are all set to rewarded handsomely for their stellar run of form as the BCCI is likely to promote the two batters in their list of centrally-contracted… [+2630 chars]"
                },
                {
                  "source": {
                    "id": "espn-cric-info",
                    "name": "ESPN Cric Info"
                  },
                  "author": "Shashank Kishore",
                  "title": "Mayank Agarwal hits the reset button to focus firmly on Karnataka - ESPNcricinfo",
                  "description": "New captain says India selection will take care of itself if he can score loads of Ranji Trophy runs like he did in 2017-18",
                  "url": "https://www.espncricinfo.com/story/ranji-trophy-2022-23-mayank-agarwal-hits-the-reset-button-to-focus-firmly-on-karnataka-1349433",
                  "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335200/335205.6.jpg",
                  "publishedAt": "2022-12-12T13:05:00Z",
                  "content": "Big Ranji season for Sarfaraz, Malik, Kuldeep and Dhull"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Sportskeeda"
                  },
                  "author": "Aditya Singh",
                  "title": "Ronaldo predicts who will win the 2022 FIFA World Cup in Qatar - Sportskeeda",
                  "description": "Brazil legend Ronaldo Nazario has shared his prediction for the winner of the ongoing FIFA World Cup in Qatar.",
                  "url": "https://www.sportskeeda.com/football/news-ronaldo-predicts-will-win-2022-fifa-world-cup-qatar",
                  "urlToImage": "https://staticg.sportskeeda.com/editor/2022/12/22a84-16708499404867-1920.jpg",
                  "publishedAt": "2022-12-12T13:04:47Z",
                  "content": "Brazil legend Ronaldo Nazario has shared his prediction for the winner of the ongoing FIFA World Cup in Qatar.\r\nThe tournament has reached the semi-finals stage with France, Morocco, Argentina and Cr… [+2893 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "SPORTbible"
                  },
                  "author": "Rory O'Callaghan",
                  "title": "Josko Gvardiol: Man Utd, Man City and Chelsea 'submit offers for Croatia star' after World Cup heroics - SPORTbible",
                  "description": "Josko Gvardiol has played a major role in Croatia reaching the World Cup semi-finals.",
                  "url": "https://www.sportbible.com/football/man-utd-josko-gvardiol-city-chelsea-transfer-news-731426-20221212",
                  "urlToImage": "https://images.ladbible.com/resize?type=jpeg&quality=70&width=1200&fit=contain&gravity=auto&dpr=1&url=https://eu-images.contentstack.com/v3/assets/blta90d05ad41a54a71/blt042ea1107731a4ca/6397207ef2128e4d83919c62/Untitled_design_(5).png",
                  "publishedAt": "2022-12-12T12:37:25Z",
                  "content": "Manchester United, Chelsea and Manchester City have reportedly submitted bids for Croatia international Josko Gvardiol.\r\nGvardiol has enhanced his reputation as one of the best young defenders in Eur… [+2106 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Managing Madrid"
                  },
                  "author": "Lucas Navarrete",
                  "title": "Ancelotti open to leave Real Madrid, coach Brazilian national team after 2022-23 season -report - Managing Madrid",
                  "description": "According to Brazilian outlet UOL Esporte.",
                  "url": "https://www.managingmadrid.com/2022/12/12/23505154/ancelotti-real-madrid-brazil-coach-rumors-news-2022",
                  "urlToImage": "https://cdn.vox-cdn.com/thumbor/b0LiUYO16tf0wZHoa6Y2hKVpRyQ=/0x0:3035x1589/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24284831/1440943203.jpg",
                  "publishedAt": "2022-12-12T12:33:48Z",
                  "content": "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility rest… [+124 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Cricbuzz"
                  },
                  "author": null,
                  "title": "Taskin Ahmed implores patience from bowling unit on Chattogram's batting paradise | Cricbuzz.com - Cricbuzz - Cricbuzz",
                  "description": "Bangladesh's pace ace is not a confirmed starter having yet to prove that he is ready to take on the bowling load having just returned from a back injury",
                  "url": "https://www.cricbuzz.com/cricket-news/124806/taskin-implores-patience-from-bowling-unit-on-chattograms-batting-paradise",
                  "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c250190/f-we-try-to-force-the-issue-i.jpg",
                  "publishedAt": "2022-12-12T12:26:18Z",
                  "content": "f we try to force the issue, it won't work in our favour: Taskin Ahmed © AFP\r\nBangladesh pace bowler Taskin Ahmed said on Monday (December 12) that the team's bowling will need to exercise patience a… [+2480 chars]"
                },
                {
                  "source": {
                    "id": null,
                    "name": "Formula 1"
                  },
                  "author": "F1",
                  "title": "'He pushed us in every area' – Aston Martin expect to reap the rewards of Vettel's efforts in coming seasons | Formula 1® - Formula 1",
                  "description": "Sebastian Vettel still helped Aston Martin “lift their game” during his two years on board, despite results being hard to come by, according to the team’s Performance Director, Tom McCullough.",
                  "url": "https://www.formula1.com/en/latest/article.he-pushed-us-in-every-area-aston-martin-expect-to-reap-the-rewards-of.7xprchOQfWI3nqUZW4gLe.html",
                  "urlToImage": "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/AbuDhabiGP/Sunday/vettel.jpg",
                  "publishedAt": "2022-12-12T12:07:31Z",
                  "content": "Sebastian Vettel helped Aston Martin lift their game during his two years on board despite results being hard to come by, according to the teams Performance Director Tom McCullough.\r\nVettel recently … [+2516 chars]"
                }
              ],
            loading:false
        }
    }
   
    sporst_article = [
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "Watch: Pakistan tailender refuses to shake hands with Stokes after England win - Hindustan Times",
          "description": "Even as the DRS was being taken and the third umpire was going through the process, England captain Ben Stokes prematurely walked up to Mohammad Ali to shake hands with him. However, the Pakistan No. 11 batter refused to do so. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/watch-pakistan-tail-ender-refuses-to-shake-hands-with-ben-stokes-after-england-win-series-in-2nd-test-video-viral-101670835258862.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/stokes-ali-screengrab_1670835585185_1670835593699_1670835593699.jpg",
          "publishedAt": "2022-12-13T01:56:00Z",
          "content": "Mark Wood grabbed four wickets as England beat Pakistan by 26 runs in the second Multan Test to clinch the three-match series with an unassailable 2-0 lead. Requiring 355 to win, Pakistan put up a br… [+3480 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Crictracker.com"
          },
          "author": "Vaishnavi Iyer",
          "title": "BBL 2022: Match 1, THU vs STA Match Prediction – Who will win today’s BBL match between THU vs STA? - CricTracker",
          "description": "The Big Bash League 2022 will kick start on Tuesday, December 13, at the Manuka Oval in Canberra where Sydney Thunder will lock horns against Melbourne Stars. Sydney Thunder made it to the knockout ga",
          "url": "https://www.crictracker.com/cricket-match-predictions/bbl-2022-match-1-st-vs-ms-match-prediction-who-will-win-todays-bbl-match-between-st-vs-ms/",
          "urlToImage": "https://media.crictracker.com/media/featureimage/Melbourne-Stars-vs-Sydney-Thunder.jpg",
          "publishedAt": "2022-12-12T18:15:00Z",
          "content": "The Big Bash League 2022 will kick start on Tuesday, December 13, at the Manuka Oval in Canberra where Sydney Thunder will lock horns against Melbourne Stars. Sydney Thunder made it to the knockout g… [+2210 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Ronaldo Nazario: 'Footballers need psychologists in life. Neymar will play for Brazil again … And Kaka's English is not great!' - The Indian Express",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMisgFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvc3BvcnRzL2Zvb3RiYWxsL3JvbmFsZG8tbmF6YXJpby1mb290YmFsbGVycy1uZWVkLXBzeWNob2xvZ2lzdHMtaW4tbGlmZS1uZXltYXItd2lsbC1wbGF5LWZvci1icmF6aWwtYWdhaW4tYW5kLWtha2FzLWVuZ2xpc2gtaXMtbm90LWdyZWF0LTgzMjA4ODAv0gEA?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-12-12T17:25:49Z",
          "content": null
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": "Danyal Rasool",
          "title": "Chronicle of a collapse foretold - Pakistan's meltdown in Multan - ESPNcricinfo",
          "description": "For a while, Pakistan promised much in the second Test, but there would be no improbable fourth-innings glory, just another defeat",
          "url": "https://www.espncricinfo.com/story/pak-vs-eng-2022-23-wtc-multan-test-chronicle-of-a-collapse-foretold-pakistans-meltdown-in-multan-1349450",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/350700/350753.6.jpg",
          "publishedAt": "2022-12-12T16:32:03Z",
          "content": "FeatureFor a while, Pakistan promised much in the second Test, but there would be no improbable fourth-innings glory, just another defeat\r\nDanyal Rasool is a sub-editor at ESPNcricinfo. @Danny61000"
        },
        {
          "source": {
            "id": null,
            "name": "Liverpoolworld.uk"
          },
          "author": "Will Rooney",
          "title": "Liverpool player ratings: one star gets 8/10 but several 5/10s vs Lyon - LiverpoolWorld",
          "description": "Liverpool player ratings from the 3-1 loss against Lyon in the Dubai Super Cup.",
          "url": "https://www.liverpoolworld.uk/sport/football/liverpool/liverpool-player-ratings-one-star-gets-810-but-several-510s-vs-lyon-3949883",
          "urlToImage": "https://www.liverpoolworld.uk/jpim-static/image/2022/12/11/15/GettyImages-1448330138.jpg?width=1200&enable=upscale",
          "publishedAt": "2022-12-12T16:20:21Z",
          "content": "Liverpool player ratings from the 3-1 loss against Lyon in the Dubai Super Cup. Liverpools return to action ended in defeat as they fell to a a 3-1 loss to Lyon in the Dubai Super Cup.\r\nFabio Carvalh… [+1770 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": "Agence France-Presse",
          "title": "\"There Might Be Arguments...\": Argentina Coach Lionel Scaloni On Stormy World Cup Clash With Netherl.. - NDTV Sports",
          "description": "Argentina team was heavily criticised following its bad-tempered last-eight clash with the Netherlands last week",
          "url": "https://sports.ndtv.com/fifa-world-cup-2022/there-might-be-arguments-argentina-coach-lionel-scaloni-on-stormy-world-cup-clash-with-netherlands-3600761",
          "urlToImage": "https://c.ndtvimg.com/2022-12/r9ulnoj8_argentina_625x300_12_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
          "publishedAt": "2022-12-12T15:53:00Z",
          "content": "Argentina coach Lionel Scaloni defended his players from accusations of misconduct in their fractious World Cup quarter-final against the Netherlands, insisting on Monday that the game was played in … [+2576 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sandip G",
          "title": "From Saudi Arabia shock to one step from final: How Argentina and Messi made it - The Indian Express",
          "description": "Savvy coach, family time, a dinner turnaround and the team in which Messi is playing for the rest and the rest are playing for Messi have helped the team make a comeback.",
          "url": "https://indianexpress.com/article/sports/football/from-saudi-arabia-shock-to-one-step-from-final-how-argentina-and-messi-made-it-8320727/",
          "urlToImage": "https://images.indianexpress.com/2022/12/ARG-4.jpg",
          "publishedAt": "2022-12-12T14:38:38Z",
          "content": "THE EVENING Saudi Arabia defeated Argentina, manager Lionel Scaloni called for an early dinner.Usually, the players take dinner in groups, or sometimes alone, but this time Scaloni insisted on dining… [+5588 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": "Vithushan Ehantharajah",
          "title": "Mark Wood feels the ache of satisfaction after providing the speed that England need - ESPNcricinfo",
          "description": "Fast bowler back to Test cricket with a bang after proving he's not out of road yet",
          "url": "https://www.espncricinfo.com/story/pakistan-vs-england-2nd-test-multan-mark-wood-feels-ache-of-satisfaction-after-providing-speed-that-england-need-1349441",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/350700/350764.6.jpg",
          "publishedAt": "2022-12-12T14:38:20Z",
          "content": "Mark Wood's six wickets included a priceless two-wicket burst before lunch on the final day  •  Matthew Lewis/Getty Images"
        },
        {
          "source": {
            "id": null,
            "name": "Cricbuzz"
          },
          "author": null,
          "title": "Chetan Sharma-led selection panel to watch first round Ranji games | Cricbuzz.com - Cricbuzz - Cricbuzz",
          "description": "Chetan will be in Mohali for Punjab's game while Joshi will be in Pune. Harvinder will be in Hyderabad for the home team's clash against TN and Mohanty will be in Kolkata for the Bengal-UP game",
          "url": "https://www.cricbuzz.com/cricket-news/124807/chetan-sharma-led-selection-panel-to-watch-first-round-ranji-games",
          "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c250192/the-bcci-has-given-the-ranji-a.jpg",
          "publishedAt": "2022-12-12T14:35:57Z",
          "content": "The BCCI has given the Ranji assignment to the outgoing Chetan Sharma-led selection committee © BCCI\r\nThe old guard is not done yet. Even as the new season of the Ranji Trophy starts on Tuesday, the … [+2636 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Barca Blaugranes"
          },
          "author": "Josh Suttr",
          "title": "Barcelona eyeing Morocco World Cup star Azzedine Ounah - report - Barca Blaugranes",
          "description": "The midfielder is seen as a ‘low-cost option’",
          "url": "https://www.barcablaugranes.com/2022/12/12/23505189/barcelona-eyeing-morocco-world-cup-star-azzedine-ounah-report",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/jH3D9w5WHvuUQD4Pj_sNgxlRgGM=/0x430:6000x3571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24284882/1245522067.jpg",
          "publishedAt": "2022-12-12T14:00:00Z",
          "content": "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility rest… [+124 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Bavarian Football Works"
          },
          "author": "Ineednoname",
          "title": "Report: Bayern Munich turn to a literal giant U-19 keeper as their Manuel Neuer replacement - Bavarian Football Works",
          "description": "Didn’t realize Bayern recruited keepers from the Attack on Titan universe.",
          "url": "https://www.bavarianfootballworks.com/2022/12/12/23505197/bayern-munich-report-giant-u19-keeper-manuel-neuer-replacement-tom-ritzy-hulsmann-nubel-livakovic",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/UhFnpWGtYZ_NDB2-rUc6_AWRggk=/0x478:4820x3002/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24284917/1244552835.jpg",
          "publishedAt": "2022-12-12T14:00:00Z",
          "content": "Wait a second, hes HOW tall? According to a report by Bild, Bayern Munich will take U-19 keeper Tom Ritzy Hulsmann to the training camp in Qatar with the rest of the team. After the season-ending inj… [+1274 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SportsCafe"
          },
          "author": "SportsCafe Desk",
          "title": "LPL 2022 | Twitter reacts to Nuwan Pradeep's unwanted headshot for Azam Khan leading him to leave field on stretcher - SportsCafe",
          "description": "Cricket fields often see unfortunate incidents that sometimes even turn horrifying for the players. While keeping behind the stumps, Azam Khan was struck on his forehead by Nuwan Pradeep, and it was so terrible for the Pakistani player that the support staff …",
          "url": "https://sportscafe.in/cricket/articles/2022/dec/12/lpl-2022-twitter-reacts-to-nuwan-pradeeps-unwanted-headshot-for-azam-khan-leading-him-to-leave-field-on-stretcher",
          "urlToImage": "https://sportscafe.in/img/es3-cfill-w800-h418/articles/cricket-2023/azam_khan_pcb.scorimg.webp",
          "publishedAt": "2022-12-12T13:57:23Z",
          "content": "Since then, Azam has been continuously playing franchise leagues, such as CPL, T10, and the ongoing Lanka Premier League (LPL) to earn a recall from Pakistan. However, it took a halt on Monday during… [+230 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "FIFA World Cup 2022, December 12 schedule: What are the matches happening in Qatar today? - Sportstar",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMinwFodHRwczovL3Nwb3J0c3Rhci50aGVoaW5kdS5jb20vZm9vdGJhbGwvZmlmYS13b3JsZC1jdXAvbmV3cy9maWZhLXdvcmxkLWN1cC0yMDIyLWRlY2VtYmVyLTEyLXNjaGVkdWxlLW1hdGNoZXMtdG9kYXktcWF0YXItc2VtaWZpbmFsLWZpeHR1cmVzL2FydGljbGU2NjI1Mjc1OS5lY2XSAaQBaHR0cHM6Ly9zcG9ydHN0YXIudGhlaGluZHUuY29tL2Zvb3RiYWxsL2ZpZmEtd29ybGQtY3VwL25ld3MvZmlmYS13b3JsZC1jdXAtMjAyMi1kZWNlbWJlci0xMi1zY2hlZHVsZS1tYXRjaGVzLXRvZGF5LXFhdGFyLXNlbWlmaW5hbC1maXh0dXJlcy9hcnRpY2xlNjYyNTI3NTkuZWNlL2FtcC8?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-12-12T13:31:08Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "BCCI contracts: Suryakumar, Gill set for huge pay upgrade; Rahane, Ishant out - Hindustan Times",
          "description": "Suryakumar Yadav and Shubman Gill are all set to rewarded handsomely for their stellar run of form as the BCCI is likely to promote the two batters in their list of centrally-contracted cricketers. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/bcci-central-contracts-suryakumar-yadav-shubman-gill-set-for-big-pay-upgrade-ajinkya-rahane-ishant-sharma-on-the-way-out-report-101670850703584.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/surya-gill-getty_1670851070365_1670851078607_1670851078607.jpg",
          "publishedAt": "2022-12-12T13:21:10Z",
          "content": "India batters Suryakumar Yadav and Shubman Gill are all set to rewarded handsomely for their stellar run of form as the BCCI is likely to promote the two batters in their list of centrally-contracted… [+2630 chars]"
        },
        {
          "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
          },
          "author": "Shashank Kishore",
          "title": "Mayank Agarwal hits the reset button to focus firmly on Karnataka - ESPNcricinfo",
          "description": "New captain says India selection will take care of itself if he can score loads of Ranji Trophy runs like he did in 2017-18",
          "url": "https://www.espncricinfo.com/story/ranji-trophy-2022-23-mayank-agarwal-hits-the-reset-button-to-focus-firmly-on-karnataka-1349433",
          "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/335200/335205.6.jpg",
          "publishedAt": "2022-12-12T13:05:00Z",
          "content": "Big Ranji season for Sarfaraz, Malik, Kuldeep and Dhull"
        },
        {
          "source": {
            "id": null,
            "name": "Sportskeeda"
          },
          "author": "Aditya Singh",
          "title": "Ronaldo predicts who will win the 2022 FIFA World Cup in Qatar - Sportskeeda",
          "description": "Brazil legend Ronaldo Nazario has shared his prediction for the winner of the ongoing FIFA World Cup in Qatar.",
          "url": "https://www.sportskeeda.com/football/news-ronaldo-predicts-will-win-2022-fifa-world-cup-qatar",
          "urlToImage": "https://staticg.sportskeeda.com/editor/2022/12/22a84-16708499404867-1920.jpg",
          "publishedAt": "2022-12-12T13:04:47Z",
          "content": "Brazil legend Ronaldo Nazario has shared his prediction for the winner of the ongoing FIFA World Cup in Qatar.\r\nThe tournament has reached the semi-finals stage with France, Morocco, Argentina and Cr… [+2893 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SPORTbible"
          },
          "author": "Rory O'Callaghan",
          "title": "Josko Gvardiol: Man Utd, Man City and Chelsea 'submit offers for Croatia star' after World Cup heroics - SPORTbible",
          "description": "Josko Gvardiol has played a major role in Croatia reaching the World Cup semi-finals.",
          "url": "https://www.sportbible.com/football/man-utd-josko-gvardiol-city-chelsea-transfer-news-731426-20221212",
          "urlToImage": "https://images.ladbible.com/resize?type=jpeg&quality=70&width=1200&fit=contain&gravity=auto&dpr=1&url=https://eu-images.contentstack.com/v3/assets/blta90d05ad41a54a71/blt042ea1107731a4ca/6397207ef2128e4d83919c62/Untitled_design_(5).png",
          "publishedAt": "2022-12-12T12:37:25Z",
          "content": "Manchester United, Chelsea and Manchester City have reportedly submitted bids for Croatia international Josko Gvardiol.\r\nGvardiol has enhanced his reputation as one of the best young defenders in Eur… [+2106 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Managing Madrid"
          },
          "author": "Lucas Navarrete",
          "title": "Ancelotti open to leave Real Madrid, coach Brazilian national team after 2022-23 season -report - Managing Madrid",
          "description": "According to Brazilian outlet UOL Esporte.",
          "url": "https://www.managingmadrid.com/2022/12/12/23505154/ancelotti-real-madrid-brazil-coach-rumors-news-2022",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/b0LiUYO16tf0wZHoa6Y2hKVpRyQ=/0x0:3035x1589/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24284831/1440943203.jpg",
          "publishedAt": "2022-12-12T12:33:48Z",
          "content": "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility rest… [+124 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cricbuzz"
          },
          "author": null,
          "title": "Taskin Ahmed implores patience from bowling unit on Chattogram's batting paradise | Cricbuzz.com - Cricbuzz - Cricbuzz",
          "description": "Bangladesh's pace ace is not a confirmed starter having yet to prove that he is ready to take on the bowling load having just returned from a back injury",
          "url": "https://www.cricbuzz.com/cricket-news/124806/taskin-implores-patience-from-bowling-unit-on-chattograms-batting-paradise",
          "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c250190/f-we-try-to-force-the-issue-i.jpg",
          "publishedAt": "2022-12-12T12:26:18Z",
          "content": "f we try to force the issue, it won't work in our favour: Taskin Ahmed © AFP\r\nBangladesh pace bowler Taskin Ahmed said on Monday (December 12) that the team's bowling will need to exercise patience a… [+2480 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Formula 1"
          },
          "author": "F1",
          "title": "'He pushed us in every area' – Aston Martin expect to reap the rewards of Vettel's efforts in coming seasons | Formula 1® - Formula 1",
          "description": "Sebastian Vettel still helped Aston Martin “lift their game” during his two years on board, despite results being hard to come by, according to the team’s Performance Director, Tom McCullough.",
          "url": "https://www.formula1.com/en/latest/article.he-pushed-us-in-every-area-aston-martin-expect-to-reap-the-rewards-of.7xprchOQfWI3nqUZW4gLe.html",
          "urlToImage": "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/AbuDhabiGP/Sunday/vettel.jpg",
          "publishedAt": "2022-12-12T12:07:31Z",
          "content": "Sebastian Vettel helped Aston Martin lift their game during his two years on board despite results being hard to come by, according to the teams Performance Director Tom McCullough.\r\nVettel recently … [+2516 chars]"
        }
      ]

    business_article = [
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Hailed as 'next Warren Buffet', Sam Bankman, whose crypto empire crashed, held - Hindustan Times",
          "description": "The arrest comes on the eve of Bankman-Fried's scheduled appearance at a US Congress hearing in which he was to testify under oath about the crypto exchange's overnight demise.",
          "url": "https://www.hindustantimes.com/world-news/disgraced-crypto-tycoon-bankman-fried-arrested-in-bahamas-101670892947923.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/13/1600x900/BANKRUPTCY-CRIME-FTX-Bankman-Fried_arrested_1670893078820_1670893079119_1670893079119.jpg",
          "publishedAt": "2022-12-13T00:58:51Z",
          "content": "Embattled cryptocurrency mogul and former FTX CEO Sam Bankman-Fried was arrested in the Bahamas after being criminally charged by US prosecutors. US officials have been seeking to charge Bankman-Frie… [+1627 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Investing.com"
          },
          "author": "Reuters",
          "title": "Wall Street positive ahead of inflation data, Fed action By Reuters - Investing.com",
          "description": "Wall Street positive ahead of inflation data, Fed action",
          "url": "https://www.investing.com/news/economy/asian-shares-dip-dollar-firms-ahead-of-central-bank-rate-hikes-2961762",
          "urlToImage": "https://i-invdn-com.investing.com/news/indicatornews_2_800x533_L_1412601599.jpg",
          "publishedAt": "2022-12-12T19:25:00Z",
          "content": "By Lawrence Delevingne\r\n(Reuters) -Global stocks, oil prices and the dollar rose on Monday as investors awaited the last round of transatlantic central bank interest rate hikes this year, hoping that… [+4085 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "'World's Oldest Pair Of Jeans' Found In Sunken Ship From 1857 Sold For Rs 94 Lakh - NDTV",
          "description": "There's now doubt and confusion if the white pair was actually manufactured by Levi Strauss, one of the oldest and most popular jeans manufacturers in the world.",
          "url": "https://www.ndtv.com/feature/worlds-oldest-pair-of-jeans-found-in-sunken-ship-from-1857-sold-for-rs-94-lakh-3600939",
          "urlToImage": "https://c.ndtvimg.com/2022-12/8mddehig_the-jeans-have-been-recovered-from-ss-central-america-known-as-the-ship-of-gold_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T16:37:28Z",
          "content": "The jeans have been recovered from SS Central America, known as the Ship of Gold\r\nOver the centuries, countless famous artifacts have been discovered, providing us with a glimpse into how people live… [+2606 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Roshni Agarwal",
          "title": "Ahead of Market: 10 things that will decide D-Street action on Tuesday - Economic Times",
          "description": "The MACD showed bearish signs on the counters of SAIL, Indiabulls Real Estate, Coffee Day, Hindustan Copper and HDFC Life Insurance, among others",
          "url": "https://economictimes.indiatimes.com/markets/stocks/news/ahead-of-market-10-things-that-will-decide-d-street-action-on-tuesday/articleshow/96179277.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-96179318,width-1070,height-580,imgsize-170334,overlay-etmarkets/photo.jpg",
          "publishedAt": "2022-12-12T16:15:00Z",
          "content": "NEW DELHI: Benchmark indices ended flat on the first trading day of the pivotal week as investors keenly await the US Fed Reserves policy decision due on December 14. Meanwhile, broader markets, rela… [+4614 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Peter",
          "title": "Twitter Blue relaunches, Musk plans to increase maximum tweet length to 4,000 characters - GSMArena.com news - GSMArena.com",
          "description": "It's not yet clear whether this will be exclusive to Blue subscribers, but it will be good way to coax people to sign up for the $8/month service.",
          "url": "https://www.gsmarena.com/twitter_blue_relaunches_musk_plans_to_increase_maximum_tweet_length_to_4000_characters-news-56846.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/12/twitter-4000-character-limit/-952x498w6/gsmarena_0000.jpg",
          "publishedAt": "2022-12-12T15:48:01Z",
          "content": "Early in its life Twitter was defined by its 140 character limit (an artifact of supporting SMS as a way to distribute tweets). This was increased to 280 characters five years ago and the cap will go… [+1667 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Greatandhra.com"
          },
          "author": "IANS",
          "title": "Sundar Pichai refuses to quell upcoming mega layoffs fears at Google - Greatandhra",
          "description": "Google is reportedly bracing for a massive layoffs early next year and Alphabet and Google CEO Sundar Pichai has reportedly offered no assurance to worried Google employees that it won't happen.",
          "url": "https://www.greatandhra.com/articles/special-articles/sundar-pichai-refuses-to-quell-upcoming-mega-layoffs-fears-at-google-125875",
          "urlToImage": "https://www.greatandhra.com/newphotos10/sundarpichai1670858102.jpg",
          "publishedAt": "2022-12-12T15:15:02Z",
          "content": "Google is reportedly bracing for a massive layoffs early next year and Alphabet and Google CEO Sundar Pichai has reportedly offered no assurance to worried Google employees that it won't happen.\r\nIn … [+1571 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Ashwin Mohan",
          "title": "Tata Motors gives green signal for stake sale in subsidiary Tata Technologies via IPO - Moneycontrol",
          "description": "Since TCS in 2004, no company from the Tata Group has made a debut on the domestic bourses. Tata Autocomp Systems shelved a $260 mn IPO and earlier this month, Tata Play ( earlier called Tata Sky) filed for a confidential pre-filing of offer documents.",
          "url": "https://www.moneycontrol.com/news/companies-2/tata-motors-board-gives-in-principle-nod-for-partial-divestment-in-tata-technologies-via-ipo-9691551.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/08/RTX2QABF-673x435.jpg",
          "publishedAt": "2022-12-12T14:31:39Z",
          "content": "Tata Motors on December 12 stated that it had approved the partial divestment of its equity shares in subsidiary Tata Technologies via an initial public offer ( IPO).\r\nOn July 8, 2022, Moneycontrol w… [+4298 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Ashwin Mohan",
          "title": "General Atlantic and Kotak Mahindra Bank-backed KFin Tech may launch IPO on Dec 19; eyes Rs... - Moneycontrol",
          "description": "Other than majority shareholder General Atlantic, Kotak Mahindra Bank is also an investor in KFin Technologies. The private sector lender acquired nearly 10 percent stake in the firm last year by investing Rs 310 crore as primary infusion in the company",
          "url": "https://www.moneycontrol.com/news/business/markets/general-atlantic-and-kotak-mahindra-bank-backed-kfin-tech-may-launch-ipo-on-dec-19-eyes-6300-crore-valuation-9693621.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/05/IPO-2-770x433.jpg",
          "publishedAt": "2022-12-12T13:41:57Z",
          "content": "Top private equity fund General Atlantic-promoted KFin Technologies is likely to launch its initial public offer (IPO) on December 19, 2022 as the leading tech-driven financial services platform for … [+2897 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Shubham Raj",
          "title": "F&O report: Buy on dips best strategy for now; buy Nifty 18,500 call options tomorrow - Moneycontrol",
          "description": "The short-term trend remains positive, as the Nifty closed above its 20-day EMA. The index has to break the range on either side for trending moves that may be seen after the Fed policy announcement on Wednesday.",
          "url": "https://www.moneycontrol.com/news/business/markets/f-buy-nifty-18500-call-options-tomorrow-9689431.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/11/stocks_market-stock_stock-6-770x433.jpg",
          "publishedAt": "2022-12-12T13:31:46Z",
          "content": "Benchmark indices continued to consolidate in a range on December 12, dragged by weakness in IT. However, some banking names showed strength, helping the index recover towards the end.\r\nNSE flagship … [+3654 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CoinDesk"
          },
          "author": "Parikshit Mishra, Oliver Knight",
          "title": "US Prosecutors Look to Charge Binance and CZ on Possible Money Laundering Violations: Reuters - CoinDesk",
          "description": "The Department of Justice has also discussed possible plea deal with Binance's lawyers, the report added.",
          "url": "https://www.coindesk.com/business/2022/12/12/us-prosecutors-look-to-charge-binance-and-cz-for-possible-money-laundering-violations-reuters/",
          "urlToImage": "https://www.coindesk.com/resizer/WGVDpzaBX1Y_J9aOkJK7COB8qUk=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/ESTD3FMYGNFKHMMXPGMVLF5IXM.jpg",
          "publishedAt": "2022-12-12T12:31:00Z",
          "content": "U.S prosecutors are considering charging crypto exchange Binance and its executives for possible money laundering and sanctions violations, Reuters reported, citing sources.\r\nThe Department of Justic… [+1355 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Team-BHP"
          },
          "author": "Tushar Kelshikar",
          "title": "Maruti Baleno Cross, Jimny 5-door launch timelines revealed - Team-BHP",
          "description": "Maruti Suzuki will unveil two new models at the upcoming Auto Expo 2023. These include the Baleno Cross (codenamed: YTB) and the much-awaited Jimny 5-door. A new report now sheds light on their expected launch timelines. The report states that the Baleno Cros…",
          "url": "https://www.team-bhp.com/news/maruti-baleno-cross-jimny-5-door-launch-timelines-revealed",
          "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/1_107.jpeg",
          "publishedAt": "2022-12-12T12:20:01Z",
          "content": "Maruti Suzuki will unveil two new models at the upcoming Auto Expo 2023. These include the Baleno Cross (codenamed: YTB) and the much-awaited Jimny 5-door. A new report now sheds light on their expec… [+789 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "ET Online",
          "title": "India's industrial production contracts 4% in October - Economic Times",
          "description": "India's industrial production contracted by 4% on an annual basis, data released by the Ministry Of Statistics And Programme Implementation (MOSPI) showed Monday. The Index of Industrial Production (IIP) had grown 4.2% in October 2021 and by 3.1% in September…",
          "url": "https://economictimes.indiatimes.com/news/economy/indicators/indias-industrial-production-contracts-4-in-october/articleshow/96174724.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-96174742,width-1070,height-580,imgsize-654622,overlay-economictimes/photo.jpg",
          "publishedAt": "2022-12-12T12:12:00Z",
          "content": "India's industrial production contracted by 4% on an annual basis, data released by the Ministry Of Statistics And Programme Implementation (MOSPI) showed Monday. The Index of Industrial Production (… [+1096 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Express Web Desk",
          "title": "November CPI, October IIP Data: Retail inflation eases to a 11-month low of 5.88% in Nov, IIP contracts 4% in Oct, shows Govt data - The Indian Express",
          "description": "November CPI Inflation Rate, IIP Growth October 2022: The retail inflation, measured by the Consumer Price Index (CPI), eased to 5.88 per cent in November. Separately, the factory output, measured in terms of the Index of Industrial Production (IIP), contract…",
          "url": "https://indianexpress.com/article/business/economy/india-cpi-retail-inflation-november-iip-factory-output-october-2022-nso-mospi-data-8319905/",
          "urlToImage": "https://images.indianexpress.com/2022/12/India-Retail-Inflation-Reuters-1200.jpg",
          "publishedAt": "2022-12-12T12:08:00Z",
          "content": "India CPI Inflation Rate November, IIP Growth October: The country’s retail inflation, which is measured by the Consumer Price Index (CPI), eased to an 11-month low of 5.88 per cent last month, down … [+3021 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PRNewswire"
          },
          "author": null,
          "title": "Coupa Software Enters into Definitive Agreement to Be Acquired by Thoma Bravo for $8 Billion - PR Newswire",
          "description": "/PRNewswire/ -- Coupa Software (NASDAQ: COUP), a leader in Business Spend Management (BSM), today announced that it has entered into a definitive agreement to...",
          "url": "https://www.prnewswire.com/news-releases/coupa-software-enters-into-definitive-agreement-to-be-acquired-by-thoma-bravo-for-8-billion-301700176.html",
          "urlToImage": "https://mma.prnewswire.com/media/1966394/Coupa_Thoma_Bravo_Logo.jpg?p=facebook",
          "publishedAt": "2022-12-12T12:00:00Z",
          "content": "Coupa Shareholders to Receive $81 Per Share in Cash\r\nRepresents a 77% Premium to the Unaffected Stock Price\r\nSAN MATEO, Calif., Dec. 12, 2022 /PRNewswire/ -- Coupa Software (NASDAQ: COUP), a leader i… [+11245 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Investing.com"
          },
          "author": "Geoffrey Smith/Investing.com",
          "title": "Central bank week, Amgen-Horizon deal, Rivian - what's moving markets By Investing.com - Investing.com",
          "description": "Central bank week, Amgen-Horizon deal, Rivian - what's moving markets",
          "url": "https://www.investing.com/news/economy/central-bank-week-amgenhorizon-deal-rivian--whats-moving-markets-2962155",
          "urlToImage": "https://i-invdn-com.investing.com/news/moved_LYNXMPEI5S0JD_L.jpg",
          "publishedAt": "2022-12-12T11:57:00Z",
          "content": "By Geoffrey Smith\r\nInvesitng.com -- Central bank meetings are set to dominate the week, with the Federal Reserve, European Central Bank, and Bank of England, all expected to raise their key rates by … [+4973 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Team-BHP"
          },
          "author": "Tushar Kelshikar",
          "title": "Maruti S-Presso, Swift & Ignis fail the Global NCAP crash test - Team-BHP",
          "description": "The Maruti Suzuki S-Presso, Swift and Ignis have been awarded a 1-star safety rating by Global NCAP.Maruti S-Presso:The S-Presso scored 20.03 points for adult occupant protection and just 3.52 points for child occupant safety.",
          "url": "https://www.team-bhp.com/news/maruti-s-presso-swift-ignis-fail-global-ncap-crash-test",
          "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/MarutiSuzukiS-Presso-side.jpg",
          "publishedAt": "2022-12-12T11:31:54Z",
          "content": "The Ignis scored 16.48 points for adult occupant protection and a mere 3.86 points for child occupant safety.\r\nThe Maruti Suzuki S-Presso, Swift and Ignis have been awarded a 1-star safety rating by … [+3107 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Rakesh Patil",
          "title": "Closing Bell: Sensex, Nifty end flat amid volatility; PSU bank, oil & gas stocks rally - Moneycontrol",
          "description": "Among sectors, Information Technology index shed 0.5 percent, while PSU bank and oil &amp; gas indices rose 1 percent each.",
          "url": "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-december-12-latest-news-bse-nse-sensex-nifty-covid-coronavirus-uniparts-india-aditya-vision-bharti-airtel-ptc-india-himatsingka-seide-9688541.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-3-770x433.jpg",
          "publishedAt": "2022-12-12T10:48:15Z",
          "content": "December 12, 2022 / 03:30 PM IST\r\nMarket Close: Indian benchmark indices ended marginally lower in the volatile session on December 12.\r\nAt Close, the Sensex was down 51.10 points or 0.08% at 62,130.… [+509 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Search Engine Journal"
          },
          "author": "Roger Montti",
          "title": "ChatGPT For Content and SEO? - Search Engine Journal",
          "description": "Here are six things to know about ChatGPT before using it for SEO and content",
          "url": "https://www.searchenginejournal.com/chatgpt-for-content-and-seo/473823/",
          "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2022/12/chatgpt-seo-6396fc2112312-sej.jpg",
          "publishedAt": "2022-12-12T10:17:16Z",
          "content": "ChatGPT is an artificial intelligence chatbot that can take directions and accomplish tasks like writing essays. There are numerous issues to understand before making a decision on how to use it for … [+10656 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Elliot Smith, Holly Ellyatt",
          "title": "European markets pull back as investors look ahead to next Fed meeting - CNBC",
          "description": "European markets retreated on Monday as investors look ahead to the last U.S. Federal Reserve meeting of 2022.",
          "url": "https://www.cnbc.com/2022/12/12/european-markets-live-updates-stocks-data-news-fed-meeting.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107076509-16553223832022-06-15t194313z_1437648490_rc2jsu991knq_rtrmadp_0_usa-fed.jpeg?v=1670823055&w=1920&h=1080",
          "publishedAt": "2022-12-12T10:11:00Z",
          "content": "The U.K. economy grew by 0.5% month-on-month in October, slightly ahead of a Reuters poll projecting a 0.4% rebound from September's 0.6% contraction.\r\nThe previous month's figures were affected by a… [+991 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Investing.com"
          },
          "author": "Reuters",
          "title": "Oil resumes slide as weak economy outweighs supply risks By Reuters - Investing.com",
          "description": "Oil resumes slide as weak economy outweighs supply risks",
          "url": "https://www.investing.com/news/commodities-news/oil-prices-climb-on-uncertainty-over-keystone-pipeline-restart-russian-supplies-2961764",
          "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEC2909A_L.jpg",
          "publishedAt": "2022-12-12T09:56:00Z",
          "content": "By Emily Chow and Dmitry Zhdannikov\r\nSINGAPORE/LONDON (Reuters) -Oil prices fell on Monday, deepening a multi-week decline, as a weakening global economy offset supply woes stemming from the closure … [+2004 chars]"
        }
      ]

    entertainment_article =[
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Manisha Koushik, Dr Prem Kumar Sharma",
          "title": "Taurus Horoscope Today, December 13, 2022: Things are about to change - Hindustan Times",
          "description": "Horoscope Today for December 13 to read the daily astrological prediction for Taurus. Taureans, fortune may be on your side in your professional endeavours. | Horoscope",
          "url": "https://www.hindustantimes.com/astrology/horoscope/taurus-horoscope-today-december-13-2022-things-are-about-to-change-101670855646902.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/bull-2691107_1920_1662003388031_1670865938244_1670865938244.jpg",
          "publishedAt": "2022-12-12T18:31:18Z",
          "content": "TAURUS (Apr 21-May 20)\r\nTaureans, fortune may be on your side in your professional endeavours. Daily Astrological Prediction says, now is a great time to launch that business or creative project you'… [+2431 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Greatandhra.com"
          },
          "author": "Vamsi",
          "title": "Nenu Student Sir! 1st Single: Antha Maaye - Greatandhra",
          "description": "Young hero Ganesh will be seen as a college student in his second movie Nenu Student Sir! which is gearing up for its release.",
          "url": "https://www.greatandhra.com/movies/news/nenu-student-sir-1st-single-antha-maaye-125879",
          "urlToImage": "https://www.greatandhra.com/newphotos10/nenestudent11670867163.jpg",
          "publishedAt": "2022-12-12T17:46:11Z",
          "content": "Young hero Ganesh will be seen as a college student in his second movie Nenu Student Sir! which is gearing up for its release.\r\nThe film’s teaser which was released a few days ago gave us insight int… [+725 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Greatandhra.com"
          },
          "author": "Venkat",
          "title": "Good News Related To Prabhas' Personal Life? - Greatandhra",
          "description": "There is an indication that something interesting has come out in the interview of Balakrishna with Prabhas and Gopichand on his Unstoppable show.",
          "url": "https://www.greatandhra.com/movies/gossip/good-news-related-to-prabhas-personal-life-125878",
          "urlToImage": "https://www.greatandhra.com/newphotos10/prabhas_31670866954.jpg",
          "publishedAt": "2022-12-12T17:42:34Z",
          "content": "There is an indication that something interesting has come out in the interview of Balakrishna with Prabhas and Gopichand on his Unstoppable show.\r\nRam Charan appeared in the phone call all of a sudd… [+746 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Entertainment Desk",
          "title": "Malaika Arora reveals if she spoke to ex-Arbaaz Khan after his ‘breakup’ - Hindustan Times",
          "description": "Malaika Arora revealed if she spoke to her ex-husband Arbaaz Khan after his rumoured breakup. Here's what she said. | Bollywood",
          "url": "https://www.hindustantimes.com/entertainment/bollywood/malaika-arora-reveals-if-she-spoke-to-her-ex-arbaaz-khan-after-his-breakup-i-will-be-very-honest-101670864966903.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/malaika_arora_1670289183033_1670865270650_1670865270650.JPG",
          "publishedAt": "2022-12-12T17:23:37Z",
          "content": "Actor and television personality Malaika Arora has spoken about how she reacted to the rumoured breakup of her ex-husband, actor Arbaaz Khan. Talking with filmmaker Karan Johar on her reality show, M… [+2391 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India TV News"
          },
          "author": "Written by Aparupa Devnath",
          "title": "SS Rajamouli's RRR bags dual nomination in Golden Globe Awards 2022 - India TV News",
          "description": "SS Rajamouli's RRR has secured dual nominations at Golden Globes 2023 nominations.",
          "url": "https://www.indiatvnews.com/entertainment/regional-cinema/ss-rajamouli-rrr-bags-dual-nomination-in-golden-globe-awards-2022-best-foreign-film-best-original-song-ram-charan-2022-12-12-830728",
          "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/12/aqwdsdddssddhsxxdddddsddssdsdddsd-1670860386.jpg",
          "publishedAt": "2022-12-12T15:57:32Z",
          "content": "SS Rajamouli's magnum opus movie RRR seems unstoppable in breaking records. This time again the movie has gained the spotlight by securing dual nominations at the 80th Golden Globe Awards. The movie … [+2089 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Explained Desk",
          "title": "Why has Nora Fatehi sued Jacqueline Fernandez for defamation - The Indian Express",
          "description": "What exactly did Fernandez say about Fatehi? Why have the two actors been questioned in the Sukesh Chandrashekhar money laundering case? We explain.",
          "url": "https://indianexpress.com/article/explained/why-has-nora-fatehi-sued-jacqueline-fernandez-for-defamation-8320683/",
          "urlToImage": "https://images.indianexpress.com/2022/12/Nora-Jaqueline-1200.jpeg",
          "publishedAt": "2022-12-12T14:04:51Z",
          "content": "Fatehi and Fernandez have both been questioned in a money laundering case filed against alleged conman Sukesh Chandrashekhar.\r\nFatehi’s plea alleged that Fernandez made defamatory imputations due to … [+2956 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "PINKVILLA"
          },
          "author": "Nikita Dalvi",
          "title": "EXCLUSIVE: Save the date from 21-23 January for Athiya Shetty, KL Rahul's wedding - PINKVILLA",
          "description": "The Most Adorable Duo From The World Of Bollywood & Cricket, Athiya Shetty & KL Rahul Have Decided To Take Their Relationship To The Next Level In January 2023. Pinkvilla Has Exclusively Learned About The Date Of Their Nuptials And It Looks Like The Celebrati…",
          "url": "https://www.pinkvilla.com/entertainment/exclusives/exclusive-save-the-date-from-21-23-january-for-athiya-shetty-kl-rahuls-wedding-1203129",
          "urlToImage": "https://www.pinkvilla.com/english/images/2022/12/903428107_png_20221212_173308_0000_1280*720.jpg",
          "publishedAt": "2022-12-12T13:52:54Z",
          "content": "One of the most highly anticipated celebrity marriages of 2023 is not too far now. So, if you are sick of the humdrum of the wedding date confusion, don't be! We've got you covered. The wedding dates… [+637 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Govinda Naam Mera Song Pappi Jhappi: Kiara Advani And Vicky Kaushal's New Track Gives Happy Vibes - NDTV Movies",
          "description": "Pappi Jhappi has been written by Kumaar and composed by Meet Bros",
          "url": "https://www.ndtv.com/entertainment/govinda-naam-mera-song-pappi-jhappi-kiara-advani-and-vicky-kaushal-give-twinning-goals-3599398",
          "urlToImage": "https://c.ndtvimg.com/2022-12/okf81nmo_q_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T13:16:33Z",
          "content": "A still from the video. (courtesy: Sony Music India)\r\nVicky Kaushal, Kiara Advani and Bhumi Pednekar's upcoming film Govinda Naam Mera is giving us back-to-back blockbuster songs. The latest to take … [+1797 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Kareena Kapoor Was Yoga-Bombed By Son Jeh And It's All Kinds Of Adorable - NDTV Movies",
          "description": "Kareena Kapoor could not have asked for better company for her yoga session.",
          "url": "https://www.ndtv.com/entertainment/kareena-kapoor-s-yoga-session-just-turned-cuter-thanks-to-this-usual-suspect-3599622",
          "urlToImage": "https://c.ndtvimg.com/2022-12/1no2d6qo_kareena-kapoor_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T13:03:30Z",
          "content": "A still from the video. (courtesy: anshukayoga)\r\nKareena Kapoor is a doting mother and this is no secret. The actress often shares images and videos of her children Taimur and Jehangir (Jeh) on Insta… [+1800 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": null,
          "title": "'Besharam Rang' song from 'Pathaan' is out and how! Shah Rukh Khan and Deepika Padukone groove in their most sizzling avatar; fans react - Times of India",
          "description": "The first song from the much-awaited film 'Pathaan' 'Besharam Rang' is finally out and is all about 'beauty' and 'boats.' While Deepika Padukone looked gorgeous in monokinis, flaunting her glam-goddess avatar, Shah Rukh Khan can be seen as the king of cool in…",
          "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/besharam-rang-song-from-pathaan-is-out-and-how-shah-rukh-khan-and-deepika-padukone-groove-in-their-most-sizzling-avatar-fans-react/videoshow/96175767.cms",
          "urlToImage": "https://timesofindia.indiatimes.com/photo/96175767/size-56850/96175767.jpg",
          "publishedAt": "2022-12-12T12:51:43Z",
          "content": "The first song from the much-awaited film 'Pathaan\r\n' 'Besharam Rang'\r\n is finally out and is all about 'beauty' and 'boats.' While Deepika Padukone\r\n looked gorgeous in monokinis, flaunting her glam… [+439 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "123telugu.com"
          },
          "author": null,
          "title": "Jailer glimpse – Vintage Rajini looks cool - 123telugu",
          "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
          "url": "https://www.123telugu.com/mnews/jailer-glimpse-vintage-rajini-looks-cool.html",
          "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
          "publishedAt": "2022-12-12T12:46:00Z",
          "content": "Jailer is a film that has been awaited for a long time now as it has superstar Rajinikanth playing the role of a Jailer for the first time in his career.\r\nAs it is the birthday of the superstar himse… [+572 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "BJP's Manoj Tiwari Welcomes Baby Girl, Says \"Blessed With Saraswati After Lakshmi\" - NDTV",
          "description": "Manoj Tiwari posted a video of his wife's \"Godh Bharai\" (Baby Shower) ceremony last month.",
          "url": "https://www.ndtv.com/feature/bjps-manoj-tiwari-welcomes-baby-girl-says-blessed-with-saraswati-after-lakshmi-3600027",
          "urlToImage": "https://c.ndtvimg.com/2022-12/moi8eqto_manoj-tiwari-becomes-father-650_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T12:43:32Z",
          "content": "Manoj Tiwari shared the exciting news with his fans and followers on social media.\r\nBharatiya Janata Party (BJP) MP Manoj Tiwari welcomed a baby girl on Monday morning. The Bhojpuri actor posted a ph… [+1744 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Ananya Panday, Janhvi Kapoor, Vidya Balan, Rashmika Mandanna's Sunday Diaries - NDTV",
          "description": "Ananya Panday attended Indian Television Academy Awards (ITA) Awards 2022 held in Mumbai. Janhvi Kapoor, Vidya Balan and Rashmika Mandanna were spotted in the city.",
          "url": "https://www.ndtv.com/photos/entertainment/ananya-panday-janhvi-kapoor-vidya-balan-rashmika-mandannas-sunday-diaries-103943",
          "urlToImage": "https://drop.ndtv.com/albums/ENTERTAINMENT/ananya-panday-j_638064644445595675/638064644445595675_640x480.jpeg",
          "publishedAt": "2022-12-12T12:24:00Z",
          "content": "................................ Advertisement ................................"
        },
        {
          "source": {
            "id": null,
            "name": "India.com"
          },
          "author": null,
          "title": "Sushant Singh Rajput’s Mumbai Flat Lies Vacant After 2.5 Years of His Death. See Inside Pics of Apartment Her - India.com",
          "description": "The  sea-facing house apartment in Mumbai where Bollywood actor Sushant Singh Rajput (SSR) was found dead is lying vacant for the last 2.5 years. A few days back, real estate broker, Rafique Merchant, shared a clip of the flat and informed that the flat is av…",
          "url": "https://www.india.com/photos/news/sushant-singh-rajput-mumbai-flat-lies-vacant-after-2-5-years-of-his-death-see-inside-pics-of-ssr-apartment-mount-blanc-bandra-here-260833/",
          "urlToImage": "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/SSR's-sea-facing-home-in-Bandra,-Mumbai-202212-1670844834.jpg",
          "publishedAt": "2022-12-12T11:57:37Z",
          "content": "Image credit: TwitterPeople are scared to move into this flat. When prospective tenants would hear that this is the same apartment where he died, they would not even visit the flat. Nowadays, people … [+109 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Indiaforums.com"
          },
          "author": "Aqsa Akbani Siddiqui",
          "title": "Keerti to die in Colors’ show ‘Pyaar Ke Saath Vachan Dharam Patnii’ - India Forums",
          "description": "Gear up for a major twist in Colors’ newly launched show ‘Pyaar Ke Saath Vachan Dharam Patnii’.",
          "url": "https://www.indiaforums.com/article/keerti-to-die-in-colors-show-pyaar-ke-saath-vachan-dharam-patnii_192581",
          "urlToImage": "https://img.indiaforums.com/article/1200x675/19/2581-keerti-to-die-in-colors-show-pyaar-ke-saath-vachan-dharam-patnii.jpg",
          "publishedAt": "2022-12-12T11:44:00Z",
          "content": "When destiny conspires for people to meet, theres no way to avoid it. Produced by Ekta Kapoors Balaji Telefilms, COLORS upcoming show 'Pyar Ke Saat Vachan Dharam Patnii depicts how kismet intervenes … [+1286 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Bollywood Hungama"
          },
          "author": "Bollywood Hungama",
          "title": "Kartik Aaryan to get new leading lady in Aashiqui 3 - Bollywood Hungama",
          "description": "Kartik Aaryan to get new leading lady in Aashiqui 3. Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities News, Bollywood News Hindi, Hindi Bollywood News at Bollywood Hungama.com.",
          "url": "https://www.bollywoodhungama.com/news/bollywood/kartik-aaryan-get-new-leading-lady-aashiqui-3/",
          "urlToImage": "https://media5.bollywoodhungama.in/wp-content/uploads/2022/12/Kartik-Aaryan-to-get-new-leading-lady-620.jpg",
          "publishedAt": "2022-12-12T11:39:36Z",
          "content": "Whether it was the sizzling chemistry between Rahul Roy and Anu Aggarwal or Aditya Roy Kapur and Shraddha Kapoor, audiences have only showered love on these couples featuring in Aashiqui. Needless to… [+2206 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Odishatv.in"
          },
          "author": "Nitesh Kumar Sahoo",
          "title": "Popular social media influencer shares pics with two pregnant wives, gets brutally trolled - OTV News",
          "description": "Armaan has two wives, who are currently pregnant. He recently shared photos posing with his two pregnant wives. In the pictures, both his wives were seen flaunting their baby bumps.",
          "url": "https://odishatv.in/news/trending/popular-social-media-influencer-shares-pics-with-two-pregnant-wives-gets-brutally-trolled-192166",
          "urlToImage": "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1670843512.webp",
          "publishedAt": "2022-12-12T11:12:18Z",
          "content": "While the internet is flooded with contents of different themes, some pictures and videos irk the netizens. The content creators get heavily trolled which they never would have expected. A similar in… [+1551 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "123telugu.com"
          },
          "author": null,
          "title": "OTT Review : Witness - Telugu film on SonyLIV - 123telugu",
          "description": "Witness, SonyLIV, Witness On SonyLIV, Witness Telugu Movie Review, Shraddha Srinath, Rohini, Subatra Robert, Shanmuga Raja, Azhagam Perumal, G Selva, Rajeev Anand, Tamilarasan, Srinath, Witness Movie Review, Witness Movie Review, Shraddha Srinath, Rohini, Sub…",
          "url": "https://www.123telugu.com/reviews/review-witness-telugu-film-on-sonyliv.html",
          "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
          "publishedAt": "2022-12-12T10:52:00Z",
          "content": "Release Date : December 09, 2022\r\n 123telugu.com Rating : 2.75/5 \r\nStarring: Shraddha Srinath, Rohini, Subatra Robert, Shanmuga Raja, Azhagam Perumal, G Selva, Rajeev Anand, Tamilarasan, Srinath\r\nDir… [+3514 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": null,
          "title": "Oops! Vidya Balan faces an ‘awkward ’ moment after her saree's pallu gets 'accidentally' pulled by a man; netizens express anger– ‘Really bad behaviour’ | Hindi Movie News - Bollywood - Times of India",
          "description": "Vidya Balan recently attended filmmaker Guneet Monga’s pre-wedding party with her husband/producer Siddharth Roy Kapur. As the couple arrived on the red carpet, Vidya faced an awkward moment when her saree got strangled and pulled by a person passing by. The …",
          "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/oops-vidya-balan-faces-an-awkward-moment-as-her-sarees-pallu-gets-pulled-by-a-man-netizens-express-anger-really-bad-behaviour/videoshow/96172514.cms",
          "urlToImage": "https://timesofindia.indiatimes.com/photo/96172514/size-62328/96172514.jpg",
          "publishedAt": "2022-12-12T10:51:27Z",
          "content": "Vidya Balan\r\n recently attended filmmaker Guneet Mongas pre-wedding party with her husband/producer Siddharth Roy Kapur\r\n. As the couple arrived on the red carpet, Vidya faced an awkward moment when … [+571 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI Photogallery",
          "title": "Deepika Padukone's glam swimwear looks that keep you glued to the screen - photogallery.indiatimes.com",
          "description": "Deepika Padukone's glam swimwear looks that keep you glued to the screen",
          "url": "https://photogallery.indiatimes.com/web-stories/deepika-padukones-glam-swimwear-looks-that-keep-you-glued-to-the-screen/photostory/96171557.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-96171573,width-900,height-1200,resizemode-6.cms",
          "publishedAt": "2022-12-12T10:43:00Z",
          "content": "TOI PhotogalleryDec 12, 2022\r\nThe 'Besharam Rang' song from the film 'Pathaan,' just dropped, leaving fans in awe of Deepika's beauty.\r\nImage Source: TNN\r\nThe actress made her bikini looks even more … [+945 chars]"
        }
      ]

    general_article = [
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "Watch: Pakistan tailender refuses to shake hands with Stokes after England win - Hindustan Times",
          "description": "Even as the DRS was being taken and the third umpire was going through the process, England captain Ben Stokes prematurely walked up to Mohammad Ali to shake hands with him. However, the Pakistan No. 11 batter refused to do so. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/watch-pakistan-tail-ender-refuses-to-shake-hands-with-ben-stokes-after-england-win-series-in-2nd-test-video-viral-101670835258862.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/stokes-ali-screengrab_1670835585185_1670835593699_1670835593699.jpg",
          "publishedAt": "2022-12-13T01:56:00Z",
          "content": "Mark Wood grabbed four wickets as England beat Pakistan by 26 runs in the second Multan Test to clinch the three-match series with an unassailable 2-0 lead. Requiring 355 to win, Pakistan put up a br… [+3480 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Hailed as 'next Warren Buffet', Sam Bankman, whose crypto empire crashed, held - Hindustan Times",
          "description": "The arrest comes on the eve of Bankman-Fried's scheduled appearance at a US Congress hearing in which he was to testify under oath about the crypto exchange's overnight demise.",
          "url": "https://www.hindustantimes.com/world-news/disgraced-crypto-tycoon-bankman-fried-arrested-in-bahamas-101670892947923.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/13/1600x900/BANKRUPTCY-CRIME-FTX-Bankman-Fried_arrested_1670893078820_1670893079119_1670893079119.jpg",
          "publishedAt": "2022-12-13T00:58:51Z",
          "content": "Embattled cryptocurrency mogul and former FTX CEO Sam Bankman-Fried was arrested in the Bahamas after being criminally charged by US prosecutors. US officials have been seeking to charge Bankman-Frie… [+1627 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Correspondent",
          "title": "Partially vaxxed 4-year-old dies of suspected measles - Hindustan Times",
          "description": "According to the Brihanmumbai Municipal Corporation (BMC), the child developed the symptoms of measles on December 6. On December 11, her condition worsened and she had to be admitted to the intensive care unit (ICU) of a civic hospital. | Mumbai news",
          "url": "https://www.hindustantimes.com/cities/mumbai-news/partially-vaxxed-4-year-old-dies-of-suspected-measles-101670872887756.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/Under-the-ongoing-outbreak-response-immunisation--_1670872886095.jpg",
          "publishedAt": "2022-12-12T19:21:27Z",
          "content": "Mumbai: A four-year-old girl from Saki Naka died on Monday while undergoing treatment for suspected measles. This would be the sixteenth death in the city suspected to be caused by measles.\r\nAccordin… [+1049 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5google.com"
          },
          "author": "Ben Schoon",
          "title": "Xiaomi 13 is official with Snapdragon 8 Gen 2 - 9to5Google",
          "description": "While it won’t be launching globally for a bit, the Xiaomi 13 series has just been announced as one of the first devices with the Snapdragon 8 Gen 2. The Xiaomi 13 series consists of the standard Xiaomi 13 and the Xiaomi 13 Pro. The lower-end model is a flags…",
          "url": "https://9to5google.com/2022/12/12/xiaomi-13-launch/",
          "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/12/xiaomi-13-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2022-12-12T18:46:00Z",
          "content": "While it wont be launching globally for a bit, the Xiaomi 13 series has just been announced as one of the first devices with the Snapdragon 8 Gen 2.\r\nThe Xiaomi 13 series consists of the standard Xia… [+3012 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Manisha Koushik, Dr Prem Kumar Sharma",
          "title": "Taurus Horoscope Today, December 13, 2022: Things are about to change - Hindustan Times",
          "description": "Horoscope Today for December 13 to read the daily astrological prediction for Taurus. Taureans, fortune may be on your side in your professional endeavours. | Horoscope",
          "url": "https://www.hindustantimes.com/astrology/horoscope/taurus-horoscope-today-december-13-2022-things-are-about-to-change-101670855646902.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/bull-2691107_1920_1662003388031_1670865938244_1670865938244.jpg",
          "publishedAt": "2022-12-12T18:31:18Z",
          "content": "TAURUS (Apr 21-May 20)\r\nTaureans, fortune may be on your side in your professional endeavours. Daily Astrological Prediction says, now is a great time to launch that business or creative project you'… [+2431 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Manu Pubby and Bikash Singh",
          "title": "Border tension after Indian, Chinese soldiers clash at Tawang - Economic Times",
          "description": "Sources said that the clash did not involve firearms but clubs and sticks were used, resulting in injuries. The clash took place after close to 350 Chinese soldiers approached the contested border to target an Indian Army post and were physically stopped from…",
          "url": "https://economictimes.indiatimes.com/news/defence/border-tension-after-indian-chinese-soldiers-clash-at-tawang/articleshow/96180703.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-96180741,width-1070,height-580,imgsize-202682,overlay-etdefence/photo.jpg",
          "publishedAt": "2022-12-12T18:27:00Z",
          "content": "Tensions on the eastern border have risen after a physical clash between Indian and Chinese soldiers at Tawang, which resulted in minor injuries on both sides. The clash took place along the Line of … [+1694 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "AP",
          "title": "Japanese company's lander rockets toward moon with UAE rover - HT Tech",
          "description": "It will take nearly five months for the lander and its experiments to reach the moon.",
          "url": "https://tech.hindustantimes.com/tech/news/japanese-company-s-lander-rockets-toward-moon-with-uae-rover-71670836459800.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/12/1600x900/Moon-Japan-UAE-7_1670869089931_1670869089931_1670869126480_1670869126480.jpg",
          "publishedAt": "2022-12-12T18:26:01Z",
          "content": "A Tokyo company aimed for the moon with its own private lander Sunday, blasting off atop a SpaceX rocket with the United Arab Emirates' first lunar rover and a toylike robot from Japan that's designe… [+4161 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Abplive.com"
          },
          "author": "Radifah Kabir",
          "title": "Artemis I: NASA's Orion Returns To Earth. Know What's Next - ABP Live",
          "description": "Artemis I: NASA's Orion splashed down in the Pacific Ocean, west of Baja California, at 9:40 am PST (11:10 pm IST) on Sunday. The second leg of the Artemis Program is Artemis II, a crewed test flight.",
          "url": "https://news.abplive.com/science/artemis-i-nasa-orion-spacecraft-returns-to-earth-splashdown-know-what-is-next-artemis-ii-artemis-ii-moon-mission-1569167",
          "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/12/ccff216f6fa5980deae99454a1736eb91670867551185324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
          "publishedAt": "2022-12-12T17:48:38Z",
          "content": "Artemis I: NASA's Orion spacecraft returned to Earth safely on Sunday, December 12, after spending over 25 days in the harsh environment of deep space. Orion splashed down in the Pacific Ocean, west … [+4668 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India.com"
          },
          "author": "https://www.india.com/author/ians/",
          "title": "WhatsApp Working on 'View Once Text' Feature. Details Inside - India.com",
          "description": "Meta-owned WhatsApp is reportedly working on bringing the ability to send \"view once text\" messages to a future update of the app.",
          "url": "https://www.india.com/technology/whatsapp-working-on-view-once-text-feature-details-inside-5798631/",
          "urlToImage": "https://static.india.com/wp-content/uploads/2022/11/WhatsApp-Logo.jpg",
          "publishedAt": "2022-12-12T17:25:00Z",
          "content": "Meta-owned WhatsApp is reportedly working on bringing the ability to send \"view once text\" messages to a future update of the app.\r\nMeta has also announced to add legs to its virtual avatars which ar… [+1514 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Tribune India"
          },
          "author": "The Tribune India",
          "title": "Study establishes link between heart condition and Covid - The Tribune India",
          "description": "Researchers at Cedars-Smidt Sinai's Cardiac Institute confirmed the link between a debilitating heart condition and Covid-19, as well as a new link between the same condition and the Covid-19 vaccine.",
          "url": "https://www.tribuneindia.com/news/health/study-establishes-link-between-heart-condition-and-covid-460298",
          "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/12/2022_12$largeimg_95505096.jpeg",
          "publishedAt": "2022-12-12T16:51:00Z",
          "content": "ANI\r\nLos Angeles, December 12\r\nResearchers at Cedars-Smidt Sinai's Cardiac Institute confirmed the link between a debilitating heart condition and Covid-19, as well as a new link between the same con… [+4033 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Express Web Desk",
          "title": "Bengaluru News Live Updates: IMD issues alert for heavy rainfall, low pressure over Kerala, Karnataka coast - The Indian Express",
          "description": "Bengaluru News Live Updates Today: The forecast has predicted widespread rainfall in Bengaluru Urban and surrounding districts, along with the coastal districts of Karnataka till Tuesday.",
          "url": "https://indianexpress.com/article/cities/bangalore/bengaluru-news-live-updates-rain-cyclone-mandous-weather-traffic-8319331/",
          "urlToImage": "https://images.indianexpress.com/2022/12/bengaluru-rains.jpg",
          "publishedAt": "2022-12-12T16:47:26Z",
          "content": "There are nearly 475 shops in the market with fruit, flower, and vegetable vendors at the front, and meat and fish vendors at the back. (Express photo by Jithendra M)\r\nOne of the charms of shopping i… [+1495 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Eight Pakistanis, one Afghan soldier killed in cross-border clash - Reuters.com",
          "description": "Cross-border shelling and gunfire between Afghanistan and Pakistan killed eight Pakistani civilians and one Afghan soldier on Sunday, officials on both sides of the frontier said, with each side accusing the other of starting the fighting.",
          "url": "https://www.reuters.com/world/asia-pacific/six-killed-firing-by-afghan-forces-pakistan-border-pakistan-army-2022-12-11/",
          "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=123",
          "publishedAt": "2022-12-12T16:33:00Z",
          "content": "QUETTA, Pakistan, Dec 12 (Reuters) - Cross-border shelling and gunfire between Afghanistan and Pakistan killed eight Pakistani civilians and one Afghan soldier on Sunday, officials on both sides of t… [+2795 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Undercover Cop Cracks College Ragging Case. She Posed As A Student - NDTV",
          "description": "A bag on her shoulder, she would be in college daily, chat with friends, spend time in the canteen, just like any other student. Only that she wasn't. She was an undercover cop tasked with gathering evidence on the horror of ragging on campus.",
          "url": "https://www.ndtv.com/india-news/madhya-pradesh-indore-ragging-how-woman-cop-posed-as-college-student-for-3-months-to-crack-ragging-case-3599264",
          "urlToImage": "https://c.ndtvimg.com/2022-12/hdvtohp8_mp-cop_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T16:22:00Z",
          "content": "NDTV spoke to Shalini Chauhan on the undercover operation\r\nBhopal: She would be in college daily, bag on shoulder, and would be seen chatting with friends, spending time in the canteen, \"bunking\" cla… [+2215 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Roshni Agarwal",
          "title": "Ahead of Market: 10 things that will decide D-Street action on Tuesday - Economic Times",
          "description": "The MACD showed bearish signs on the counters of SAIL, Indiabulls Real Estate, Coffee Day, Hindustan Copper and HDFC Life Insurance, among others",
          "url": "https://economictimes.indiatimes.com/markets/stocks/news/ahead-of-market-10-things-that-will-decide-d-street-action-on-tuesday/articleshow/96179277.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-96179318,width-1070,height-580,imgsize-170334,overlay-etmarkets/photo.jpg",
          "publishedAt": "2022-12-12T16:15:00Z",
          "content": "NEW DELHI: Benchmark indices ended flat on the first trading day of the pivotal week as investors keenly await the US Fed Reserves policy decision due on December 14. Meanwhile, broader markets, rela… [+4614 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Pocket-lint"
          },
          "author": "Pocket-lint",
          "title": "Redmi Note 12 Pro+ launches internationally on 5 January with a whopping 200MP camera - Pocket-lint",
          "description": "Xiaomi has confirmed that the Redmi Note 12 Pro+ will get an international unveiling on 5 January 2023 while also pointing out it'll have a huge",
          "url": "https://www.pocket-lint.com/phones/news/xiaomi/163785-the-redmi-note-12-pro-launches-5-january-2023-with-a-whopping-200-megapixel-camera",
          "urlToImage": "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/163785-phones-news-the-redmi-note-12-pro-launches-5-january-2023-with-a-whopping-200-megapixel-camera-image1-umjhdtdrcf.jpg",
          "publishedAt": "2022-12-12T14:53:51Z",
          "content": "(Pocket-lint) - Xiaomi has confirmed that the Redmi Note 12 Pro+ will get an international unveiling on 5 January 2023 while also pointing out it'll have a huge 200-megapixel camera.\r\nThe new phone w… [+1230 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Bar & Bench - Indian Legal News"
          },
          "author": "Neha Joshi",
          "title": "From Oscar Wilde to Manjhi: Newly appointed SC judge Justice Dipankar Datta's penchant for film, literature and mythology references - Bar & Bench - Indian Legal News",
          "description": "The judge has made several references to movies, literature texts and mythological references during hearings and in the judgments authored by him.",
          "url": "https://www.barandbench.com/news/litigation/the-dramatic-chief-justice-of-bombay-high-court",
          "urlToImage": "https://gumlet.assettype.com/barandbench%2F2021-04%2F70b45cca-aa36-463c-b243-d76915ef535f%2FDipankar_Datta.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true",
          "publishedAt": "2022-12-12T14:51:00Z",
          "content": "'Alice in Wonderland' and Hindi song 'Mumbai meri jaan'\r\nIn February this year, the High Court disposed of a suo motu PIL pertaining to building collapses in the city of Mumbai.\r\nIn the detailed judg… [+537 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Sandip G",
          "title": "From Saudi Arabia shock to one step from final: How Argentina and Messi made it - The Indian Express",
          "description": "Savvy coach, family time, a dinner turnaround and the team in which Messi is playing for the rest and the rest are playing for Messi have helped the team make a comeback.",
          "url": "https://indianexpress.com/article/sports/football/from-saudi-arabia-shock-to-one-step-from-final-how-argentina-and-messi-made-it-8320727/",
          "urlToImage": "https://images.indianexpress.com/2022/12/ARG-4.jpg",
          "publishedAt": "2022-12-12T14:38:38Z",
          "content": "THE EVENING Saudi Arabia defeated Argentina, manager Lionel Scaloni called for an early dinner.Usually, the players take dinner in groups, or sometimes alone, but this time Scaloni insisted on dining… [+5588 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Moneycontrol"
          },
          "author": "Ashwin Mohan",
          "title": "Tata Motors gives green signal for stake sale in subsidiary Tata Technologies via IPO - Moneycontrol",
          "description": "Since TCS in 2004, no company from the Tata Group has made a debut on the domestic bourses. Tata Autocomp Systems shelved a $260 mn IPO and earlier this month, Tata Play ( earlier called Tata Sky) filed for a confidential pre-filing of offer documents.",
          "url": "https://www.moneycontrol.com/news/companies-2/tata-motors-board-gives-in-principle-nod-for-partial-divestment-in-tata-technologies-via-ipo-9691551.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2019/08/RTX2QABF-673x435.jpg",
          "publishedAt": "2022-12-12T14:31:39Z",
          "content": "Tata Motors on December 12 stated that it had approved the partial divestment of its equity shares in subsidiary Tata Technologies via an initial public offer ( IPO).\r\nOn July 8, 2022, Moneycontrol w… [+4298 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Indian Express"
          },
          "author": "Explained Desk",
          "title": "Why has Nora Fatehi sued Jacqueline Fernandez for defamation - The Indian Express",
          "description": "What exactly did Fernandez say about Fatehi? Why have the two actors been questioned in the Sukesh Chandrashekhar money laundering case? We explain.",
          "url": "https://indianexpress.com/article/explained/why-has-nora-fatehi-sued-jacqueline-fernandez-for-defamation-8320683/",
          "urlToImage": "https://images.indianexpress.com/2022/12/Nora-Jaqueline-1200.jpeg",
          "publishedAt": "2022-12-12T14:04:51Z",
          "content": "Fatehi and Fernandez have both been questioned in a money laundering case filed against alleged conman Sukesh Chandrashekhar.\r\nFatehi’s plea alleged that Fernandez made defamatory imputations due to … [+2956 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Mystery Asteroid To Pass Earth Before Christmas. All You Need To Know - NDTV",
          "description": "According to the European Space Agency (ESA), this holiday season you may very well be able to spot an asteroid not larger than the Statue of Liberty, that is travelling towards the Earth.",
          "url": "https://www.ndtv.com/world-news/mystery-asteroid-to-pass-earth-before-christmas-all-you-need-to-know-3600026",
          "urlToImage": "https://c.ndtvimg.com/2022-12/g4ai9bno_asteroid-generic-650_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T13:25:21Z",
          "content": "Distance between the asteroid and Earth will be under two lunar distances. (Representational)\r\nSpace lovers are in for a treat this Christmas. According to the European Space Agency (ESA), this holid… [+1907 chars]"
        }
      ]

     health_article = [
        {
          "source": {
            "id": null,
            "name": "EurekAlert"
          },
          "author": null,
          "title": "Low-carb diet may help patients with diabetes achieve better weight loss and glucose control in short term compared to a low-fat diet - EurekAlert",
          "description": "A randomized controlled trial of more than 100 persons with type 2 diabetes found that a low-carbohydrate, high-fat, calorie unrestricted diet helped patients achieve better weight loss and glucose control over a 6-month intervention compared to a high-carb, …",
          "url": "https://www.eurekalert.org/news-releases/973710",
          "urlToImage": "https://www.eurekalert.org/images/EurekAlert-bluebg_Twitter_601X601.png",
          "publishedAt": "2022-12-13T02:03:47Z",
          "content": "Embargoed for release until 5:00 p.m. ET on Monday 12 December 2022Annals of Internal Medicine Tip Sheet@AnnalsofimBelow please find summaries of new articles that will be published in the next issue… [+11114 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Abplive.com"
          },
          "author": "Radifah Kabir",
          "title": "'Unbalanced' Genes Lead To Ageing, AI Analysis Of Multiple Species Reveals. Know What It Means - ABP Live",
          "description": "It is important for cells to balance the activity of long and short genes. Longer genes are linked to longer lifespans, and shorter genes are linked to shorter lifespans, the study found.",
          "url": "https://news.abplive.com/science/unbalanced-genes-lead-to-ageing-ai-analysis-of-multiple-species-reveals-know-what-it-means-1569284",
          "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/13/f5c72dc0916d508b188c4821571f8b601670870270684324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
          "publishedAt": "2022-12-13T01:46:13Z",
          "content": "Ageing is an inevitable phenomenon. Researchers from Northwestern University recently discovered a previously unknown mechanism that drives ageing, using artificial intelligence. The researchers anal… [+7018 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ThePrint"
          },
          "author": "ANI",
          "title": "Researchers find connection between early life trauma, binge eating disorder - ThePrint",
          "description": "Blacksburg (Virginia) [USA], December 13 (ANI): Over eight out of ten of those who have binge eating disorder, which affects about 3 percent of Americans–also experienced childhood abuse, neglect, or other trauma. Now, a Virginia Tech scientist has identified…",
          "url": "https://theprint.in/science/researchers-find-connection-between-early-life-trauma-binge-eating-disorder/1262908/",
          "urlToImage": null,
          "publishedAt": "2022-12-12T23:13:20Z",
          "content": "Blacksburg (Virginia) [USA], December 13 (ANI): Over eight out of ten of those who have binge eating disorder, which affects about 3 percent of Americans–also experienced childhood abuse, neglect, or… [+4162 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ANI News"
          },
          "author": null,
          "title": "Study finds specific bacteria in bladder that makes women more prone to recurrent UTIs - ANI News",
          "description": "Scientists have discovered certain bacteria in the bladder that may identify which postmenopausal women are more prone to recurring urinary tract infections (UTIs), and they discovered that oestrogen may contribute to lowering that vulnerability.",
          "url": "https://www.aninews.in/news/health/study-finds-specific-bacteria-in-bladder-that-makes-women-more-prone-to-recurrent-utis20221213040246",
          "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221212214731.jpg",
          "publishedAt": "2022-12-12T22:32:00Z",
          "content": "Texas [US], December 13 (ANI): Researchers have discovered particular bacteria in the bladder that may identify which postmenopausal women are more prone to recurring urinary tract infections (UTIs),… [+4378 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "These are the most common COVID symptoms currently being reported, study finds - The Hill",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMilwFodHRwczovL3RoZWhpbGwuY29tL2NoYW5naW5nLWFtZXJpY2Evd2VsbC1iZWluZy9wcmV2ZW50aW9uLWN1cmVzLzM3NzIxNjgtdGhlc2UtYXJlLXRoZS1tb3N0LWNvbW1vbi1jb3ZpZC1zeW1wdG9tcy1jdXJyZW50bHktYmVpbmctcmVwb3J0ZWQtc3R1ZHktZmluZHMv0gGbAWh0dHBzOi8vdGhlaGlsbC5jb20vY2hhbmdpbmctYW1lcmljYS93ZWxsLWJlaW5nL3ByZXZlbnRpb24tY3VyZXMvMzc3MjE2OC10aGVzZS1hcmUtdGhlLW1vc3QtY29tbW9uLWNvdmlkLXN5bXB0b21zLWN1cnJlbnRseS1iZWluZy1yZXBvcnRlZC1zdHVkeS1maW5kcy9hbXAv?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-12-12T21:15:11Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Medical Xpress"
          },
          "author": "Science X staff",
          "title": "Using RNA interference to correct a mistake in the genetic code of patients with Fukuyama muscular dystrophy - Medical Xpress",
          "description": "Muscular dystrophy is a debilitating disease that causes progressive weakening and loss of muscles. Fukuyama congenital muscular dystrophy (FCMD), the second most common form of childhood muscular dystrophy in Japan, is a severe neuromuscular disorder charact…",
          "url": "https://medicalxpress.com/news/2022-12-rna-genetic-code-patients-fukuyama.html",
          "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/novel-method-with-impl.jpg",
          "publishedAt": "2022-12-12T20:49:03Z",
          "content": "Muscular dystrophy is a debilitating disease that causes progressive weakening and loss of muscles. Fukuyama congenital muscular dystrophy (FCMD), the second most common form of childhood muscular dy… [+5283 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Medscape"
          },
          "author": null,
          "title": "Bariatric Surgery Reduces Obesity-Related Cancer Risk - Medscape",
          "description": "Maurie Markman, MD, discusses results from a case-control study of individuals with high BMI, demonstrating reduced obesity-related cancer risk following bariatric surgery.",
          "url": "https://www.medscape.com/viewarticle/981929",
          "urlToImage": "https://img.medscape.com/thumbnail_library/Markman_on_Oncology_800x600.jpg",
          "publishedAt": "2022-12-12T19:28:07Z",
          "content": "This transcript has been edited for clarity.\r\nI'm Dr Maurie Markman from Cancer Treatment Centers of America. Im going to briefly discuss a component of a very complex and somewhat controversial topi… [+3710 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Correspondent",
          "title": "Partially vaxxed 4-year-old dies of suspected measles - Hindustan Times",
          "description": "According to the Brihanmumbai Municipal Corporation (BMC), the child developed the symptoms of measles on December 6. On December 11, her condition worsened and she had to be admitted to the intensive care unit (ICU) of a civic hospital. | Mumbai news",
          "url": "https://www.hindustantimes.com/cities/mumbai-news/partially-vaxxed-4-year-old-dies-of-suspected-measles-101670872887756.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/12/12/1600x900/Under-the-ongoing-outbreak-response-immunisation--_1670872886095.jpg",
          "publishedAt": "2022-12-12T19:21:27Z",
          "content": "Mumbai: A four-year-old girl from Saki Naka died on Monday while undergoing treatment for suspected measles. This would be the sixteenth death in the city suspected to be caused by measles.\r\nAccordin… [+1049 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Washingtoncitypaper.com"
          },
          "author": "Sponsored Content, UP Venture Media",
          "title": "9 Best Thermogenic Fat Burner Supplements to Use in 2023 - Washington City Paper",
          "description": "Are you struggling to lose weight? Check out the best thermogenic fat burner that can speed up your weight loss journey.",
          "url": "http://washingtoncitypaper.com/article/581687/best-thermogenic-fat-burner/",
          "urlToImage": "https://newspack-washingtoncitypaper.s3.amazonaws.com/uploads/2022/12/Picture1-20.png",
          "publishedAt": "2022-12-12T19:12:12Z",
          "content": "If you struggle with losing weight, youre not alone. The weight loss journey can be a slow and frustrating process. If youve been doing everything under the sun to lose weight with no luck so far, an… [+35559 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WebMD"
          },
          "author": "Denny Watkins",
          "title": "How Fitness Trackers Will Help Us Keep an Eye on Disease - WebMD",
          "description": "A new study suggests that Fitbit data – including heart rate and step count – could serve as proxy for important clinical metrics, providing key insights to help treat chronic disease.",
          "url": "https://www.webmd.com/fitness-exercise/news/20221212/fitness-trackers-disease",
          "urlToImage": "https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/blog_posts/diabetes/1800x1200_woman_checking_fitness_tracker.jpg",
          "publishedAt": "2022-12-12T19:07:21Z",
          "content": "Dec. 12, 2022 A fitness tracker is like Santa Claus: It knows when youre sleeping, when youre awake, and whether youve been bad or good about meeting your daily step goal, that is. It may not bring y… [+2152 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WebMD"
          },
          "author": "Lisa O’Mary",
          "title": "Severe COVID Ages Brain Tissue at Molecular Level: Study - WebMD",
          "description": "People who died of severe COVID-19 had brain tissue similar to that of people who were at least 71 years old, prompting Harvard Medical School researchers to recommend that recovered COVID-19 patients seek neurological follow-up care.",
          "url": "https://www.webmd.com/brain/news/20221212/severe-covid-ages-brain-tissue-molecular-level-study",
          "urlToImage": "https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/news/2012/01_2012/cerebrospinal_fluid_predicts_alzheimers/1800x1200_cerebrospinal_fluid_predicts_alzheimers.jpg",
          "publishedAt": "2022-12-12T18:52:06Z",
          "content": "Dec. 12, 2022 People who died of severe COVID-19 had brain tissue similar to that of people who were at least 71 years old, prompting Harvard Medical School researchers to recommend that recovered CO… [+1889 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Scienceboard.net"
          },
          "author": "Nick Paul Taylor, The Science Advisory Board contributing writer",
          "title": "Discovery of toxin linked to severe COVID-19 points to new way to treat disease - The Science Board",
          "description": "A viral toxin produced by the SARS-CoV-2 virus may damage cell barriers, inducing vascular leak and driving severe COVID-19 infections, according to researchers at the University of California, Berkeley (UC Berkeley).",
          "url": "https://www.scienceboard.net/index.aspx?sec=log&itemID=5111",
          "urlToImage": "https://www.scienceboard.net/user/images/content_images/sup_can/2020_07_22_17_41_6021_SARS-CoV-2_spike_coronavirus_20200722173424.jpeg",
          "publishedAt": "2022-12-12T18:33:22Z",
          "content": "Severe COVID-19 is associated with pulmonary edema -- abnormal buildup of fluid in the lungs -- which is linked to epithelial and endothelial barrier dysfunction. Researchers previously identified an… [+2660 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Dailypioneer.com"
          },
          "author": "The Pioneer",
          "title": "Awareness & alertness can prevent breast cancer - Daily Pioneer",
          "description": "Onset of breast cancer may be determined with proactive screening; healthy lifestyle and diet can beat the malady\n\nAccording to various studies, around 2.25 million individuals are living with cancer and it contributes to approximately eight per cent of the t…",
          "url": "https://www.dailypioneer.com/2022/columnists/awareness---alertness-can-prevent-breast-cancer.html",
          "urlToImage": "https://www.dailypioneer.com/images/logo.jpg",
          "publishedAt": "2022-12-12T18:30:31Z",
          "content": "Onset of breast cancer may be determined with proactive screening; healthy lifestyle and diet can beat the malady\r\nAccording to various studies, around 2.25 million individuals are living with cancer… [+4582 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The BMJ"
          },
          "author": null,
          "title": "HIV related stigma: a dangerous roadblock - The BMJ",
          "description": "World AIDS Day, on 1 December 2022, marked the first anniversary of the Department of Health and Social Care’s action plan to end new HIV infections in England by 2030, improve quality of life for people living with HIV, and to tackle HIV related stigma.1 Sti…",
          "url": "https://www.bmj.com/content/379/bmj.o2989",
          "urlToImage": "https://www.bmj.com/sites/default/files/highwire/bmj/379/8364.cover-source.jpg",
          "publishedAt": "2022-12-12T16:51:49Z",
          "content": "<ol><li>Jane Anderson, consultant physician in HIV medicine1, </li><li>Kevin Fenton, regional director2</li></ol><ol><li>1Homerton Healthcare NHS Foundation Trust, UK\r\n</li><li>2Office for Health Imp… [+6135 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Tribune India"
          },
          "author": "The Tribune India",
          "title": "Study establishes link between heart condition and Covid - The Tribune India",
          "description": "Researchers at Cedars-Smidt Sinai's Cardiac Institute confirmed the link between a debilitating heart condition and Covid-19, as well as a new link between the same condition and the Covid-19 vaccine.",
          "url": "https://www.tribuneindia.com/news/health/study-establishes-link-between-heart-condition-and-covid-460298",
          "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/12/2022_12$largeimg_95505096.jpeg",
          "publishedAt": "2022-12-12T16:51:00Z",
          "content": "ANI\r\nLos Angeles, December 12\r\nResearchers at Cedars-Smidt Sinai's Cardiac Institute confirmed the link between a debilitating heart condition and Covid-19, as well as a new link between the same con… [+4033 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Verywellhealth.com"
          },
          "author": "https://www.facebook.com/verywell",
          "title": "Temporal Lobe Epilepsy: Signs, Symptoms, Complications - Verywell Health",
          "description": "Temporal lobe seizures are focal seizures that cause sensory symptoms, unusual perceptions, and often a sense of anxiety. Learn about the symptoms.",
          "url": "https://www.verywellhealth.com/temporal-lobe-epilepsy-signs-symptoms-6835519",
          "urlToImage": "https://www.verywellhealth.com/thmb/BiVbFj7k1sPoKWGZivaHGIbMkwI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1370881486-a172a23d8ef248d5a2e70d7d87e978c3.jpg",
          "publishedAt": "2022-12-12T15:21:27Z",
          "content": "In temporal lobe epilepsy, seizures begin in the brain's temporal lobe. The seizure episodes may result in diminished awareness or a complete lack of awareness, and they usually include unusual sensa… [+5360 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "India TV News"
          },
          "author": "Written by Health Desk",
          "title": "Diabetes: Foods and herbs that help control blood sugar level - India TV News",
          "description": "Diabetes is one of the most commonly found disorders affecting millions of people across the globe. Besides negatively impacting the blood sugar and insulin levels of the body, diabetes is the cause of the onset of a lot of other serious complications.",
          "url": "https://www.indiatvnews.com/health/diabetes-foods-herbs-that-help-control-blood-sugar-level-health-tips-2022-12-12-830712",
          "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/12/aqwdsdddssddhsxxdddddsd-1670856814.jpg",
          "publishedAt": "2022-12-12T14:54:14Z",
          "content": "Diabetes is one of the major threats that people are facing today across the globe. According to the International Diabetes Federation, approximately 537 million adults, aged between 20 and 79, are a… [+2540 chars]"
        },
        {
          "source": {
            "id": "medical-news-today",
            "name": "Medical News Today"
          },
          "author": "Robby Berman",
          "title": "Vegetable-rich diet vs diabetes risk: What role do potatoes play? - Medical News Today",
          "description": "A new study looking at dietary patterns suggests that the way in which people cook potatoes may play a role in increasing their diabetes risk.",
          "url": "https://www.medicalnewstoday.com/articles/potatoes-and-diabetes-risk-cooking-method-matters",
          "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/12/Potatoes_diabetes_Stocksy_txp931de2fblRa300_Medium_4387890_Thumb.jpg",
          "publishedAt": "2022-12-12T14:42:21Z",
          "content": "<ul><li>Previous research has not conclusively shown that eating a diet rich in vegetables reduced the risk of type 2 diabetes, as one might expect.</li><li>A new study suggest that this may be the r… [+5351 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Medical Dialogues"
          },
          "author": "Dr. Kamal Kant Kohli",
          "title": "Malaria can now be detected by needle-free light beam - Medical Dialogues",
          "description": "Researchers at University of Queensland have developed  a fast, needle-free malaria detection tool that  could help save hundreds of thousands of lives annually. According to research team this...",
          "url": "https://medicaldialogues.in/medicine/news/malaria-can-now-be-detected-by-needle-free-light-beam-103907",
          "urlToImage": "https://medicaldialogues.in/h-upload/2022/12/12/193537-untitled-design-2022-12-12t104832925.jpg",
          "publishedAt": "2022-12-12T14:30:55Z",
          "content": "Researchers at University of Queensland have developed a fast, needle-free malaria detection tool that could help save hundreds of thousands of lives annually. According to research team this technol… [+2535 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Medical Dialogues"
          },
          "author": "Medha Baranwal",
          "title": "Psychotropics use tied to lower risk of COVID-19 and related deaths, study says - Medical Dialogues",
          "description": "New research findings emphasise the protective effects of psychotropic medications on COVID-19 risk, particularly among older populations.China: A recent study published in European...",
          "url": "https://medicaldialogues.in/psychiatry/news/psychotropics-use-tied-to-lower-risk-of-covid-19-and-related-deaths-study-says-103904",
          "urlToImage": "https://medicaldialogues.in/h-upload/2022/12/12/193616-psychotropics.jpg",
          "publishedAt": "2022-12-12T14:30:25Z",
          "content": "New research findings emphasise the protective effects of psychotropic medications on COVID-19 risk, particularly among older populations.China: A recent study published in European Neuropsychopharma… [+2896 chars]"
        }
      ]

    science_article = [
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Bengaluru to witness dazzling Geminids showers. Here's how and where to watch | Mint - Mint",
          "description": "The Geminids showers will peak between 2 am and 3 am with over 100 meteors approaching earth",
          "url": "https://www.livemint.com/news/india/bengaluru-to-witness-dazzling-geminids-showers-here-s-how-and-where-to-watch-11670894911077.html",
          "urlToImage": "https://images.livemint.com/img/2022/12/13/600x338/Geminids_1670897583379_1670897583553_1670897583553.JPG",
          "publishedAt": "2022-12-13T02:14:12Z",
          "content": "Bengalurians are all set to witness an all-colourful dazzling sky in the early hours of Wednesday as the annual Geminid meteor shower is set to peak before dawn.  The Geminids showers will peak betwe… [+2096 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "EurekAlert"
          },
          "author": null,
          "title": "Understand anisotropy dependence of damage evolution and material removal during nanoscratch of MgF2 single crystals - EurekAlert",
          "description": "The research team, led by A/Prof. Chen Li from the State Key Laboratory of Robotics and System (HIT), Harbin Institute of Technology, China, has shown the anisotropy dependence of the damage evolution and removal behaviors involved in ultra-precision machinin…",
          "url": "https://www.eurekalert.org/news-releases/974110",
          "urlToImage": "https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/db044dcd-7d1a-4cb6-92fc-d97b58f1ed71/Rendition/thumbnail/Content/Public",
          "publishedAt": "2022-12-13T02:03:47Z",
          "content": "image: Schematic diagram of surface/subsurface damage and material removal behavior of MgF2 single crystal induced by nanoscratch, and distribution of normalized stress field in YOZ and XOZ planes wh… [+4845 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "James Webb shares pair of merging galaxies | AccuWeather - AccuWeather",
          "description": null,
          "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dau6YslYEzZ8",
          "urlToImage": null,
          "publishedAt": "2022-12-13T02:01:45Z",
          "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
          "source": {
            "id": null,
            "name": "Phys.Org"
          },
          "author": "Wendy Plump",
          "title": "Chemists create quantum dots at room temperature using lab-designed protein - Phys.org",
          "description": "Nature uses 20 canonical amino acids as building blocks to make proteins, combining their sequences to create complex molecules that perform biological functions.",
          "url": "https://phys.org/news/2022-12-chemists-quantum-dots-room-temperature.html",
          "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/chemists-create-quantu.jpg",
          "publishedAt": "2022-12-12T21:33:21Z",
          "content": "Nature uses 20 canonical amino acids as building blocks to make proteins, combining their sequences to create complex molecules that perform biological functions.\r\nBut what happens with the sequences… [+5341 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Business Insider India"
          },
          "author": "Grace Kay",
          "title": "NASA chief asks SpaceX president if Elon Musk is too distracted with Twitter - Business Insider India",
          "description": "Bill Nelson said he asked SpaceX President Gwynne Shotwell if Twitter would distract from SpaceX.The NASA administrator said Shotwell reassured him there was",
          "url": "https://www.businessinsider.in/tech/news/nasa-chief-asks-spacex-president-if-elon-musk-is-too-distracted-with-twitter/articleshow/96181485.cms",
          "urlToImage": "https://www.businessinsider.in/photo/96181485/nasa-chief-asks-spacex-president-if-elon-musk-is-too-distracted-with-twitter.jpg?imgsize=127312",
          "publishedAt": "2022-12-12T20:14:00Z",
          "content": "Even NASA has expressed concern over Elon Musk's chaotic Twitter takeover. \r\nNASA administrator Bill Nelson said on Sunday that he had asked SpaceX President Gwynne Shotwell whether Musk's Twitter ac… [+1851 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Phys.Org"
          },
          "author": "Matt Shipman",
          "title": "Fossil-sorting robots will help researchers study oceans and climate - Phys.org",
          "description": "Researchers have developed and demonstrated a robot capable of sorting, manipulating, and identifying microscopic marine fossils. The new technology automates a tedious process that plays a key role in advancing our understanding of the world's oceans and cli…",
          "url": "https://phys.org/news/2022-12-fossil-sorting-robots-oceans-climate.html",
          "urlToImage": "https://scx2.b-cdn.net/gfx/news/2022/fossil-sorting-robots.jpg",
          "publishedAt": "2022-12-12T19:44:39Z",
          "content": "Researchers have developed and demonstrated a robot capable of sorting, manipulating, and identifying microscopic marine fossils. The new technology automates a tedious process that plays a key role … [+4530 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "AP",
          "title": "Japanese company's lander rockets toward moon with UAE rover - HT Tech",
          "description": "It will take nearly five months for the lander and its experiments to reach the moon.",
          "url": "https://tech.hindustantimes.com/tech/news/japanese-company-s-lander-rockets-toward-moon-with-uae-rover-71670836459800.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/12/1600x900/Moon-Japan-UAE-7_1670869089931_1670869089931_1670869126480_1670869126480.jpg",
          "publishedAt": "2022-12-12T18:26:01Z",
          "content": "A Tokyo company aimed for the moon with its own private lander Sunday, blasting off atop a SpaceX rocket with the United Arab Emirates' first lunar rover and a toylike robot from Japan that's designe… [+4161 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Two Views of the Gas in the Southern Ring Nebula (NIRCam and MIRI Composite Images) - HubbleWebbESA",
          "description": null,
          "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLFMi9PtcRbM",
          "urlToImage": null,
          "publishedAt": "2022-12-12T17:57:50Z",
          "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
          "source": {
            "id": null,
            "name": "Abplive.com"
          },
          "author": "Radifah Kabir",
          "title": "Artemis I: NASA's Orion Returns To Earth. Know What's Next - ABP Live",
          "description": "Artemis I: NASA's Orion splashed down in the Pacific Ocean, west of Baja California, at 9:40 am PST (11:10 pm IST) on Sunday. The second leg of the Artemis Program is Artemis II, a crewed test flight.",
          "url": "https://news.abplive.com/science/artemis-i-nasa-orion-spacecraft-returns-to-earth-splashdown-know-what-is-next-artemis-ii-artemis-ii-moon-mission-1569167",
          "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/12/ccff216f6fa5980deae99454a1736eb91670867551185324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
          "publishedAt": "2022-12-12T17:48:38Z",
          "content": "Artemis I: NASA's Orion spacecraft returned to Earth safely on Sunday, December 12, after spending over 25 days in the harsh environment of deep space. Orion splashed down in the Pacific Ocean, west … [+4668 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Phys.Org"
          },
          "author": "Jeff Renaud",
          "title": "'Unexpected' space traveler defies theories about origin of solar system - Phys.org",
          "description": "Researchers from Western have shown that a fireball that originated at the edge of the solar system was likely made of rock, not ice, challenging long-held beliefs about how the solar system was formed.",
          "url": "https://phys.org/news/2022-12-unexpected-space-defies-theories-solar.html",
          "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2022/unexpected-space-trave.jpg",
          "publishedAt": "2022-12-12T17:44:31Z",
          "content": "Researchers from Western have shown that a fireball that originated at the edge of the solar system was likely made of rock, not ice, challenging long-held beliefs about how the solar system was form… [+4201 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Nature.com"
          },
          "author": null,
          "title": "The best science graphics of 2022 - Nature.com",
          "description": "From brain growth to COVID variants to vanishing trees, editors choose the charts and diagrams that define the year.",
          "url": "https://www.nature.com/articles/d41586-022-04174-6",
          "urlToImage": "https://media.nature.com/lw1024/magazine-assets/d41586-022-04174-6/d41586-022-04174-6_23814654.png",
          "publishedAt": "2022-12-12T15:01:08Z",
          "content": "Family of COVID variants expands\r\nIn 2022, the Omicron variant of SARS-CoV-2 spawned a soup of subvariants that made it harder to predict coming surges. The XBB variant and offshoots in the BQ.1 fami… [+4228 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Oldest DNA reveals life in Greenland two million years ago - TNIE Videos",
          "description": null,
          "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_tb3ndP3yNg",
          "urlToImage": null,
          "publishedAt": "2022-12-12T14:02:18Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Mystery Asteroid To Pass Earth Before Christmas. All You Need To Know - NDTV",
          "description": "According to the European Space Agency (ESA), this holiday season you may very well be able to spot an asteroid not larger than the Statue of Liberty, that is travelling towards the Earth.",
          "url": "https://www.ndtv.com/world-news/mystery-asteroid-to-pass-earth-before-christmas-all-you-need-to-know-3600026",
          "urlToImage": "https://c.ndtvimg.com/2022-12/g4ai9bno_asteroid-generic-650_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T13:25:21Z",
          "content": "Distance between the asteroid and Earth will be under two lunar distances. (Representational)\r\nSpace lovers are in for a treat this Christmas. According to the European Space Agency (ESA), this holid… [+1907 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Space.com"
          },
          "author": "Meghan Bartels",
          "title": "NASA may unlock future James Webb Space Telescope data - Space.com",
          "description": "NASA is considering changing a policy that locks away much of the James Webb Space Telescope's data for one year.",
          "url": "https://www.space.com/james-webb-space-telescope-exclusive-data-controversy",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/2nTWNHbqzaLkRH9UExEvmM-1200-80.jpg",
          "publishedAt": "2022-12-12T13:00:25Z",
          "content": "Someday, you may be able to see fresh data from the James Webb Space Telescope as soon as the scientists who proposed gathering it do.\r\nThe James Webb Space Telescope\r\n (Webb or JWST) stunned the wor… [+6314 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "James Webb Telescope sees faint starlight from galaxy clusters - The Hindu",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMifGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9zY2ktdGVjaC9zY2llbmNlL2phbWVzLXdlYmItdGVsZXNjb3BlLXNlZXMtZmFpbnQtc3RhcmxpZ2h0LWZyb20tZ2FsYXh5LWNsdXN0ZXJzL2FydGljbGU2NjIzMjc4Ni5lY2XSAYEBaHR0cHM6Ly93d3cudGhlaGluZHUuY29tL3NjaS10ZWNoL3NjaWVuY2UvamFtZXMtd2ViYi10ZWxlc2NvcGUtc2Vlcy1mYWludC1zdGFybGlnaHQtZnJvbS1nYWxheHktY2x1c3RlcnMvYXJ0aWNsZTY2MjMyNzg2LmVjZS9hbXAv?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-12-12T11:46:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Combination Of These Three Metals Is The Toughest Known Material On Earth - NDTV",
          "description": "The study was published by a team of scientists from Lawrence Berkeley National Laboratory (Berkeley Lab) and Oak Ridge National Laboratory, who described the findings as \"record-breaking\".",
          "url": "https://www.ndtv.com/science/combination-of-these-three-metals-is-the-toughest-known-material-on-earth-3599052",
          "urlToImage": "https://c.ndtvimg.com/2022-12/isacdgio_the-study-examined-the-fracture-toughness-values_625x300_12_December_22.jpg",
          "publishedAt": "2022-12-12T08:33:23Z",
          "content": "The study examined the fracture toughness values\r\nScientists investigated a metallic Alloy made of chromium, cobalt, and nickel (CrCoNi)and they found out that these three combinations have the highe… [+2741 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Devdiscourse"
          },
          "author": "Devdiscourse News Desk",
          "title": "Hubble snaps cosmic smokescreen around 4350 light-years from Earth - Devdiscourse",
          "description": "Read more about Hubble snaps cosmic smokescreen around 4350 light-years from Earth on Devdiscourse",
          "url": "https://www.devdiscourse.com/article/science-environment/2282847-hubble-snaps-cosmic-smokescreen-around-4350-light-years-from-earth",
          "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/12_12_2022_13_56_00_849072.jfif?width=920&format=jpeg",
          "publishedAt": "2022-12-12T08:26:50Z",
          "content": "This latest image from the NASA/ESA Hubble Space Telescope shows a portion of the open cluster NGC 6530, a collection of several thousand stars, that appears as a roiling wall of smoke studded with s… [+1669 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Artemis splashdown video: What does skip entry mean to bring capsule back to earth - ABC 7 Chicago",
          "description": null,
          "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-IdGhxxV3uM",
          "urlToImage": null,
          "publishedAt": "2022-12-12T04:38:46Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Thenewsmill.com"
          },
          "author": "ANI",
          "title": "Researchers suggest how animal herbivores hinder nitrogen fixation in tropical forests - TheNewsMill",
          "description": "The results of recent research into the restrictions on nitrogen-fixation\">nitrogen fixation among plants may help reforestation initiatives to be more successful.Some trees, like those in the Fabaceae family of legumes, have a symbiotic connection with bacte…",
          "url": "https://thenewsmill.com/2022/12/researchers-suggest-how-animal-herbivores-hinder-nitrogen-fixation-in-tropical-forests/",
          "urlToImage": "https://thenewsmill.com/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?is_home=0&is_front_page=0&object_type=post&post_id=57205&object_id=57205&img=https%253A%252F%252Fthenewsmill.com%252Fwp-content%252Fuploads%252F2022%252F12%252Fresearchers-suggest-how-animal-herbivores-hinder-nitrogen-fixation-in-tropical-forests.jpg",
          "publishedAt": "2022-12-12T03:31:47Z",
          "content": "The results of recent research into the restrictions on nitrogen-fixation”&gt;nitrogen fixation among plants may help reforestation initiatives to be more successful.Some trees, like those in the Fab… [+3286 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ANI News"
          },
          "author": null,
          "title": "Study reveals new ways microbes might help humans build colonies on Moon, Mars - ANI News",
          "description": "Researchers have come up with fresh ideas for how microbes might assist humans in establishing colonies on the moon and Mars in response to the biochemical process by which cyanobacteria in Chile's Atacama Desert obtain nutrients from rocks.",
          "url": "https://www.aninews.in/news/science/study-reveals-new-ways-microbes-might-help-humans-build-colonies-on-moon-mars20221212042654",
          "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221211225640.jpg",
          "publishedAt": "2022-12-11T22:56:00Z",
          "content": "Irvine (California) [US], December 12 (ANI): Researchers at the University of California, Irvine have been motivated to consider new ways that microbes can assist humans in colonising the Moon and Ma… [+4354 chars]"
        }
      ]

    technology_article =[
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "Garena Free Fire Redeem codes for December 13: Amazing Rare bundles ca be yours - HT Tech",
          "description": "Garena Free Fire Redeem codes for December 13: There is a wide range of in-game items to be won through these redeem codes. Know how to claim them.",
          "url": "https://tech.hindustantimes.com/how-to/garena-free-fire-redeem-codes-for-december-13-amazing-rare-bundles-ca-be-yours-71670899662159.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/13/1600x900/da962f98f04a1fe8c4a335c3f4fa90acj_1670899696337_1670899696519_1670899696519.jpg",
          "publishedAt": "2022-12-13T02:55:54Z",
          "content": "Garena Free Fire Redeem codes for December 13: Whether you are a sniper or a close combat expert, the fun part about Free Fire is that you can still master your skills and get to the top of the ladde… [+2521 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sportskeeda"
          },
          "author": "Spencer Whitworth",
          "title": "Can Walrein be shiny in Pokemon GO? (December 2022) - Sportskeeda",
          "description": "Walrein is the final evolution of Spheal and Sealeo in Pokemon GO. It has been a part of the game since 2017's Winter Holiday festivities.",
          "url": "https://www.sportskeeda.com/pokemon/can-walrein-shiny-pokemon-go-december-2022",
          "urlToImage": "https://staticg.sportskeeda.com/editor/2022/12/b5400-16708848540840-1920.jpg",
          "publishedAt": "2022-12-13T00:57:31Z",
          "content": "Walrein is the final evolution of Spheal and Sealeo in Pokemon GO. It has been a part of the game since 2017's Winter Holiday festivities. \r\nBeginning on December 15, 2022, Walrein will be seen much … [+3041 chars]"
        },
        {
          "source": {
            "id": "ign",
            "name": "IGN"
          },
          "author": "Rebekah Valentine",
          "title": "Microsoft's 10-Year Call of Duty Promise to Sony Would Reportedly Include PlayStation Plus - IGN",
          "description": "Microsoft has been making some big promises lately as it works to encourage regulators to permit its $69 billion acquistion of Activision Blizzard. Among those promises was a deal offered to Sony pledging that Call of Duty would remain available on PlayStatio…",
          "url": "https://www.ign.com/articles/microsofts-10-year-call-of-duty-promise-to-sony-would-reportedly-include-playstation-plus",
          "urlToImage": "https://assets-prd.ignimgs.com/2022/11/22/cod2-warzone-player-count-1669075445688.jpg?width=1280",
          "publishedAt": "2022-12-13T00:04:00Z",
          "content": "Microsoft has been making some big promises lately as it works to encourage regulators to permit its $69 billion acquistion of Activision Blizzard. Among those promises was a deal offered to Sony ple… [+1650 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "GSMArena.com"
          },
          "author": "Vlad",
          "title": "OnePlus 11R specs leak again alongside shots of the alert slider and IR blaster - GSMArena.com news - GSMArena.com",
          "description": "The phone is most likely launching soon.",
          "url": "https://www.gsmarena.com/oneplus_11r_specs_leak_again_alongside_shots_of_the_alert_slider_and_ir_blaster-news-56847.php",
          "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/12/oneplus-11r-specs-leak/-952x498w6/gsmarena_000.jpg",
          "publishedAt": "2022-12-12T23:21:45Z",
          "content": "The OnePlus 11R's specs have allegedly been outed today. It's not the first time something like this has happened - in fact, we've had a set of leaked specs for it ever since September. Presumably to… [+1363 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sportskeeda"
          },
          "author": "Siddharth Patil",
          "title": "10 best Nintendo Switch games of 2022 - Sportskeeda",
          "description": "2022 has been a great year for the Nintendo Switch. The Super Mario creator's hybrid gaming console has enjoyed massive success since its release in 2017, and the streak continues.",
          "url": "https://www.sportskeeda.com/esports/10-best-nintendo-switch-games-2022",
          "urlToImage": "https://staticg.sportskeeda.com/editor/2022/12/ffa23-16708525479590-1920.jpg",
          "publishedAt": "2022-12-12T23:20:53Z",
          "content": "2022 has been a great year for the Nintendo Switch. The Super Mario creator's hybrid gaming console has enjoyed massive success since its release in 2017, and the streak continues. From acclaimed AAA… [+5959 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Armored Core 6 Will Not Have Soulsborne Gameplay | GameSpot News - GameSpot",
          "description": "A bunch of Armored Core 6 gameplay details, Returnal's PC port requires a beefy rig, and Mr. Beast is giving 1 million dollars away via fortnite.#Gaming #Arm...",
          "url": "https://www.youtube.com/watch?v=ArWZ3vwkpFY",
          "urlToImage": "https://i.ytimg.com/vi/ArWZ3vwkpFY/maxresdefault.jpg",
          "publishedAt": "2022-12-12T23:15:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "LG's 240Hz OLED gaming monitors are set to release in January starting at $999 - XDA Developers",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiTGh0dHBzOi8vd3d3LnhkYS1kZXZlbG9wZXJzLmNvbS9sZy0yNDBoei1vbGVkLWdhbWluZy1tb25pdG9yLWphbnVhcnktcmVsZWFzZS_SAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-12-12T22:50:00Z",
          "content": null
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "OnePlus 10T finally receives Android 13, four months after the launch of both - Android Police",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiPWh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL29uZXBsdXMtMTB0LW94eWdlbm9zLTEzLXVwZGF0ZS_SAQA?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-12-12T21:12:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "The Sportsrush"
          },
          "author": "Adnan Juzar Kachwala",
          "title": "How to Unlock Gaz in Modern Warfare 2 and Warzone 2 - The Sportsrush",
          "description": "This article will show you a short and straightforward way to unlock Gaz in both Warzone 2 and Modern Warfare 2. Details below.",
          "url": "https://thesportsrush.com/how-to-unlock-gaz-in-modern-warfare-2-and-warzone-2/",
          "urlToImage": "https://cdn-wp.thesportsrush.com/2022/12/0b40eedd-call-of-duty-modern-warfare-2-characters.jpg",
          "publishedAt": "2022-12-12T20:44:20Z",
          "content": "This article will show you a short and straightforward way to unlock Gaz in both Warzone 2 and Modern Warfare 2. Details below.\r\nBefore we tackle the agent himself, we will know a little about his ba… [+1518 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Notebookcheck.net"
          },
          "author": "Sam Medley",
          "title": "Apple may pivot to OLED displays for 2024 iPad Pros and MacBook Air - Notebookcheck.net",
          "description": "According to Ross Young, CEO of Display Supply Chain Consultants, Apple will opt for OLED displays in both iPad Pro models and the MacBook Air in 2024. This would be a change for the 12.9-inch iPad Pro, which currently uses a mini-LED panel, and the MacBook A…",
          "url": "https://www.notebookcheck.net/Apple-may-pivot-to-OLED-displays-for-2024-iPad-Pros-and-MacBook-Air.674154.0.html",
          "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/iphone_14_pro_max_display_pixel_grid.png",
          "publishedAt": "2022-12-12T20:06:48Z",
          "content": "Just last year, Apple introduced an iPad Pro with mini-LED. The relatively new display technology gave the 12.9-inch tablet one of the best displays on the market, but Apple may soon abandon mini-LED… [+1540 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Notebookcheck.net"
          },
          "author": "Florian Glaser",
          "title": "The Callisto Protocol review: notebook and desktop benchmarks - Notebookcheck.net",
          "description": "Laptop and desktop benchmarks for the Callisto Protocol",
          "url": "https://www.notebookcheck.net/The-Callisto-Protocol-review-notebook-and-desktop-benchmarks.674016.0.html",
          "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/Games/Callisto/4_zu_3.jpg",
          "publishedAt": "2022-12-12T20:06:48Z",
          "content": "# started gpulist at www.notebookcheck.net took 0s on source +0s ... 0s\r\n#1 initialized values +0s ... 0s\r\n#2 cached gamecheck data found for bench uid 937 +0s ... 0s\r\n#3 Cache table found, checking … [+794 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "9to5google.com"
          },
          "author": "Ben Schoon",
          "title": "Xiaomi 13 goes official with Snapdragon 8 Gen 2, Leica cameras, and iPhone 14’s side rails - 9to5Google",
          "description": "While it won’t be launching globally for a bit, the Xiaomi 13 series has just been announced as one of the first devices with the Snapdragon 8 Gen 2. The Xiaomi 13 series consists of the standard Xiaomi 13 and the Xiaomi 13 Pro. The lower-end model is a flags…",
          "url": "https://9to5google.com/2022/12/12/xiaomi-13-launch/",
          "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/12/xiaomi-13-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2022-12-12T18:46:00Z",
          "content": "While it wont be launching globally for a bit, the Xiaomi 13 series has just been announced as one of the first devices with the Snapdragon 8 Gen 2.\r\nThe Xiaomi 13 series consists of the standard Xia… [+3012 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "ANI",
          "title": "In a Samsung first, upcoming Galaxy S23 series might support 8K@30fps video recordings - HT Tech",
          "description": "There already are many other smartphones recording 30fps videos at 4320p resolution, but this is going to be the first for a Samsung phone.",
          "url": "https://tech.hindustantimes.com/mobile/news/in-a-samsung-first-upcoming-galaxy-s23-series-might-support-8k-30fps-video-recordings-71670836495813.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/12/1600x900/DSC_1667_1_1670839219065_1670839219259_1670839219259.jpg",
          "publishedAt": "2022-12-12T18:32:52Z",
          "content": "South Korean tech giant Samsung's upcoming flagship smartphone, the Galaxy S23, has had plenty of rumours about it but now a new one has surfaced from a reliable source according to tech website GSM … [+1514 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "Special deal! Verizon offers iPhone 14 Plus with $539 discount and many FREEBIES - HT Tech",
          "description": "Verizon has rolled out this incredible deal on the Max-sized iPhone 14 Plus that offers a discount of $539 and a lot of freebies.",
          "url": "https://tech.hindustantimes.com/how-to/special-deal-verizon-offers-iphone-14-plus-with-539-discount-and-many-freebies-71670869457173.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/12/1600x900/IMG_5105_1666504341926_1670869746062_1670869746062.jpg",
          "publishedAt": "2022-12-12T18:29:37Z",
          "content": "The new iPhone 14 Plus is a safe bet for those who neither want a regular 6.1-screen display that is on the iPhone 14, nor do they want to spend a huge amount on the top-end iPhone 14 Pro Max. It com… [+1746 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Abplive.com"
          },
          "author": "ABP News Bureau",
          "title": "Passwords Are Passé? Google Passkeys Feature Added To Chrome. Know What They Can Do - ABP Live",
          "description": "Google has finally launched passkey support for Chrome Stable M108, after a few weeks of testing, in a bid to keep users safe.",
          "url": "https://news.abplive.com/technology/google-passkeys-chrome-passwords-phishing-fido-alliance-data-breach-1569233",
          "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/12/c5588e98baf8c1b7e105e507a14b77c81670849293585613_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
          "publishedAt": "2022-12-12T18:17:21Z",
          "content": "Google has finally launched passkey support for Chrome Stable M108, after a few weeks of testing, in a bid to keep users safe on the web. Backed by the FIDO Alliance and tech giants such as Google, A… [+2688 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Essentially Sports"
          },
          "author": null,
          "title": "Fortnite X MrBeast Skin: Release Date, Price, and Everything We Know About This ‘Much Awaited’ Collaboration in Chapter 4 Season 1 - EssentiallySports",
          "description": "The chapter 4 of Fortnite is underway. The much anticipated MrBeast collaboration will soon be available for the players.",
          "url": "https://www.essentiallysports.com/esports-news-fortnite-x-mrbeast-skin-release-date-price-and-everything-we-know-about-this-much-awaited-collaboration-in-chapter-4-season-1/",
          "urlToImage": "https://image-cdn.essentiallysports.com/wp-content/uploads/MrBeast-x-Fortnite-.jpg",
          "publishedAt": "2022-12-12T18:00:00Z",
          "content": "Fortnite is bringing epic collaborations as part of its ongoing chapter 4. The new season of the battle royale is action-packed with many new additions, including crazy dirt bikes, Oathbound chests, … [+2587 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Beebom"
          },
          "author": "Anmol Sachdeva",
          "title": "How to Link Your Riot and Xbox Game Pass Account - Beebom",
          "description": "To unlock all Valorant agents and LoL champions, here is a step-by-step guide on how to link your Riot account to your Xbox account.",
          "url": "https://beebom.com/how-link-riot-account-to-xbox-account/",
          "urlToImage": "https://beebom.com/wp-content/uploads/2022/12/how-to-link-riot-account-to-xbox-game-pass-account.jpg",
          "publishedAt": "2022-12-12T17:52:47Z",
          "content": "Two heavyweights in the gaming industry, Xbox and Riot Games announced their collaboration back in June 2022. The result of this new partnership is the addition of Riot’s titles to the Xbox Game Pass… [+5432 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sportskeeda"
          },
          "author": "Suryadeepto Sengupta",
          "title": "Witcher 3 Wild Hunt free next-gen update (4.0) patch notes - ray tracing, Ultra+ graphics, 4k texture, and more - Sportskeeda",
          "description": "CD Projekt Red is all set to release the free next-gen update for the Game of the Year award-winning title, Witcher 3 Wild Hunt, this Wednesday, December 14, 2022, at 1 AM CET.",
          "url": "https://www.sportskeeda.com/esports/news-witcher-3-wild-hunt-free-next-gen-update-4-0-patch-notes-ray-tracing-ultra-graphics-4k-texture",
          "urlToImage": "https://staticc.sportskeeda.com/editor/2022/12/0fac1-16708666659009-1920.jpg",
          "publishedAt": "2022-12-12T17:51:00Z",
          "content": "CD Projekt Red is all set to release the free next-gen update for the Game of the Year award-winning title, Witcher 3 Wild Hunt, this Wednesday, December 14, 2022, at 1 AM CET. The update will bring … [+8690 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "Buy Samsung Galaxy Z Flip 4, get £150 back and Disney+ for FREE - HT Tech",
          "description": "An interesting deal has been rolled out by Samsung! You can get £150 cashback and Disney+ subscription for free on buying Samsung Galaxy Z Flip 4. Here’s how.",
          "url": "https://tech.hindustantimes.com/how-to/buy-samsung-galaxy-z-flip-4-get-150-back-and-disney-for-free-71670866767299.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2022/12/12/1600x900/IMG_4518_1661609608302_1670866877630_1670866877630.jpg",
          "publishedAt": "2022-12-12T17:41:53Z",
          "content": "Several online retailers and big brands are coming up with fresh discounts and interesting deals to let you save big bucks this holiday season. Whether you are looking for a smartphone, a smartwatch,… [+1907 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Developer ports MIUI 14 to the Xiaomi Mi 6 - gizmochina",
          "description": null,
          "url": "https://news.google.com/__i/rss/rd/articles/CBMiUWh0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjIvMTIvMTIvZGV2ZWxvcGVyLXBvcnRzLW1pdWktMTQtdG8tdGhlLXhpYW9taS1taS02L9IBV2h0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjIvMTIvMTIvZGV2ZWxvcGVyLXBvcnRzLW1pdWktMTQtdG8tdGhlLXhpYW9taS1taS02Lz9hbXA9MQ?oc=5",
          "urlToImage": null,
          "publishedAt": "2022-12-12T17:36:47Z",
          "content": null
        }
      ]
   
    capital = (word) => word.charAt(0).toUpperCase() + word.slice(1);

     componentDidMount() {
      
          if(this.props.category === "sports"){  
          
            this.setState({
                articles: this.sporst_article
             });
             
             document.title =  "My News - " + this.capital(this.props.category); 
        }

        else if(this.props.category === "business"){
           
            this.setState({
                articles: this.business_article
             });
            
             document.title =  "My News - " + this.capital(this.props.category);
        }

        else if(this.props.category === "entertainment"){
            this.setState({
                articles: this.entertainment_article
             });
             document.title =  "My News - " + this.capital(this.props.category);
        }

        else if(this.props.category === "general"){
            this.setState({
                articles: this.general_article
             });
             document.title =  "My News - " + this.capital(this.props.category);
        }

        else if(this.props.category === "health"){
            this.setState({
                articles: this.health_article
             });
             document.title =  "My News - " + this.capital(this.props.category);
        }

        else {
            this.setState({
                articles: this.technology_article
             });
             document.title =  "My News - " + this.capital(this.props.category);
        }
        
    }
    
render() {
    return (
        <div className="container my-3">
            <h1 className="text-center" style={{margin:"80px 0px 20px",color:this.props.mode === "light"?"black":"white"}}>Top Headlines - {this.capital(this.props.category)}</h1>
            {this.state.loading && <Spinner1 />}
            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-xl-3 col-lg-4 col-sm-6 my-2" key={element.url}><Newsitem1 mode={this.props.mode} title={element.title ? element.title : "No title"} description={element.description ? element.description : "No description"} imageurl={element.urlToImage ? element.urlToImage : "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/xbqk3ztzzc8qu1sv_1670059150.jpeg"} newsurl={element.url} source={element.source.name} author={element.author?element.author:"unknown"} /></div>
                })}
            </div>
            
        </div>
    )
}
}

export default News;