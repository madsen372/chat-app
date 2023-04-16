import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '946e16cd-301a-4bde-8ba6-2ed6acb0568f', 
        props.user.username, 
        props.user.secret)
    return <div style={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps}/>

    </div>
  };
  export default ChatsPage;