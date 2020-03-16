import { format, sub } from "date-fns";

export const LogDate = (minState, rangeNumber) => {
  const range = [...Array(rangeNumber)];
  range.map((i, index) => {
    range[rangeNumber - 1 - index] = {
      name: format(sub(new Date(), { seconds: minState * index }), "kk:mm:ss"),
      que1: Math.ceil(Math.random() * 100),
      que2: Math.ceil(Math.random() * 100),
      que3: Math.ceil(Math.random() * 100)
    };
  });
  return range;
};

export const UpdateLogDate = data => {
  const newDate = [];
  data.map((i, index) => {
    newDate[index] = data[index + 1];
  });

  newDate[4] = {
    name: format(sub(new Date(), { seconds: 0 }), "kk:mm:ss"),
    que1: Math.ceil(Math.random() * 100),
    que2: Math.ceil(Math.random() * 100),
    que3: Math.ceil(Math.random() * 100)
  };

  return newDate;
};
