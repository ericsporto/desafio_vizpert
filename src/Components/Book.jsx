import { ListItem } from "@chakra-ui/react";
import React from "react";
import { useDrag } from "react-dnd";

const Book = ({ item, bookType, onDropBook, index }) => {
  const [{ isDragging }, dragRef] = useDrag({
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
      maxW="9%"
      maxH="100%"
      ref={dragRef}
    >
      {item.book}
    </ListItem>
  );
};

export default Book;