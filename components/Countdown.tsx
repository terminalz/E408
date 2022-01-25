// @ts-nocheck
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const event = new Date(Date.UTC(2022, 4, 20, -8, 0, 0));
    let now = new Date();
    const difference =
      +new Date(
        event.toLocaleString("en-US", {
          timeZone: "UTC",
        })
      ) -
      +new Date(
        now.toLocaleString("en-US", {
          timeZone: "UTC",
        })
      );
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="grid w-full grid-cols-4 gap-4">
      <div className="p-4 border-4 border-primary-300">
        <h2 className="text-center">
          {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
          {timeLeft &&
            Object.keys(timeLeft).length === 0 &&
            Object.getPrototypeOf(timeLeft) === Object.prototype &&
            "00"}
        </h2>
        <h5 className="text-center">天</h5>
      </div>
      <div className="p-4 border-4 border-primary-300">
        <h2 className="text-center">
          {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          {timeLeft &&
            Object.keys(timeLeft).length === 0 &&
            Object.getPrototypeOf(timeLeft) === Object.prototype &&
            "00"}
        </h2>
        <h5 className="text-center">时</h5>
      </div>
      <div className="p-4 border-4 border-primary-300">
        <h2 className="text-center">
          {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          {timeLeft &&
            Object.keys(timeLeft).length === 0 &&
            Object.getPrototypeOf(timeLeft) === Object.prototype &&
            "00"}
        </h2>
        <h5 className="text-center">地</h5>
      </div>
      <div className="p-4 border-4 border-primary-300">
        <h2 className="text-center">
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          {timeLeft &&
            Object.keys(timeLeft).length === 0 &&
            Object.getPrototypeOf(timeLeft) === Object.prototype &&
            "00"}
        </h2>
        <h5 className="text-center">立</h5>
      </div>
    </div>
  );
};

export default Countdown;
