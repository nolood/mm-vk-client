import { DateTime } from "luxon";

export const dateFormat = ({
  from = "iso",
  date,
}: {
  from?: string;
  date: string;
}): string => {
  switch (from) {
    case "iso":
      return DateTime.fromISO(date).toFormat("dd.MM.yyyy");
  }

  return "";
};
