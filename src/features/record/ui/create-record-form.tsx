import { type FC } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { type ArticleType } from "~/features/record/model/record";

const CreateRecordForm: FC<{
  isOpen: boolean;
  onClose: () => void;
  type: ArticleType;
}> = ({ isOpen, onClose, type }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={"bottom"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          {"Добавление " + (type === "income" ? "дохода" : "расхода")}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateRecordForm;
