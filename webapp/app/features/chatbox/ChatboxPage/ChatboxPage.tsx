import { Button } from '~/components/ui/button';
import './ChatboxPage.css';
import { Input } from '~/components/ui/input';
import { useState } from 'react';
import axios from 'axios';


interface ChatResponse {
   response: string;
}

export default function ChatboxPage() {

    const [inputValue, setInpuValue] = useState<string | undefined>('');
    const [serverResponse, setServerResponse] = useState<string | undefined>('');

    const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInpuValue(e.target.value);
    }

    const onSendClick = async () => {
        const rsp = await axios.post<ChatResponse>('http://localhost:8080/chat', { message: inputValue });
        console.log({ rsp });
        setServerResponse(rsp.data.response);
    }

    return(
        <div className='flex flex-col items-center justify-center h-full w-1/3'>
            <div className='shadow-sm rounded-lg p-4 w-full'>
                Chatbox

               <div>
                  {serverResponse}
               </div>
                <div className='flex flex-row items-center justify-between gap-2'>
                    <Input value={inputValue} onChange={textChange}  />
                    <Button onClick={onSendClick}>Send</Button>
                </div>
            </div>
        </div>
    );
}