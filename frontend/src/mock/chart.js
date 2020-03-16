import { format, sub } from "date-fns";

export const LogDate = minState => {
  const range = [...Array(5)];
  range.map((i, index) => {
    range[index] = {
      name: format(sub(new Date(), { seconds: minState * index }), "kk:mm:ss"),
      que1: Math.ceil(Math.random() * 100),
      que2: Math.ceil(Math.random() * 100),
      que3: Math.ceil(Math.random() * 100)
    };
  });
  return range;
};

export const UpdateLogDate = data => {
  data.shift();
  data.push({
    name: format(sub(new Date(), { seconds: 0 }), "kk:mm:ss"),
    que1: Math.ceil(Math.random() * 100),
    que2: Math.ceil(Math.random() * 100),
    que3: Math.ceil(Math.random() * 100)
  });
};
