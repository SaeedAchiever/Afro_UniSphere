import { View, Text } from 'react-native'

import vid1 from '../../assets/vids/vid1.mp4'
import vid2 from '../../assets/vids/vid2.mp4'
import vid3 from '../../assets/vids/vid3.mp4'
import vid4 from '../../assets/vids/vid4.mp4'
import vid5 from '../../assets/vids/vid5.mp4'

const Videolist = [
 {
  "id": "1",
  "title": "Saeed Random Words ",
  "description": "Me showing What I have been doing",
  "source": vid1,
  "poster_url": "https://example.com/images/campus_tour_poster.jpg",
  "username": "SaeedAchiever",
  "profile_pic": "https://example.com/images/john_doe.jpg",
  "upload_date": "2024-10-21T14:00:00Z",
  "views": 1500,
  "likes": [
    {
      "user_id": "liker_1",
      "username": "jane_smith"
    },
    {
      "user_id": "liker_2",
      "username": "mark_brown"
    },
    {
      "user_id": "liker_3",
      "username": "saeed_me"
    }
  ],
  "comments": [
    {
      "comment_id": "comment_one",
      "user_id": "user_comment",
      "username": "alice_walker",
      "text": "Bro that is the funniest thing some one hsa ever said",
      "comment_date": "2024-10-21T15:00:00Z",
      "likes": [
        {
          "user_id": "u2",
          "username": "jane_smith"
        }
      ],
      "replies": [
        {
          "reply_id": "r1",
          "user_id": "u5",
          "username": "michael_jordan",
          "text": "Oh yh this dude is killing it!!!",
          "reply_date": "2024-10-21T15:30:00Z",
          "likes": []
        }
      ]
    },
    {
     "comment_id": "comment_two",
     "user_id": "user_comment",
     "username": "jane_brown",
     "text": "I think you gott keep it up mahn ! ! ! ",
     "comment_date": "2024-10-21T15:00:00Z",
     "likes": [
       {
         "user_id": "u2",
         "username": "jane_smith"
       },
       {
        "user_id": "u2",
        "username": "amry"
      }
     ],
     "replies": []
   }
  ]
},
{
 "id": "2",
 "title": "Saeed Random Words",
 "description": "More Vdeos Islamic Videos",
 "source": vid2,
 "poster_url": "https://example.com/images/campus_tour_poster.jpg",
   "username": "jane_brown",
   "profile_pic": "https://example.com/images/john_doe.jpg",
 "upload_date": "2024-10-21T14:00:00Z",
 "views": 45,
 "likes": [
   {
     "user_id": "liker_1",
     "username": "jane_smith"
   },
   {
     "user_id": "liker_2",
     "username": "mark_brown"
   }
 ],
 "comments": [
   {
     "comment_id": "comment_one",
     "user_id": "user_comment",
     "username": "alice_walker",
     "text": "Funniest thing some one hsa ever said",
     "comment_date": "2024-10-21T15:00:00Z",
     "likes": [
       {
         "user_id": "u2",
         "username": "jane_smith"
       },
       {
        "user_id": "u2",
        "username": "yes"
      }
     ],
     "replies": [
       {
         "reply_id": "r1",
         "user_id": "u5",
         "username": "michael_jordan",
         "text": "Oh yh",
         "reply_date": "2024-10-21T15:30:00Z",
         "likes": []
       }
     ]
   }
 ]
},
{
 "id": "3",
 "title": "Saeed Random Words",
 "description": "Gates of Jannah",
 "source": vid3,
 "poster_url": "https://example.com/images/campus_tour_poster.jpg",
   "username": "knusthome",
   "profile_pic": "https://example.com/images/john_doe.jpg",
 "upload_date": "2024-10-21T14:00:00Z",
 "views": 495,
 "likes": [
   {
     "user_id": "liker_1",
     "username": "jane_smith"
   },
   {
     "user_id": "liker_2",
     "username": "mark_brown"
   }
 ],
 "comments": [
   {
     "comment_id": "comment_one",
     "user_id": "user_comment",
     "username": "alice_walker",
     "text": "Funniest thing some one hsa ever said",
     "comment_date": "2024-10-21T15:00:00Z",
     "likes": [
       {
         "user_id": "u2",
         "username": "jane_smith"
       },
       {
        "user_id": "u2",
        "username": "yes"
      }
     ],
     "replies": [
       {
         "reply_id": "r1",
         "user_id": "u5",
         "username": "michael_jordan",
         "text": "Oh yh",
         "reply_date": "2024-10-21T15:30:00Z",
         "likes": []
       }
     ]
   }
 ]
},
{
 "id": "4",
 "title": "Saeed Random Words",
 "description": "Elon roasting nasty question",
 "source": vid4,
 "poster_url": "https://example.com/images/campus_tour_poster.jpg",
   "username": "musk",
   "profile_pic": "https://example.com/images/john_doe.jpg",
 "upload_date": "2024-10-21T14:00:00Z",
 "views": 2302,
 "likes": [
   {
     "user_id": "liker_1",
     "username": "jane_smith"
   },
   {
     "user_id": "liker_2",
     "username": "mark_brown"
   }
 ],
 "comments": [
   {
     "comment_id": "comment_one",
     "user_id": "user_comment",
     "username": "alice_walker",
     "text": "Funniest thing some one hsa ever said",
     "comment_date": "2024-10-21T15:00:00Z",
     "likes": [
       {
         "user_id": "u2",
         "username": "jane_smith"
       },
       {
        "user_id": "u2",
        "username": "yes"
      }
     ],
     "replies": [
       {
         "reply_id": "r1",
         "user_id": "u5",
         "username": "michael_jordan",
         "text": "Oh yh",
         "reply_date": "2024-10-21T15:30:00Z",
         "likes": []
       }
     ]
   }
 ]
},
{
 "id": "5",
 "title": "Saeed Random Words",
 "description": "Last Islamic Video",
 "source": vid5,
 "poster_url": "https://example.com/images/campus_tour_poster.jpg",
 "username": "acity",
 "profile_pic": "https://example.com/images/john_doe.jpg",
 "upload_date": "2024-10-21T14:00:00Z",
 "views": 21,
 "likes": [
   {
     "user_id": "liker_1",
     "username": "jane_smith"
   },
   {
     "user_id": "liker_2",
     "username": "mark_brown"
   }
 ],
 "comments": [
   {
     "comment_id": "comment_one",
     "user_id": "user_comment",
     "username": "alice_walker",
     "text": "Funniest thing some one hsa ever said",
     "comment_date": "2024-10-21T15:00:00Z",
     "likes": [
       {
         "user_id": "u2",
         "username": "jane_smith"
       },
       {
        "user_id": "u2",
        "username": "yes"
      }
     ],
     "replies": [
       {
         "reply_id": "r1",
         "user_id": "u5",
         "username": "michael_jordan",
         "text": "Oh yh",
         "reply_date": "2024-10-21T15:30:00Z",
         "likes": []
       }
     ]
   }
 ]
}
]

export default Videolist