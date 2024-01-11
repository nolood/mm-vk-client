import { type FC } from "react";
import { type IRecord } from "~/widgets/record/model/records";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { ArticleItem } from "~/entities";

const RecordCard: FC<{ item: IRecord }> = ({ item }) => {
  return (
    <Card flexDirection={"row"}>
      <CardHeader w={"20%"}>
        <ArticleItem item={item.article} index={0} />
      </CardHeader>
      <CardBody>{item.amount}</CardBody>
    </Card>
  );
};

export default RecordCard;
