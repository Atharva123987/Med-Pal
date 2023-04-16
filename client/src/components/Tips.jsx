import { useState, useEffect } from "react";

const Tips = () => {
  const [tips, setTips] = useState([
    {
      id: "1",
      tip:
        "Starchy carbohydrates should make up just over a third of the food you eat. They include potatoes, bread, rice, pasta and cereals.",
    },
    {
      id: "2",
      tip:
        "It's recommended that you eat at least 5 portions of a variety of fruit and veg every day. They can be fresh, frozen, canned, dried or juiced.",
    },
    {
      id: "3",
      tip:
        "Fish is a good source of protein and contains many vitamins and minerals. Aim to eat at least 2 portions of fish a week, including at least 1 portion of oily fish.",
    },
  ]);

  const [tipsId, setTipsId] = useState(1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setTipsId((prev) => (prev + 1) % 3);
        setShow(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span>Tip of the day:</span>
      <br />
      <i
        style={{ opacity: show ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        {tips[tipsId]?.tip}
      </i>
    </>
  );
};

export default Tips;
