const User = require("../model/userinfo");

const UserCtrl = {
  getInfo: async (req, res) => {
    try {
      const user = await User.find({ user_id: req.params.id });
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  },
  createInfo: async (req, res) => {
    try {
      const { phone } = req.body;
      const user = await User.findOne({phone})
      if(user){
      res.status(200).send(user);
      }else{
      const newUser = new User({
        phone,
      });
      const NewUser = await newUser.save();
      res.status(200).send(NewUser);
    }
    } catch (error) {
      res.status(400).send(error);
    }
  },
  updateInfo: async (req, res) => {
    try {
      const { phone, fullname, address } = req.body;
      const payload = {
        phone,
        fullname,
        address: {
          house_no: address.house_no,
          street: address.street,
          pincode: address.pincode,
          city: address.city,
          state: address.state,
        },
    }
      await User.findByIdAndUpdate({_id:req.params.id},payload)
      res.status(200).send("updated")
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = UserCtrl;
