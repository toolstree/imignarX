const QUESTIONS = [

{
id:1,
category:"Money",
question:"A mysterious $50,000 appears in your account. What's your first move?",
answers:[
{
text:"Invest it into something that grows.",
scores:{ analyzer:2, learnEarn:1 }
},
{
text:"Launch a business immediately.",
scores:{ learnEarn:2, creator:1 }
},
{
text:"Help family and close friends.",
scores:{ heartkeeper:2, freeSpirit:1 }
},
{
text:"Book a ticket somewhere exciting.",
scores:{ explorer:2, freeSpirit:1 }
}
]
},
{
id:2,
category:"Internet Culture",
question:"Your screen-time report arrives. You...",
answers:[
{
text:"Analyze where every hour went.",
scores:{ analyzer:2 }
},
{
text:"Ignore it and keep scrolling.",
scores:{ explorer:2 }
},
{
text:"Wonder who you spent time talking to.",
scores:{ heartkeeper:2 }
},
{
text:"Ask how to turn those hours into income.",
scores:{ learnEarn:2 }
}
]
},
{
id:3,
category:"Humor",
question:"Aliens arrive and ask to speak with humanity's manager.",
answers:[
{
text:"Request the meeting agenda first.",
scores:{ analyzer:2 }
},
{
text:"Offer them tea and snacks.",
scores:{ heartkeeper:2 }
},
{
text:"Ask if they have business opportunities.",
scores:{ learnEarn:2 }
},
{
text:"Ask if they need a tour guide.",
scores:{ explorer:2 }
}
]
},
{
id:4,
category:"Life",
question:"You accidentally become world-famous overnight.",
answers:[
{
text:"Protect your privacy immediately.",
scores:{ dominator:2 }
},
{
text:"Study how it happened.",
scores:{ analyzer:2 }
},
{
text:"Check if loved ones are okay.",
scores:{ heartkeeper:2 }
},
{
text:"Use it to explore new experiences.",
scores:{ explorer:2 }
}
]
},
{
id:5,
category:"Sports",
question:"Your team loses a championship in the final seconds.",
answers:[
{
text:"Analyze every mistake.",
scores:{ analyzer:2 }
},
{
text:"Train harder next time.",
scores:{ dominator:2 }
},
{
text:"Support the players anyway.",
scores:{ heartkeeper:2 }
},
{
text:"Move on to the next adventure.",
scores:{ explorer:2 }
}
]
},
{
id:6,
category:"AI",
question:"An AI offers to do 90% of your work.",
answers:[
{
text:"Ask how it works.",
scores:{ analyzer:2 }
},
{
text:"Ask how to monetize it.",
scores:{ learnEarn:2 }
},
{
text:"Ask how it affects people.",
scores:{ heartkeeper:2 }
},
{
text:"Ask it to surprise you.",
scores:{ explorer:2 }
}
]
},
{
id:7,
category:"Relationships",
question:"A friend calls at 2AM asking for help.",
answers:[
{
text:"Pick up instantly.",
scores:{ heartkeeper:2 }
},
{
text:"Help but set boundaries.",
scores:{ dominator:2 }
},
{
text:"Understand the root problem first.",
scores:{ analyzer:2 }
},
{
text:"Suggest a fresh perspective.",
scores:{ freeSpirit:2 }
}
]
},
{
id:8,
category:"Humor",
question:"A duck offers you $1 million if you never use social media again.",
answers:[
{
text:"Deal accepted.",
scores:{ analyzer:2 }
},
{
text:"Can I negotiate?",
scores:{ learnEarn:2 }
},
{
text:"What happens to my friends?",
scores:{ heartkeeper:2 }
},
{
text:"Depends on the duck.",
scores:{ explorer:2 }
}
]
},
{
id:9,
category:"Career",
question:"You get a surprise day off.",
answers:[
{
text:"Plan and optimize life.",
scores:{ analyzer:2 }
},
{
text:"Build something useful.",
scores:{ creator:2 }
},
{
text:"Spend time with loved ones.",
scores:{ heartkeeper:2 }
},
{
text:"Go somewhere new.",
scores:{ explorer:2 }
}
]
},
{
id:10,
category:"Humor",
question:"You discover your pet secretly has a PhD.",
answers:[
{
text:"Ask what it studied.",
scores:{ analyzer:2 }
},
{
text:"Ask it to help make money.",
scores:{ learnEarn:2 }
},
{
text:"Tell nobody and protect it.",
scores:{ heartkeeper:2 }
},
{
text:"Ask it for life advice.",
scores:{ freeSpirit:2 }
}
]
},
{
id:11,
category:"Productivity",
question:"You open your laptop intending to work. Five minutes later you're watching videos about ancient civilizations.",
answers:[
{
text:"I return to work immediately.",
scores:{ dominator:2 }
},
{
text:"I justify it as research.",
scores:{ analyzer:2 }
},
{
text:"I send the video to friends.",
scores:{ heartkeeper:2 }
},
{
text:"I watch the entire documentary.",
scores:{ explorer:2 }
}
]
},
{
id:12,
category:"Money",
question:"Someone offers you a guaranteed $500 today or a chance at $5,000 next month.",
answers:[
{
text:"Take the guaranteed money.",
scores:{ analyzer:2 }
},
{
text:"Take the bigger opportunity.",
scores:{ explorer:2 }
},
{
text:"Depends on who else benefits.",
scores:{ heartkeeper:2 }
},
{
text:"Can I turn either into more income?",
scores:{ learnEarn:2 }
}
]
},
{
id:13,
category:"Humor",
question:"You wake up and discover every person now has a visible battery percentage above their head.",
answers:[
{
text:"Study how it works.",
scores:{ analyzer:2 }
},
{
text:"Recharge everybody.",
scores:{ heartkeeper:2 }
},
{
text:"Find the highest performers.",
scores:{ dominator:2 }
},
{
text:"Travel and observe humanity.",
scores:{ explorer:2 }
}
]
},
{
id:14,
category:"Sports",
question:"Your favorite team reaches the World Cup final.",
answers:[
{
text:"Analyze tactics for hours.",
scores:{ analyzer:2 }
},
{
text:"Organize a viewing party.",
scores:{ heartkeeper:2 }
},
{
text:"Predict outcomes and trends.",
scores:{ learnEarn:2 }
},
{
text:"Just enjoy the spectacle.",
scores:{ explorer:2 }
}
]
},
{
id:15,
category:"Internet",
question:"You accidentally go viral overnight.",
answers:[
{
text:"Build a personal brand.",
scores:{ creator:2 }
},
{
text:"Monetize the attention.",
scores:{ learnEarn:2 }
},
{
text:"Thank everyone who supported me.",
scores:{ heartkeeper:2 }
},
{
text:"Disappear and confuse people.",
scores:{ freeSpirit:2 }
}
]
},
{
id:16,
category:"Life",
question:"You get a free one-way ticket anywhere.",
answers:[
{
text:"Choose the smartest location.",
scores:{ analyzer:2 }
},
{
text:"Choose somewhere meaningful.",
scores:{ heartkeeper:2 }
},
{
text:"Choose somewhere profitable.",
scores:{ learnEarn:2 }
},
{
text:"Choose somewhere completely unknown.",
scores:{ explorer:2 }
}
]
},
{
id:17,
category:"Humor",
question:"A genie grants one wish but judges your creativity.",
answers:[
{
text:"Request wisdom.",
scores:{ analyzer:2 }
},
{
text:"Request happiness for loved ones.",
scores:{ heartkeeper:2 }
},
{
text:"Request unlimited opportunities.",
scores:{ learnEarn:2 }
},
{
text:"Request a dragon.",
scores:{ explorer:2 }
}
]
},
{
id:18,
category:"AI",
question:"A robot becomes your assistant for life.",
answers:[
{
text:"Optimize everything.",
scores:{ analyzer:2 }
},
{
text:"Use it to grow income.",
scores:{ learnEarn:2 }
},
{
text:"Use it to help people.",
scores:{ heartkeeper:2 }
},
{
text:"Use it for adventures.",
scores:{ explorer:2 }
}
]
},
{
id:19,
category:"Productivity",
question:"You have 100 unfinished ideas.",
answers:[
{
text:"Rank them logically.",
scores:{ analyzer:2 }
},
{
text:"Start another one.",
scores:{ explorer:2 }
},
{
text:"Ask others what they need.",
scores:{ heartkeeper:2 }
},
{
text:"Pick the most profitable.",
scores:{ learnEarn:2 }
}
]
},
{
id:20,
category:"Humor",
question:"A time traveler warns you not to make one mistake tomorrow.",
answers:[
{
text:"Demand more details.",
scores:{ analyzer:2 }
},
{
text:"Ask if loved ones are safe.",
scores:{ heartkeeper:2 }
},
{
text:"Ask how to benefit from this.",
scores:{ learnEarn:2 }
},
{
text:"Ignore the warning and see what happens.",
scores:{ explorer:2 }
}
]
},
{
id:21,
category:"Creator Economy",
question:"You gain 100,000 followers overnight. What's your first thought?",
answers:[
{
text:"How can I create consistently for them?",
scores:{ creator:2, learnEarn:1 }
},
{
text:"What caused the growth?",
scores:{ analyzer:2 }
},
{
text:"How can I help this community?",
scores:{ heartkeeper:2 }
},
{
text:"This is exciting but also a little weird.",
scores:{ freeSpirit:2 }
}
]
},
{
id:22,
category:"Humor",
question:"You discover that every coffee you drink adds one extra hour to your day.",
answers:[
{
text:"Optimize my schedule immediately.",
scores:{ analyzer:2 }
},
{
text:"Build something amazing.",
scores:{ creator:2 }
},
{
text:"Spend more time with people I love.",
scores:{ heartkeeper:2 }
},
{
text:"Explore everything possible.",
scores:{ explorer:2 }
}
]
},
{
id:23,
category:"Life",
question:"You can instantly master one skill.",
answers:[
{
text:"Leadership.",
scores:{ dominator:2 }
},
{
text:"Strategic thinking.",
scores:{ analyzer:2 }
},
{
text:"Communication.",
scores:{ creator:2 }
},
{
text:"Inner peace.",
scores:{ freeSpirit:2 }
}
]
},
{
id:24,
category:"Internet",
question:"An algorithm offers to make you famous in 30 days.",
answers:[
{
text:"Let's study the mechanics first.",
scores:{ analyzer:2 }
},
{
text:"Let's build a brand.",
scores:{ creator:2 }
},
{
text:"Let's use it for good.",
scores:{ heartkeeper:2 }
},
{
text:"Let's see where it takes me.",
scores:{ explorer:2 }
}
]
},
{
id:25,
category:"Humor",
question:"A penguin becomes your life coach.",
answers:[
{
text:"Ask for its productivity system.",
scores:{ analyzer:2 }
},
{
text:"Turn it into a content channel.",
scores:{ creator:2 }
},
{
text:"Become best friends.",
scores:{ heartkeeper:2 }
},
{
text:"Follow it to Antarctica.",
scores:{ explorer:2 }
}
]
},
{
id:26,
category:"Mindset",
question:"People describe you as...",
answers:[
{
text:"Driven.",
scores:{ dominator:2 }
},
{
text:"Thoughtful.",
scores:{ analyzer:2 }
},
{
text:"Creative.",
scores:{ creator:2 }
},
{
text:"Free-spirited.",
scores:{ freeSpirit:2 }
}
]
},
{
id:27,
category:"Humor",
question:"You wake up with the ability to pause time.",
answers:[
{
text:"Study everything.",
scores:{ analyzer:2 }
},
{
text:"Create incredible projects.",
scores:{ creator:2 }
},
{
text:"Help people anonymously.",
scores:{ heartkeeper:2 }
},
{
text:"Travel the world for free.",
scores:{ explorer:2 }
}
]
},
{
id:28,
category:"Creator Economy",
question:"Your content gets zero views for a month.",
answers:[
{
text:"Review analytics.",
scores:{ analyzer:2 }
},
{
text:"Keep creating anyway.",
scores:{ creator:2 }
},
{
text:"Ask the audience what they need.",
scores:{ heartkeeper:2 }
},
{
text:"Experiment with a completely new style.",
scores:{ freeSpirit:2 }
}
]
},
{
id:29,
category:"Life",
question:"You have one year completely free of obligations.",
answers:[
{
text:"Build a system for life.",
scores:{ analyzer:2 }
},
{
text:"Create something meaningful.",
scores:{ creator:2 }
},
{
text:"Heal and grow.",
scores:{ freeSpirit:2 }
},
{
text:"Travel everywhere.",
scores:{ explorer:2 }
}
]
},
{
id:30,
category:"Humor",
question:"A squirrel offers you a business partnership.",
answers:[
{
text:"Review the proposal.",
scores:{ analyzer:2 }
},
{
text:"Market the squirrel.",
scores:{ creator:2 }
},
{
text:"Ask about its dreams.",
scores:{ heartkeeper:2 }
},
{
text:"Accept immediately.",
scores:{ explorer:2 }
}
]
},
{
id:31,
category:"AI",
question:"An AI predicts your future with 99% accuracy.",
answers:[
{
text:"Verify the methodology.",
scores:{ analyzer:2 }
},
{
text:"Use it to gain an advantage.",
scores:{ learnEarn:2 }
},
{
text:"Ask how it affects people I care about.",
scores:{ heartkeeper:2 }
},
{
text:"Refuse to look and enjoy the mystery.",
scores:{ freeSpirit:2 }
}
]
},
{
id:32,
category:"Humor",
question:"You can instantly learn every language on Earth.",
answers:[
{
text:"Study ancient knowledge.",
scores:{ analyzer:2 }
},
{
text:"Build a global audience.",
scores:{ creator:2 }
},
{
text:"Connect with more people.",
scores:{ heartkeeper:2 }
},
{
text:"Travel endlessly.",
scores:{ explorer:2 }
}
]
},
{
id:33,
category:"Future",
question:"You receive a message from yourself 10 years ahead.",
answers:[
{
text:"Analyze every word.",
scores:{ analyzer:2 }
},
{
text:"Ask about opportunities.",
scores:{ learnEarn:2 }
},
{
text:"Ask about relationships.",
scores:{ heartkeeper:2 }
},
{
text:"Ask if life stayed interesting.",
scores:{ explorer:2 }
}
]
},
{
id:34,
category:"Creator Economy",
question:"Your content suddenly reaches one million people.",
answers:[
{
text:"Study what worked.",
scores:{ analyzer:2 }
},
{
text:"Create even better content.",
scores:{ creator:2 }
},
{
text:"Use the attention responsibly.",
scores:{ heartkeeper:2 }
},
{
text:"Experiment with something crazy.",
scores:{ freeSpirit:2 }
}
]
},
{
id:35,
category:"Humor",
question:"Every time you sneeze, $10 appears.",
answers:[
{
text:"Calculate annual earnings.",
scores:{ analyzer:2 }
},
{
text:"Scale the opportunity.",
scores:{ learnEarn:2 }
},
{
text:"Donate some of it.",
scores:{ heartkeeper:2 }
},
{
text:"Try to break the universe.",
scores:{ explorer:2 }
}
]
},
{
id:36,
category:"Sports",
question:"You're coaching a World Cup final team.",
answers:[
{
text:"Focus on strategy.",
scores:{ analyzer:2 }
},
{
text:"Inspire confidence.",
scores:{ dominator:2 }
},
{
text:"Build team unity.",
scores:{ heartkeeper:2 }
},
{
text:"Try an unexpected tactic.",
scores:{ explorer:2 }
}
]
},
{
id:37,
category:"Internet",
question:"The internet disappears for 30 days.",
answers:[
{
text:"Read and learn.",
scores:{ analyzer:2 }
},
{
text:"Create something offline.",
scores:{ creator:2 }
},
{
text:"Spend time with loved ones.",
scores:{ heartkeeper:2 }
},
{
text:"Enjoy the peace.",
scores:{ freeSpirit:2 }
}
]
},
{
id:38,
category:"Humor",
question:"You discover your future self left you a treasure map.",
answers:[
{
text:"Analyze clues carefully.",
scores:{ analyzer:2 }
},
{
text:"Document the journey.",
scores:{ creator:2 }
},
{
text:"Bring friends along.",
scores:{ heartkeeper:2 }
},
{
text:"Start immediately.",
scores:{ explorer:2 }
}
]
},
{
id:39,
category:"Mindset",
question:"Your biggest motivation usually comes from...",
answers:[
{
text:"Achievement.",
scores:{ dominator:2 }
},
{
text:"Understanding.",
scores:{ analyzer:2 }
},
{
text:"Impact.",
scores:{ creator:2 }
},
{
text:"Freedom.",
scores:{ freeSpirit:2 }
}
]
},
{
id:40,
category:"Humor",
question:"A dragon offers to become your roommate.",
answers:[
{
text:"Establish house rules.",
scores:{ analyzer:2 }
},
{
text:"Start a channel about it.",
scores:{ creator:2 }
},
{
text:"Make it feel welcome.",
scores:{ heartkeeper:2 }
},
{
text:"Ask it to take me flying.",
scores:{ explorer:2 }
}
]
},
{
id:41,
category:"Life",
question:"You receive a completely free year with all expenses paid.",
answers:[
{
text:"Build a powerful system for my future.",
scores:{ analyzer:2, learnEarn:1 }
},
{
text:"Create my dream project.",
scores:{ creator:2, dominator:1 }
},
{
text:"Reconnect with people who matter.",
scores:{ heartkeeper:2 }
},
{
text:"Travel wherever curiosity leads.",
scores:{ explorer:2, freeSpirit:1 }
}
]
},
{
id:42,
category:"Humor",
question:"A billionaire offers to mentor you personally.",
answers:[
{
text:"Learn their decision-making framework.",
scores:{ analyzer:2 }
},
{
text:"Learn how they built wealth.",
scores:{ learnEarn:2 }
},
{
text:"Learn how they treat people.",
scores:{ heartkeeper:2 }
},
{
text:"Learn their wildest life stories.",
scores:{ explorer:2 }
}
]
},
{
id:43,
category:"Creator Economy",
question:"You can create one thing that millions will see.",
answers:[
{
text:"A practical guide.",
scores:{ analyzer:2 }
},
{
text:"A profitable digital business.",
scores:{ learnEarn:2 }
},
{
text:"A message that helps people.",
scores:{ heartkeeper:2 }
},
{
text:"Something completely original.",
scores:{ creator:2 }
}
]
},
{
id:44,
category:"Future",
question:"You can see one statistic about your future.",
answers:[
{
text:"Success rate.",
scores:{ dominator:2 }
},
{
text:"Net worth.",
scores:{ learnEarn:2 }
},
{
text:"Number of lives impacted.",
scores:{ heartkeeper:2 }
},
{
text:"Places visited.",
scores:{ explorer:2 }
}
]
},
{
id:45,
category:"Humor",
question:"You discover your future self has become famous.",
answers:[
{
text:"For leadership.",
scores:{ dominator:2 }
},
{
text:"For expertise.",
scores:{ analyzer:2 }
},
{
text:"For helping others.",
scores:{ heartkeeper:2 }
},
{
text:"For something unexpected.",
scores:{ explorer:2 }
}
]
},
{
id:46,
category:"Mindset",
question:"Which phrase sounds most like you?",
answers:[
{
text:"Let's get it done.",
scores:{ dominator:2 }
},
{
text:"Let's understand it first.",
scores:{ analyzer:2 }
},
{
text:"Let's help everyone involved.",
scores:{ heartkeeper:2 }
},
{
text:"Let's see where this goes.",
scores:{ explorer:2 }
}
]
},
{
id:47,
category:"Internet",
question:"Your ideal online life would be...",
answers:[
{
text:"Efficient and optimized.",
scores:{ analyzer:2 }
},
{
text:"Profitable and scalable.",
scores:{ learnEarn:2 }
},
{
text:"Meaningful and connected.",
scores:{ heartkeeper:2 }
},
{
text:"Creative and expressive.",
scores:{ creator:2 }
}
]
},
{
id:48,
category:"Humor",
question:"You inherit a castle with one unusual rule.",
answers:[
{
text:"Study the history first.",
scores:{ analyzer:2 }
},
{
text:"Turn it into a business.",
scores:{ learnEarn:2 }
},
{
text:"Invite friends and family.",
scores:{ heartkeeper:2 }
},
{
text:"Explore every hidden room.",
scores:{ explorer:2 }
}
]
},
{
id:49,
category:"Life",
question:"People often come to you for...",
answers:[
{
text:"Direction.",
scores:{ dominator:2 }
},
{
text:"Advice.",
scores:{ analyzer:2 }
},
{
text:"Support.",
scores:{ heartkeeper:2 }
},
{
text:"Ideas.",
scores:{ creator:2 }
}
]
},
{
id:50,
category:"Final",
question:"What would make your future self proudest?",
answers:[
{
text:"Becoming stronger.",
scores:{ dominator:2 }
},
{
text:"Becoming wiser.",
scores:{ analyzer:2 }
},
{
text:"Helping others thrive.",
scores:{ heartkeeper:2 }
},
{
text:"Living fully and boldly.",
scores:{ explorer:2, freeSpirit:1 }
}
]
}

];

];
