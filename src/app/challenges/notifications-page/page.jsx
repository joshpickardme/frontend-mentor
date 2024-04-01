"use client"

import { useEffect } from "react"
import Notification from "./components/Notification"
import { notifications } from "./notifications"
import { useState } from "react"
import Back from "@/components/master/utils/Back"

// Loads notifications here

export default function notificationsPage() {

    const [notificationsState, setNotificationsState] = useState([])
    const [readNotifications, setReadNotifications] = useState(3)

    function checkRead() {
        let number = 0;
        for (const notification of notificationsState) {
            if(!notification.read) {
                number += 1
            }
        }
        setReadNotifications(number)
    }

    function markAsRead() {
        let newNotifications = []
        for (const notification of notificationsState) {
            notification.read = true
            newNotifications.push(notification)
        }
        setNotificationsState(newNotifications)
        checkRead()
    }

    useEffect(() => {
        setNotificationsState(notifications)
    }, [])

    return (
        <main className="flex bg-notifications-snow  min-w-full min-h-screen justify-center items-center">
            <Back fem={'https://www.frontendmentor.io/solutions/react-tailwind-notifications-page-TdvsUsZMDk'}></Back>
            <div className="flex flex-col w-[730px] p-4 sm:p-8 h-screen sm:h-[839px] items-center rounded-[15px] shadow-md bg-white gap-2">
                <header className="flex flex-row justify-between w-full">
                    <div className="flex gap-3 flex-row items-center">
                        <h1 className=" text-notifications-very-dark-grey-blue m-0 font-jakarta text-[20px] sm:text-[24px] font-extrabold">Notifications</h1>
                        <div className="flex bg-notifications-blue w-[32px] rounded-[6px] h-[25px] items-center justify-center">
                            <p className="font-jakarta text-white text-[16px] m-0 font-bold">{readNotifications}</p>
                        </div>
                    </div>
                    <button onClick={markAsRead} className="font-jakarta text-notifications-dark-grey-blue hover:text-notifications-blue transition-all font-medium text-[14px] sm:text-[16px]">Mark all as read</button>
                </header>
                <div className="flex flex-col justify-start w-full gap-1">
                    {notificationsState.map(notification => <Notification image={notification.image} name={notification.name} text={notification.text} link={notification.link} post={notification.post} picture={notification.picture} read={notification.read} ago={notification.ago} message={notification.message}/>)}
                </div>
            </div>
        </main>
    )
}