import { type FC, type ReactNode, useEffect } from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { CurrencyFormatter } from "~/shared/ui";
import { colorizeBalance } from "~/shared/lib/colorize-balance";
import { motion, useAnimation } from "framer-motion";

const BillCard: FC<{
  balance?: number;
  title?: string;
  index: number;
  children?: ReactNode;
}> = ({ balance, title, index, children }) => {
  const controls = useAnimation();

  const initialState = { opacity: 0.5, scale: 0 };

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delay: index < 10 ? index * 0.02 : 10 * 0.02,
      },
    });
  }, []);

  if (children)
    return (
      <motion.div
        initial={initialState}
        animate={controls}
        style={{ height: "135px" }}
      >
        {children}
      </motion.div>
    );

  return (
    <motion.div initial={initialState} animate={controls}>
      <Card h={"135px"}>
        <CardBody gap={2} display={"flex"} flexDirection={"column"}>
          <Text>{title}</Text>
          <Text color={colorizeBalance(balance)} as={"span"}>
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
