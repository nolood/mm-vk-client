import { type FC, type ReactNode } from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { CurrencyFormatter } from "~/shared/ui";
import { colorizeBalance } from "~/shared/lib/colorize-balance";
import { motion } from "framer-motion";
import { billCardAnimation } from "~/features/bill/lib/bill-card-animations";

const BillCard: FC<{
  balance?: number;
  title?: string;
  index: number;
  children?: ReactNode;
}> = ({ balance, title, index, children }) => {
  if (children)
    return <motion.div {...billCardAnimation(index)}>{children}</motion.div>;
  return (
    <motion.div {...billCardAnimation(index)}>
      <Card>
        <CardBody gap={2} display={"flex"} flexDirection={"column"}>
          <Text>{title}</Text>
          <Text color={colorizeBalance(balance)}>
            Баланс:
            <Text fontWeight={"bold"}>
              <CurrencyFormatter balance={balance} />
            </Text>
          </Text>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default BillCard;
