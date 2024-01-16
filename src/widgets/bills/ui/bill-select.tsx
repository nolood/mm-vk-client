import { Select } from "@chakra-ui/react";
import { BillsModule } from "~/widgets/bills/model";
import { type FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

const BillSelect: FC<{ onChange: (value: number) => void; value?: number }> =
  observer(({ onChange, value }) => {
    const { bills, fetchBills, status } = BillsModule;
    const isLoading = status === "loading";

    useEffect(() => {
      if (!bills.length) {
        fetchBills();
      }
    }, []);

    return (
      <Select
        value={value || ""}
        onChange={(event) => {
          onChange(Number(event.target.value) || null);
        }}
        variant={"filled"}
        disabled={isLoading}
        placeholder="Выберите счёт"
      >
        {bills.map((bill) => (
          <option key={bill.id} value={bill.id}>
            {bill.title}
          </option>
        ))}
      </Select>
    );
  });

export default BillSelect;
