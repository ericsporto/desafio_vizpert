import { Container, Text, List, HStack, Image, Box, useControllableState} from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Book from "./Components/Book";
import AnalogicClock from "./Components/AnalogicClock";

function App() {
  const [books, setBook] = useState([
    { book: <Image src="Images/book_a.svg" boxSize="80px"/> },
    { book: <Image src="Images/book_b.svg" boxSize="80px"/> },
    { book: <Image src="Images/book_c.svg" boxSize="80px"/> },
    { book: <Image src="Images/book_d.svg" boxSize="80px"/> },
    { book: <Image src="Images/book_f.svg" boxSize="80px"/> },
    { book: <Image src="Images/book_g.svg" boxSize="80px"/> },
    { book: <Image src="Images/book_h.svg" boxSize="80px"/> },
    { book: <Image src="Images/book_i.svg" boxSize="80px"/> },
  ]);

  const [board, setBoard] = useState([]);

  const [{ isOver }, addToBoardRef] = useDrop({
    accept: "book",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  console.log(isOver);
  const [{ isOver: isBookOver }, removeFromBoardRef] = useDrop({
    accept: "board",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const moveBookToBoard = (item) => {
    console.log(item);
    setBook((prev) => prev.filter((_, i) => item.index !== i));
    setBoard((prev) => [...prev, item]);
  };
  const removeBookFromBoard = (item) => {
    setBoard((prev) => prev.filter((_, i) => item.index !== i));
    setBook((prev) => [...prev, item]);
  };

  function AlphabeticalOrder(e) {
    e.preventDefault()

    window.location.reload(false);
  }

  return (
    <Container 
    maxW="100%" 
    height="100vh" 
    border="solid transparent" 
    bgImage="Images/bg_stripes.svg" 
    padding="0px">

      <Container 
      border="solid transparent" 
      bgImage="Images/ground.svg" 
      height="49vh" maxW="100%" 
      marginTop="24%">

        <HStack 
        border="solid ytransparent" 
        width="600px" 
        height="350px" 
        display="flex" 
        bgImage="Images/bookcase.svg" 
        bgRepeat="no-repeat"
        marginTop="-15.3%" 
        marginLeft="35%" 
        flexWrap="wrap"
        spacing="28px">
        

          <List 
            display="inline-flex" 
            direction="row" 
            width="66%" 
            marginTop="4%" 
            marginLeft="5%"
            bgGradient={isBookOver}
            ref={removeFromBoardRef}
            p="2"
            marginBottom="-10%"
            height="15vh"
            border="solid transparent"            
          >
            {books.map((p, i) => (
              <Book                
                item={p}
                key={i}
                bookType="book"
                onDropBook={moveBookToBoard}
                index={i}/>
            ))}

          </List>

          <List 
            display="inline-flex" 
            direction="row" 
            width="66%"
            bgGradient={isOver}            
            ref={addToBoardRef}
            height="15vh"
            p="4"
            border="solid transparent"
          >
            {board.map((p, i) => (
              <Book
                item={p}
                key={i}
                index={i}
                bookType="board"
                onDropBook={removeBookFromBoard}
              />
            ))}
          </List>

        </HStack>

        <HStack 
        width="30%" 
        height="25vh" 
        bgImage="Images/clock_base.svg" bgRepeat="no-repeat" 
        marginLeft="12%"
        marginTop="-30%">       
        </HStack>

        <HStack 
        width="15%" 
        height="30vh" 
        bgImage="Images/logo.svg" 
        bgRepeat="no-repeat" 
        marginLeft="75%"
        marginTop="-13%">                    
        </HStack>

        <Box marginLeft="12.7%" marginTop="-13%"><AnalogicClock/></Box>

        <HStack 
        width="38%" 
        height="32vh" 
        bgImage="Images/board.svg" 
        bgRepeat="no-repeat" 
        marginLeft="7%"
        marginTop="17%">
          <Text 
          fontSize="xl" 
          color="gray"
          marginLeft="50%"
          marginTop="-30%"
          width="80%">SORT BY</Text>

          <HStack>
            <Image src="Images/filter_button_active.svg" width="90%"
            marginLeft="-260%"
            marginTop="-80%"
            onClick={AlphabeticalOrder}>
            </Image>            
          </HStack>
          <HStack>
            <Image src="Images/filter_button.svg" width="100%"
            marginLeft="-240%"
            marginTop="-80%"
            onClick={AlphabeticalOrder}>
            </Image>            
          </HStack>
          <HStack>
            <Image src="Images/filter_button.svg" width="100%"
            marginLeft="-210%"
            marginTop="-80%"
            onClick={AlphabeticalOrder}>
            </Image>            
          </HStack>
        </HStack>

        <HStack 
        width="15%" 
        height="35vh" 
        bgImage="Images/lady.svg" 
        bgRepeat="no-repeat" 
        marginLeft="7%"
        marginTop="-15%">          
        </HStack>

        <HStack>
          <Image src="Images/filter_alphabetic.svg" 
          width="1%"
          marginLeft="23.5%"
          marginTop="-22.5%"
          onClick={AlphabeticalOrder}>
          </Image>            
        </HStack>
        <HStack>
          <Image src="Images/filter_colors.svg" 
          width="1.5%"
          marginLeft="28.7%"
          marginTop="-22.7%"
          onClick={AlphabeticalOrder}>
          </Image>            
        </HStack>
        <HStack>
          <Image src="Images/filter_sizes.svg" 
          width="1.5%"
          marginLeft="34.1%"
          marginTop="-22.7%"
          onClick={AlphabeticalOrder}>
          </Image>            
        </HStack>
        <Text 
          fontSize="xl" 
          color="gray"
          marginLeft="21%"
          marginTop="-11%"
          width="20%"
          fontSize="4xl">_________________</Text>

          <HStack>
            <Image src="Images/button.svg" 
            width="15%"
            marginLeft="22%"
            onClick={AlphabeticalOrder}>
          </Image>            
          </HStack>

        
        

      </Container>

    </Container>
  );
}

export default App;