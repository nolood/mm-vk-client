import { type FC } from "react";

const CurrencyFormatter: FC<{
  balance: number | string;
  currency?: string;
}> = ({ balance, currency = "RUB" }) => {
  return (
    <>
      {new Intl.NumberFormat("ru-RU", { style: "currency", currency }).format(
        Number(balance),
      )}
    </>
  );
};

export default CurrencyFormatter;
