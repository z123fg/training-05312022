// Date Lookup Functions
export const WeekdayLookup = ({ day }) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "NAN";
  }
};
export const MonthLookup = ({ mo }) => {
  switch (mo) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "NAN";
  }
};
export const MonthDayLookup = ({ mod }) => {
  switch (mod) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
};

export const incompleteConfig = {
  name: "Incomplete",
  color: "var(--clr-secondary-accent)",
  border: "solid 2px var(--clr-secondary-accent)",
  textDecoration: "none",
};
export const completeConfig = {
  name: "Complete",
  color: "var(--clr-primary-accent)",
  border: "solid 2px var(--clr-primary-accent)",
  textDecoration: "line-through",
};
export const totalConfig = {
  name: "Total Tasks",
  color: "var(--clr-secondary-text)",
  border: "solid 2px var(--clr-secondary-text)",
  textDecoration: "none",
};