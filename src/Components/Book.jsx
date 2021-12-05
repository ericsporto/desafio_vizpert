import { ListItem } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

//Making books Drag and Drop.

const Book = ({ item, bookType, onDropBook, index }) => {
  const [isDragging, dragRef] = useDrag({
    type: bookType,
    item: () => ({ ...item, index }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropBook(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <ListItem 
      maxW={["8%","8%","9%","9%"]}
      maxH="100%"
      padding={["0.4%","0.4%","0%","0%"]}
      ref={dragRef}
    >
      {item.book}
    </ListItem>
  );
};

export default Book;