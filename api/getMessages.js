function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class RandomMessageGenerator {
  generate(numMessages) {
    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac orci augue. Sed fringilla nec magna id hendrerit. Proin posuere, tortor ut dignissim consequat, ante nibh ultrices tellus, in facilisis nunc nibh rutrum nibh.';

    //create a set number of texts with random lengths. Also randomly put them on the right (user) or left (other person).
    var numberOfMessages = numMessages;

    var messages = [];

    for (var i = 0; i < numberOfMessages; i++) {
      var messageLength = getRandomInt(30, 160);

      message = loremIpsum.substring(0, messageLength);

      user = (() => {
        const random = getRandomInt(0, 5);
        switch(random) {
          case 0:
            return 'Joe';
          case 1:
            return 'Steve';
          case 2:
            return 'Melissa';
          case 3:
            return 'Tonya';
          case 4:
            return 'Pat';
          default:
            return 'Slartibartfast';
        }
      })();

      const now = new Date();

      messages.push({
        id: i,
        text: message,
        user,
        date: new Date(getRandomInt(now.getTime() - 500000000, now.getTime())),
        faves: getRandomInt(0, 999),
        shares: getRandomInt(0, 35),
      });
    }

    return messages;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// don't want these to change between views
const generator = new RandomMessageGenerator();
const messages = generator.generate(50);

export default () => {
  return Promise.resolve(messages);
}