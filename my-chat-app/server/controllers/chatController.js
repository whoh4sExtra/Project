const Chat = require("../models/chatModel");

module.exports.AllMsg = async (req, res, next) => {
  try {
    const { from, to } = req.body;

    const data = await Chat.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const _Chat = data.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(_Chat);
  } catch (ex) {
    next(ex);
  }
};

module.exports.SendMsg = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Chat.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) return res.json({ msg: "Send" });
    else return res.json({ msg: "Something wrong in the database" });
    console.log("Im In")
  } catch (ex) {
    next(ex);
  }
};
