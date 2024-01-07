import { type FC, type ReactNode, useEffect } from "react";
import { Card, CardBody, Text, Tooltip } from "@chakra-ui/react";
import { CurrencyFormatter } from "~/shared/ui";
import { colorizeBalance } from "~/shared/lib/colorize-balance";
import { motion, useAnimation } from "framer-motion";
import { router } from "~/shared/router/router";
import { BILL_ROUTE } from "~/shared/router/paths";

const BillCard: FC<{
  balance?: number;
  title?: string;
  index: number;
  id?: number;
  children?: ReactNode;
}> = ({ balance, title, index, children, id }) => {
  const controls = useAnimation();

  const initialState = { opacity: 0.5, scale: 0 };

  const handleClick = (): void => {
    router.navigate(BILL_ROUTE + "/" + id);
  };

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
      <Card
        onClick={handleClick}
        h={"135px"}
        cursor={"pointer"}
        _hover={{ bg: "gray.600" }}
        _active={{ bg: "gray.500" }}
        transition={"all 0.2s"}
      >
        <CardBody gap={2} display={"flex"} flexDirection={"column"}>
          <Tooltip label={title} aria-label={"Tooltip"} placement={"top"}>
            <Text
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
            >
              {title}
            </Text>
          </Tooltip>
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
