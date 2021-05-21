const messageData = [
  {
    message: 'You are still alive.',
    id: Math.random() * 1000,
  },
]

export const newNote = async (req, res) => {
  console.log('in notes controller');
  let input = req.body.message;
  const youtube = /youtube/i;
  if (youtube.test(input)) {
    let newMessage = {
      video: input,
      id: Math.random() * 1000
    };
    console.log('the video is', newMessage);
    messageData.push(newMessage);
  } else {
    let newMessage = {
      message: input,
      id: Math.random() * 1000,
    };
    console.log('the new message is, ', newMessage);
    messageData.push(newMessage);
  }
  // let newMessage = {
  //   message: input,
  //   id: Math.random() * 1000,
  // };
  // console.log('the new message is, ', newMessage);
  // messageData.push(newMessage);
  res.end();
};

export const getNotes = async (req, res) => {
  res.json(messageData);
}