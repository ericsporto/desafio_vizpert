import { Container, Text, List, HStack, Image, Box, Button} from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Book from "./Components/Book";
import AnalogicClock from "./Components/AnalogicClock";

//My book objects.

function App() {
  const [books, setBook] = useState([
    { 
      book: <Image src="Images/book_a.svg" boxSize="80px"/>,
      size: 4,
      id: 1,
      color: 3,
      year: 1956
   },
    { book: <Image src="Images/book_b.svg" boxSize="80px"/>,
      size: 9,
      id: 2,
      color: 1,
      year: 2000
   },
    { book: <Image src="Images/book_c.svg" boxSize="80px"/>,
      size: 2,
      id: 3,
      color: 2,
      year: 1945
   },
    { book: <Image src="Images/book_d.svg" boxSize="80px"/>,
      size: 1,
      id: 4,
      color: 7,
      year: 1990
   },
    { book: <Image src="Images/book_e.svg" boxSize="80px"/>,
      size: 8,
      id: 5,
      color: 5,
      year: 1979
   },
    { book: <Image src="Images/book_f.svg" boxSize="80px"/>,
      size : 10,
      id: 6,
      color: 9,
      year: 1908
   },
    { book: <Image src="Images/book_g.svg" boxSize="80px"/>,
      size: 11,
      id: 7,
      color: 8,
      year: 1915
   },
    { book: <Image src="Images/book_h.svg" boxSize="80px"/>,
      size: 3,
      id: 8,
      color: 6,
      year: 2007
   },
    { book: <Image src="Images/book_i.svg" boxSize="80px"/>,
      size: 7,
      id: 9,
      color: 4,
      year: 2015
   },

  ])

  // Making Drag and Drop books and boards.

  const [board, setBoard] = useState([])

  const [{ isOver }, addToBoardRef] = useDrop({
    accept: "book",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isBookOver }, removeFromBoardRef] = useDrop({
    accept: "board",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  })

  const moveBookToBoard = (item) => {
    setBook((prev) => prev.filter((_, i) => item.index !== i))
    setBoard((prev) => [...prev, item])
  }
  const removeBookFromBoard = (item) => {
    setBoard((prev) => prev.filter((_, i) => item.index !== i))
    setBook((prev) => [...prev, item])
  }

  // Functions to delete, ordered books and refresh page.

  function handleDeleteBook(deletedBook) {
    console.log("handleDeleteBook working")
    const filteredBooks = books.filter((books) => books.index !== deletedBook)
    setBook(filteredBooks)
    setBoard(filteredBooks)
    
  }

  function orderedBySize () {
    console.log ("ordenedBySize is working")
    const orderedBooksBySize = books.sort((a, b) => a.size - b.size)
    setBook(orderedBooksBySize)
    setBoard(orderedBooksBySize)
    
  }
  

  function orderedByColor () {
    console.log ("ordenedByColor is working")
    const orderedBooksByColor = books.sort((a, b) => a.color - b.color)
    setBook(orderedBooksByColor)
    setBoard(orderedBooksByColor)
    
  }

  function orderedByAlphabet () {
    console.log ("ordenedByAlphabet is working")
    const orderedBooksByAlphabet = books.sort((a, b) => a.id - b.id)
    setBook(orderedBooksByAlphabet)
    setBoard(orderedBooksByAlphabet)
    
  }

  function orderedByYear () {
    console.log ("ordenedByYear is working")
    const orderedBooksByYear = books.sort((a, b) => a.year - b.year)
    setBook(orderedBooksByYear)
    setBoard(orderedBooksByYear)
    
  }

 
  function refreshPage() {
     
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
      height="49vh" 
      maxW="100%" 
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
            cursor="pointer">

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
            cursor="pointer">

            {board.map((p, i) => (
              <Book
                item={p}
                key={i}
                index={i}
                bookType="board"
                onDropBook={removeBookFromBoard}/>

            ))}
          </List>

        </HStack>

        <HStack 
          width="30%" 
          height="25vh" 
          bgImage="Images/clock_base.svg" 
          bgRepeat="no-repeat" 
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
            <Image src="Images/filter_button_active.svg" 
              width="90%"
              marginLeft="-310%"
              marginTop="-80%"
              cursor="pointer"
              onClick={() => orderedByAlphabet()}>
            </Image>            
          </HStack>

          <HStack>
            <Image src="Images/filter_button.svg" 
              width="100%"
              marginLeft="-180%"
              marginTop="-83%"
              cursor="pointer"
              onClick={() => orderedByColor()}>
            </Image>            
          </HStack>

          <HStack>
            <Image src="Images/filter_button.svg" 
              width="100%"
              marginLeft="-160%"
              marginTop="-80%"
              cursor="pointer"
              onClick={() => orderedBySize()}>
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
            marginLeft="21.5%"
            marginTop="-22.5%"
            cursor="pointer"
            onClick={() => orderedByAlphabet()}>
          </Image>            
        </HStack>

        <HStack>
          <Image 
            src="Images/filter_colors.svg" 
            width="1.5%"
            marginLeft="30.9%"
            marginTop="-22.8%"
            cursor="pointer"
            onClick={() => orderedByColor()}>
          </Image>            
        </HStack>

        <HStack>
          <Image  
            src="Images/filter_sizes.svg" 
            width="1.5%"
            marginLeft="36%"
            marginTop="-22.7%"
            cursor="pointer"
            onClick={() => orderedBySize()}>
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
            <Image 
              src="Images/button.svg" 
              width="15%"
              marginLeft="22%"
              cursor="pointer"
              onClick={() => refreshPage()}>
          </Image>
                      
          </HStack>

          <Button  
            width="10%"
            bg="#38E655"
            variant='solid'
            border="white"
            marginLeft="45%"
            marginTop="-5%"
            onClick={() => setBook([
              ...books, 
              
              { book: <Image src="Images/book_j.svg" boxSize="80px"/>,
              size: 5,
              id: 10,
              color: 10,
              year: 1988
              },
              { book: <Image src="Images/book_k.svg" boxSize="80px"/>,
              size: 6,
              id: 11,
              color: 11,
              year: 2004
              },
              
            ])}>Add Books</Button>

            <Button  
              width="10%"
              bg="#38E655"
              variant='solid'
              border="white"
              marginLeft="60%"
              marginTop="-8.2%"
              onClick={() => handleDeleteBook(books.index)}
              >Remove Books</Button>

            <HStack>    
              <Image 
                src="Images/filter_button.svg" 
                width="3.5%"
                marginLeft="25%"
                marginTop="-22%"
                cursor="pointer"
                onClick={() => orderedByYear()}>
              </Image>            
            </HStack>

            <Text 
            fontSize="xl" 
            color="red"
            marginLeft="25.4%"
            marginTop="-12%"
            width="50%"
            cursor="pointer"
            onClick={() => orderedByYear()}>Year</Text>

      </Container>

    </Container>
  );
}

export default App;