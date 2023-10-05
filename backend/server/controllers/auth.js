import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER*/

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;


        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/* LOGGING IN */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if(!user) return res.status(400).json({ msg: "User does not exist . "});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. "});

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        delete user.password;
        res.status(200)({ token, user});

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


// test api setup
export const test = async (req, res) => {
  await User.deleteMany({ firstName: 'test' });
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash('12345678', salt);
  const mockUser = new User({ firstName: 'test', lastName: 'test', email: 'test@test.com', password: passwordHash });
  await mockUser.save();
  res.status(200).send({ success: true, message: 'Test setup completed' });
}


// teardown api setup
export const teardown = async (req, res) => {
  await User.deleteMany({ firstName: 'test' });
  res.status(200).send({ success: true, message: 'Test teardown completed' });
};