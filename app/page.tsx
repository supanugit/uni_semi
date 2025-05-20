

export default function Home() {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayName = dayNames[new Date().getDay()];
  console.log(currentDayName);
  return <div></div>;
}
