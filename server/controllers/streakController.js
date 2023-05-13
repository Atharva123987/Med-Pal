const Streak = require("../models/streakModel");
const mongoose = require("mongoose");

const getUserStreak = async (req, res) => {
	const user_id = req.user._id;
	const streak = await Streak.findOne({ user_id });

	if (!streak) {
		Streak.create({
			currentStreak: 0,
			user_id,
		}).then((res)=>{
			res.status(200).json(newStreak);	
		}).catch((err)=>console.log(err));
	}
	else{
		res.status(200).json(streak);
	}
	
	
};

const incrementUserStreak = async (req, res) => {
	const user_id = req.user._id;

	const streak = await Streak.findOne({ user_id });

	if (
		streak.updatedAt.toDateString() === new Date().toDateString() &&
		streak.currentStreak > 0
	) {
		res.status(400).json({ error: "Streak already incremented today" });
	} else {
		// streak.currentStreak += 1;
		// streak.save();
		const incrementStreak = await Streak.findOneAndUpdate(
			{ user_id },
			{ $inc: { currentStreak: 1 } }
		);

		res.status(200).json(incrementStreak);
	}
};

const resetUserStreak = async (req, res) => {
	const { id } = req.params;

	const streak = await Streak.findOneAndUpdate(
		{ user_id: id },
		{ currentStreak: 0 }
	);

	if (!streak) {
		res.status(400).json({ error: "User not found" });
	}

	res.status(200).json(streak);
};

module.exports = { getUserStreak, incrementUserStreak, resetUserStreak };
