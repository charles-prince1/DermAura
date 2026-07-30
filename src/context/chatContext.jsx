import { createContext, useContext, useState} from "react"


const Chats = createContext()

export const useChat = () => useContext(Chats) 

export const ChatProvider= () =>{
    const [chatHistory, setChatHistory]  = useState([])
    return(
        <Chats.Provider>
            {children}
        </Chats.Provider>
    )

}