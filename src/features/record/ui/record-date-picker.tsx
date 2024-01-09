import { type FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
import ReactDatePicker, { setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/date-picker.css";
import ru from "date-fns/locale/ru";

setDefaultLocale("ru");

const RecordDatePicker: FC = () => {
  const [value, setValue] = useState<Date>(new Date());

  console.log(value);

  return (
    <Flex>
      <ReactDatePicker
        locale={ru}
        dateFormat={"dd.MM.yyyy"}
        onChange={(date) => {
          setValue(date);
        }}
        maxDate={new Date()}
        placeholderText={"Выберите дату"}
        selected={value}
      />
    </Flex>
  );
};

export default RecordDatePicker;
