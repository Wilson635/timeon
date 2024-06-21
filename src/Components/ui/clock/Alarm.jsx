import React, { useState, useEffect } from "react";
import { useToast } from "../toast/use-toast";
import { Trash } from "lucide-react";
import './countdown.css'

// Append zeroes for single digit
const appendZero = (value) => (value < 10 ? "0" + value : value);

const Alarm = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [hourInput, setHourInput] = useState("00");
    const [minuteInput, setMinuteInput] = useState("00");
    const [alarmsArray, setAlarmsArray] = useState([]);
    const [alarmSound] = useState(new Audio("/alarm.m4a"));
    const [alarmIndex, setAlarmIndex] = useState(0);
    const { toast } = useToast();

    // Display Timer
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = appendZero(date.getHours());
            const minutes = appendZero(date.getMinutes());
            const seconds = appendZero(date.getSeconds());
            setCurrentTime(`${hours}:${minutes}:${seconds}`);

            // Check and play alarm
            alarmsArray.forEach((alarm) => {
                if (alarm.isActive) {
                    if (`${alarm.alarmHour}:${alarm.alarmMinute}` === `${hours}:${minutes}`) {
                        alarmSound.play();
                        alarmSound.loop = true;
                        toast({ title: "Helloooo il est l'heure", alarm });
                    }
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [alarmsArray, alarmSound]);

    const handleHourInput = (e) => {
        const value = appendZero(e.target.value);
        setHourInput(value);
    };

    const handleMinuteInput = (e) => {
        const value = appendZero(e.target.value);
        setMinuteInput(value);
    };

    const createAlarm = (alarmObj) => {
        const { id, alarmHour, alarmMinute } = alarmObj;
        return (
            <div className="alarm" key={id} data-id={id}>
                <span>{alarmHour}:{alarmMinute}</span>
                <input type="checkbox" onClick={(e) => handleCheckbox(e, id)} />
                <button onClick={() => deleteAlarm(id)}>
                    <Trash />
                </button>
            </div>
        );
    };

    const setNewAlarm = () => {
        setAlarmIndex(alarmIndex + 1);
        const newAlarm = {
            id: `${alarmIndex}_${hourInput}_${minuteInput}`,
            alarmHour: hourInput,
            alarmMinute: minuteInput,
            isActive: false,
        };
        setAlarmsArray([...alarmsArray, newAlarm]);
        setHourInput("00");
        setMinuteInput("00");
    };

    const handleCheckbox = (e, id) => {
        const updatedAlarms = alarmsArray.map((alarm) =>
            alarm.id === id ? { ...alarm, isActive: e.target.checked } : alarm
        );
        setAlarmsArray(updatedAlarms);
        if (!e.target.checked) {
            alarmSound.pause();
        }
    };

    const deleteAlarm = (id) => {
        const updatedAlarms = alarmsArray.filter((alarm) => alarm.id !== id);
        setAlarmsArray(updatedAlarms);
    };

    return (
        <div className="container">
            <div className="bg-elem"></div>
            <div className="bg-elem"></div>
            <div className="bg-elem"></div>
            <div className="content mt-12 py-20">
                <h3 className="type">Alarm</h3>
            </div>
            <div className="wrapper flex gap-3 items-center justify-center mx-auto px-8">
                <input
                    id="hourInput"
                    type="number"
                    value={hourInput}
                    onChange={handleHourInput}
                    min="0"
                    max="23"
                    className="text-white text-[40px] font-medium px-8 py-4 text-center bg-transparent border border-n-5 rounded-md"
                />
                <p className="colon text-xl">:</p>
                <input
                    id="minuteInput"
                    type="number"
                    value={minuteInput}
                    onChange={handleMinuteInput}
                    min="0"
                    max="59"
                    className="text-white text-[40px] font-medium px-8 py-4 text-center bg-transparent border border-n-5 rounded-md"
                />
            </div>
            <div className="btns">
                <button id="set" className="mt-44 btn" onClick={setNewAlarm}>Set Alarm</button>
            </div>
            <div className="activeAlarms">
                {alarmsArray.map((alarm) => createAlarm(alarm))}
            </div>
        </div>
    );
};

export default Alarm;
