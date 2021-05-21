const messageData = [
  {
    message: 'You are still alive.',
    id: Math.random() * 1000,
  },
]

export const newNote = async (req, res) => {
  console.log('in notes controller');
  let input = req.body.message;
  let newMessage = {
    message: input,
    id: Math.random() * 1000,
  };
  console.log('the new message is, ', newMessage);
  messageData.push(newMessage);
  res.end();
};

export const getNotes = async (req, res) => {
  res.json(messageData);
}