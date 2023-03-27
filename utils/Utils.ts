export const MOTE_VALUE = 1000000000;
const DAY_MILLISECONDS = 1000 * 60;

export const formatNumber = (number: number) => {
  // Limit to three significant digits
  return number.toLocaleString("en-US");
};

export const truncateString = (string: string, number: number) => {
  if (number >= string.length) {
    return string;
  }
  return string.slice(0, number).concat("...");
};

export const getRelativeTime = timestamp => {
  const rtf = new Intl.RelativeTimeFormat("en", {
    numeric: "always",
    style: "short",
  });

  const daysDifference = Math.round(
    (timestamp.getTime() - new Date().getTime()) / DAY_MILLISECONDS
  );

  return rtf.format(daysDifference, "minute");
};

export const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

export const DeployColors = {
  transfer: "#118ab2",
  storedContractByHash: "#8E8ab2",
  moduleBytes: "#9Ad166",
};
