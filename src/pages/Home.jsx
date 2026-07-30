import { useState } from 'react'
import FeedBackSideBar from '../component/Sidebar'
import FeedBackBody from '../component/Body'
function FeedBackDashboard(){
    const [extended, setExtended] = useState(false)
    const [recent, setRecent] = useState([])
    const [issueType, setIssueType] = useState('');
    const [description, setDescription] = useState('');
    const [screenshot, setScreenshot] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [detail, setDetail] = useState(false)
    const [active, setActive] = useState('CREATE REPORT')
    // const [setting, setSetting] = useState('Settings')
    const [isEmergency, setIsEmergency] = useState(false)
  
    const handleToggle = () => {
        setExtended(!extended)
        console.log(extended)
    }   
    const handleDetails = (currentID) =>{
    console.log(currentID )
    const filtered = recent.filter(el=>{
        if(currentID == el.id){
           setDetail(true)
        } else{
            setDetail(false)
        }
    })
        }
    const bodyProps = {
        issueType,
        setIssueType,
        description,
        setDescription,
        isSubmitted,
        setIsSubmitted,
        screenshot,
        setScreenshot,
        recent,
        setRecent,
        active, 
        setActive,
        handleDetails,
        detail,
        isEmergency,
        
    }
    return(
        <div className="flex w-full min-h-screen bg-gray-50 overflow-hidden">
            
            {/* Sidebar Component */}
            <FeedBackSideBar values={{ extended, handleToggle, recent, setRecent, setActive, setIsSubmitted, setExtended, setIssueType, setDescription,setScreenshot}} />

            {/* Main Content Body */}
            <div className="flex-1 h-screen overflow-y-auto">
                <FeedBackBody value={bodyProps} />
            </div>

        </div>
    )
}
export default FeedBackDashboard