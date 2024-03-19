export const calcTotlaItems = (items) =>
  items.reduce((acc, item) => acc + item.qty, 0);

export const calcTotlaPrice = (items) =>
  items.reduce((acc, item) => acc + item.qty * item.unitPrice, 0);

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const meridiem = hours >= 12 ? "PM" : "AM";

  const formattedDate = `${month} ${day}, ${year}, ${hours}:${minutes} ${meridiem}`;

  return formattedDate;
};

export const calculateTimeDifference = (dateString) => {
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const givenTime = givenDate.getTime();
  const currentTime = currentDate.getTime();
  const difference = Math.abs(currentTime - givenTime);
  const differenceInMinutes = Math.floor(difference / (1000 * 60));

  return differenceInMinutes;
};
