import { type FC } from "react";
import { Flex } from "@chakra-ui/react";
import ReactDatePicker, { setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/date-picker.css";
import ru from "date-fns/locale/ru";
import { DateTime } from "luxon";

setDefaultLocale("ru");

const RecordDatePicker: FC<{
  value: string;
  onChange: (date: string) => void;
}> = ({ value, onChange }) => {
  return (
    <Flex>
      <ReactDatePicker
        locale={ru}
        dateFormat={"dd.MM.yyyy"}
        onChange={(date) => {
          onChange(DateTime.fromJSDate(date).toISODate());
        }}
        maxDate={new Date()}
        placeholderText={"Выберите дату"}
        selected={value ? DateTime.fromISO(value).toJSDate() : null}
      />
    </Flex>
  );
};

export default RecordDatePicker;
