const DummyData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '0 Cool Event',
      image: 'https://picsum.photos/200/300',
      eventDetails: "This is Chewbacca. He's first-mate on a ship that might suit our needs. I don't like the look of this. Han Solo. I'm captain of the Millennium Falcon. Chewie here tells me you're looking for passage to the Alderaan system. Yes, indeed. If it's a fast ship. Fast ship?",
      latitude: 30.062003, 
      longitude: -97.837021,
      date: Date.now() * Math.random()
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '1 Cool Event',
      image: 'https://picsum.photos/200/300',
      eventDetails: "Luke! Luke! Luke! Luke! Luke, Luke, grab a hold of this. Blast it, will you! My gun's jammed. Where? Anywhere! Oh!! Luke! Luke! Grab him! What happened? I've got a very bad feeling about this. The walls are moving! Don't just stand there. Try to brace it with something. Wait a minute! Threepio! Come in Threepio! Threepio! Where could he be?",
      latitude: 30.096763,  
      longitude: -97.889184,
      date: Date.now() * Math.random()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '2 Cool Event',
      image: 'https://picsum.photos/200/300',
      eventDetails: "We don't serve their kind here! What? Your droids. They'll have to wait outside. We don't want them here. Listen, why don't you wait out by the speeder. We don't want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? ",
      latitude: 30.118635,  
      longitude: -97.817010,
      date: Date.now() * Math.random()
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
      title: '3 Cool Event',
      image: 'https://picsum.photos/200/300',
      eventDetails: "The ship's all yours. If the scanners pick up anything, report it immediately. All right, let's go. Hey down there, could you give us a hand with this? TX-four-one-two. Why aren't you at your post? TX-four-one-two, do you copy?",
      latitude: 30.118932,  
      longitude: -97.870545,
      date: Date.now() * Math.random()
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fd91aa97f63',
      title: '4 Cool Event',
      image: 'https://picsum.photos/200/300',
      eventDetails: "Close up formation. You'd better let her loose. Almost there! I can't hold them! It's away! It's a hit! Negative. Negative! It didn't go in. It just impacted on the surface. Red Leader, we're right above you. Turn to point... oh-five, we'll cover for you. Stay there... I just lost my starboard engine. Get set to make your attack run.",
      latitude: 30.148872,  
      longitude: -97.833187,
      date: Date.now() * Math.random()
    },
    {
      id: '58694a0f-3da1-471f-bd96-144571e29d72',
      title: '5 Cool Event',
      image: 'https://picsum.photos/200/300',
      eventDetails: "This time, let go your conscious self and act on instinct. With the blast shield down, I can't even see. How am I supposed to fight? Your eyes can deceive you. Don't trust them.",
      latitude: 30.0852135,  
      longitude: -97.8402827,
      date: Date.now() * Math.random()
    },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab4b28ba',
    title: '6 Cool Event',
    image: 'https://picsum.photos/200/300',
    eventDetails: "This is Chewbacca. He's first-mate on a ship that might suit our needs. I don't like the look of this. Han Solo. I'm captain of the Millennium Falcon. Chewie here tells me you're looking for passage to the Alderaan system. Yes, indeed. If it's a fast ship. Fast ship?",
    latitude: 30.062003,
    longitude: -99.837021,
    date: Date.now() * Math.random()
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd391aa97f63',
    title: '7 Cool Event',
    image: 'https://picsum.photos/200/300',
    eventDetails: "Luke! Luke! Luke! Luke! Luke, Luke, grab a hold of this. Blast it, will you! My gun's jammed. Where? Anywhere! Oh!! Luke! Luke! Grab him! What happened? I've got a very bad feeling about this. The walls are moving! Don't just stand there. Try to brace it with something. Wait a minute! Threepio! Come in Threepio! Threepio! Where could he be?",
    latitude: 30.096763,
    longitude: -98.889184,
    date: Date.now() * Math.random()
  },
  {
    id: '58694a0f-3da1-471f-bd96-1345571e29d72',
    title: '8 Cool Event',
    image: 'https://picsum.photos/200/300',
    eventDetails: "We don't serve their kind here! What? Your droids. They'll have to wait outside. We don't want them here. Listen, why don't you wait out by the speeder. We don't want any trouble. I heartily agree with you sir. Negola dewaghi wooldugger?!? ",
    latitude: 30.118635,
    longitude: -96.817010,
    date: Date.now() * Math.random()
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad533ab28ba',
    title: '9 Cool Event',
    image: 'https://picsum.photos/200/300',
    eventDetails: "The ship's all yours. If the scanners pick up anything, report it immediately. All right, let's go. Hey down there, could you give us a hand with this? TX-four-one-two. Why aren't you at your post? TX-four-one-two, do you copy?",
    latitude: 30.118932,
    longitude: -95.870545,
    date: Date.now() * Math.random()
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fd91aa497f63',
    title: '10 Cool Event',
    image: 'https://picsum.photos/200/300',
    eventDetails: "Close up formation. You'd better let her loose. Almost there! I can't hold them! It's away! It's a hit! Negative. Negative! It didn't go in. It just impacted on the surface. Red Leader, we're right above you. Turn to point... oh-five, we'll cover for you. Stay there... I just lost my starboard engine. Get set to make your attack run.",
    latitude: 30.148872,
    longitude: -94.833187,
    date: Date.now() * Math.random()
  },
  {
    id: '58694a0f-3da1-471f-bd96-14571e295d72',
    title: '11 Cool Event',
    image: 'https://picsum.photos/200/300',
    eventDetails: "This time, let go your conscious self and act on instinct. With the blast shield down, I can't even see. How am I supposed to fight? Your eyes can deceive you. Don't trust them.",
    latitude: 39.0852195,
    longitude: -93.8402857,
    date: Date.now() * Math.random()
  },
  ];
  
  export default DummyData