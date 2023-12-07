import moment from "moment"

export const useMoment = () => {
  const timestamp = (datetime: Date) => {
    return moment(datetime).format("YYYY/MM/DD hh:mm:ss")
  };

  return { timestamp };
};
