const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	height: {
		type: Number,
	},
	weight: {
		type: Number,
	},
});

// static signup method
userSchema.statics.signup = async function (
	email,
	password,
	name,
	age,
	gender,
	height,
	weight
) {
	// validation
	console.log(email, password, name, age, gender);
	if (!email || !password || !name || !age || !gender) {
		throw Error("Incomplete Data");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email not valid");
	}
	if (!validator.isStrongPassword(password)) {
		throw Error("Password not strong enough");
	}

	const exists = await this.findOne({ email });

	if (exists) {
		throw Error("Email already in use");
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({
		email,
		password: hash,
		name,
		age,
		gender,
		height,
		weight,
	});

	console.log("User created: ", user);

	return user;
};

userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	const user = await this.findOne({ email });
	if (!user) {
		throw Error("Incorrect email");
	}

	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw Error("Incorrect password");
	}

	return user;
};

module.exports = mongoose.model("User", userSchema);
