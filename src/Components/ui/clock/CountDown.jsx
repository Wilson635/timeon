import React, { useState, useEffect } from 'react';
import './countdown.css';
import $ from 'jquery';

const addTrailingZero = (number) => (number < 10 ? "0" + number : number);

const CountDown = () => {
    const [stopwatch, setStopwatch] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        running: false,
        laps: [],
    });

    const [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        running: false,
    });

    const [view, setView] = useState('clock');

    const updateTime = () => {
        const time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";
        let otherampm = hours >= 12 ? "AM" : "PM";

        hours = hours % 12 || 12;
        hours = addTrailingZero(hours);
        minutes = addTrailingZero(minutes);
        seconds = addTrailingZero(seconds);

        $("#hour").html(hours);
        $("#min").html(minutes);
        $("#sec").html(seconds);
        $("#ampm").html(ampm);
        $("#other-ampm").html(otherampm);
    };

    useEffect(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Stopwatch handlers
    const handleStopwatch = () => {
        setStopwatch((prev) => {
            let { hours, minutes, seconds, milliseconds, running, laps } = prev;

            if (!running) return prev;

            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            return {
                ...prev,
                hours,
                minutes,
                seconds,
                milliseconds,
            };
        });
    };

    useEffect(() => {
        let interval;
        if (stopwatch.running) {
            interval = setInterval(handleStopwatch, 10);
        }
        return () => clearInterval(interval);
    }, [stopwatch.running]);

    const startStopwatch = () => setStopwatch({ ...stopwatch, running: true });
    const stopStopwatch = () => setStopwatch({ ...stopwatch, running: false });
    const resetStopwatch = () => setStopwatch({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        running: false,
        laps: [],
    });
    const lapStopwatch = () => setStopwatch((prev) => ({
        ...prev,
        laps: [...prev.laps, {
            hours: prev.hours,
            minutes: prev.minutes,
            seconds: prev.seconds,
            milliseconds: prev.milliseconds,
        }],
    }));

    // Timer handlers
    const handleTimer = () => {
        setTimer((prev) => {
            let { hours, minutes, seconds, milliseconds, running } = prev;

            if (!running) return prev;

            milliseconds--;
            if (milliseconds === -1) {
                milliseconds = 99;
                seconds--;
            }
            if (seconds === -1) {
                seconds = 59;
                minutes--;
            }
            if (minutes === -1) {
                minutes = 59;
                hours--;
            }

            return {
                ...prev,
                hours,
                minutes,
                seconds,
                milliseconds,
            };
        });
    };

    useEffect(() => {
        let interval;
        if (timer.running) {
            interval = setInterval(handleTimer, 10);
        }
        return () => clearInterval(interval);
    }, [timer.running]);

    const startTimer = () => {
        if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
            const time = prompt("Enter time in minutes") * 60;
            setTimer({
                hours: Math.floor(time / 3600),
                minutes: Math.floor((time % 3600) / 60),
                seconds: Math.floor(time % 60),
                milliseconds: 0,
                running: true,
            });
        } else {
            setTimer({ ...timer, running: true });
        }
    };

    const stopTimer = () => setTimer({ ...timer, running: false });
    const resetTimer = () => setTimer({
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        running: false,
    });

    return (
        <div className="container-1">
            <div className="bg-elem"></div>
            <div className="bg-elem"></div>
            <div className="bg-elem"></div>
            <div className="content mt-11 py-24">
                <h3 className="type">{view.charAt(0).toUpperCase() + view.slice(1)}</h3>
            </div>

            <div className="main-container">
                {view === 'clock' && (
                    <div className="clock">
                        <div className="wrapper-1">
                            <div className="main">
                                <div className="hour">
                                    <p className="number" id="hour">00</p>
                                    <p>hours</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="min">
                                    <p className="number" id="min">00</p>
                                    <p>minutes</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="sec">
                                    <p className="number" id="sec">00</p>
                                    <p>seconds</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="ampm">
                                    <p className="number" id="ampm">AM</p>
                                    <p id="other-ampm">PM</p>
                                </div>
                            </div>
                        </div>
                        <div className="btns">
                            <button className="btn" onClick={() => setView('stopwatch')}>Stopwatch</button>
                            <button className="btn" onClick={() => setView('timer')}>Timer</button>
                        </div>
                    </div>
                )}

                {view === 'stopwatch' && (
                    <div className="stopwatch">
                        <div className="wrapper-1">
                            <div className="main">
                                <div className="hour">
                                    <p className="number" id="stopwatch-hour">{addTrailingZero(stopwatch.hours)}</p>
                                    <p>hours</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="min">
                                    <p className="number" id="stopwatch-min">{addTrailingZero(stopwatch.minutes)}</p>
                                    <p>minutes</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="sec">
                                    <p className="number" id="stopwatch-sec">{addTrailingZero(stopwatch.seconds)}</p>
                                    <p>seconds</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="ms">
                                    <p className="number" id="stopwatch-ms">{addTrailingZero(stopwatch.milliseconds)}</p>
                                    <p>miliseconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="laps mt-44">
                            {stopwatch.laps.map((lap, index) => (
                                <div className="lap" key={index}>
                                    <p>Lap {index + 1}</p>
                                    <p>
                                        {addTrailingZero(lap.hours)} : {addTrailingZero(lap.minutes)} : {addTrailingZero(lap.seconds)} : {addTrailingZero(lap.milliseconds)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="btns">
                            <button className="btn start-stopwatch" onClick={startStopwatch}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m11.75 11a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-7.974-2.725a14.502 14.502 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617c-.48.36-.524 1.116-.612 2.628c-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628c.481.361 1.018.035 2.09-.617c.278-.169.547-.341.784-.508c.27-.19.565-.418.862-.66c1.075-.877 1.612-1.315 1.612-2.065s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66" clip-rule="evenodd" /></svg></button>
                            <button className="btn lap-stopwatch" onClick={lapStopwatch}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504l.054.027c.734.367 1.36.68 1.796.984c.442.309.906.757.906 1.449c0 .693-.464 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" /><path fill="#9f8c14" d="M12 22c5.523 0 10-1.567 10-3.5c0-1.662-3.31-3.054-7.75-3.411V18a2.25 2.25 0 0 1-4.5 0v-2.911C5.31 15.446 2 16.838 2 18.5C2 20.433 6.477 22 12 22" /><path fill="#9f8c14" d="M12 1.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0v-5.036l5.062-2.531c.734-.367 1.36-.68 1.796-.984c.442-.309.906-.756.906-1.449c0-.692-.464-1.14-.906-1.449c-.436-.304-1.062-.617-1.796-.984l-5.062-2.53V2a.75.75 0 0 0-.75-.75" /></svg></button>
                            <button className="btn start-stopwatch" onClick={stopStopwatch}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8.586 8.586C8 9.172 8 10.114 8 12c0 1.886 0 2.828.586 3.414C9.172 16 10.114 16 12 16c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12c0-1.886 0-2.828-.586-3.414C14.828 8 13.886 8 12 8c-1.886 0-2.828 0-3.414.586" clip-rule="evenodd" /></svg></button>
                            <button className="btn reset-stopwatch" onClick={resetStopwatch}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3.935-16.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.169 4.169 0 0 0 5.998 0a4.394 4.394 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77c.406 0 .742.325.703.729a5.897 5.897 0 0 1-1.65 3.562a5.669 5.669 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.666 5.666 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17" clip-rule="evenodd" /></svg></button>
                            <button className="btn back-btn flex items-center justify-center" onClick={() => setView('clock')}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06" clip-rule="evenodd" /></svg> Back</button>
                        </div>
                    </div>
                )}

                {view === 'timer' && (
                    <div className="timer">
                        <div className="wrapper-1">
                            <div className="main">
                                <div className="hour">
                                    <p className="number" id="timer-hour">{addTrailingZero(timer.hours)}</p>
                                    <p>hours</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="min">
                                    <p className="number" id="timer-min">{addTrailingZero(timer.minutes)}</p>
                                    <p>minutes</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="sec">
                                    <p className="number" id="timer-sec">{addTrailingZero(timer.seconds)}</p>
                                    <p>seconds</p>
                                </div>
                                <p className="colon">:</p>
                                <div className="ms">
                                    <p className="number" id="timer-ms">{addTrailingZero(timer.milliseconds)}</p>
                                    <p>miliseconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="btns mt-44">
                            <button className="btn start-timer" onClick={startTimer}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M9.25 2.75A.75.75 0 0 1 10 2h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m11.75 11a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-7.974-2.725a14.502 14.502 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617c-.48.36-.524 1.116-.612 2.628c-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.132 2.267.612 2.628c.481.361 1.018.035 2.09-.617c.278-.169.547-.341.784-.508c.27-.19.565-.418.862-.66c1.075-.877 1.612-1.315 1.612-2.065s-.537-1.188-1.612-2.065c-.297-.242-.591-.47-.862-.66" clip-rule="evenodd" /></svg></button>
                            <button className="btn stop-timer" onClick={stopTimer}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8.586 8.586C8 9.172 8 10.114 8 12c0 1.886 0 2.828.586 3.414C9.172 16 10.114 16 12 16c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12c0-1.886 0-2.828-.586-3.414C14.828 8 13.886 8 12 8c-1.886 0-2.828 0-3.414.586" clip-rule="evenodd" /></svg></button>
                            <button className="btn reset-timer" onClick={resetTimer}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3.935-16.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.169 4.169 0 0 0 5.998 0a4.394 4.394 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77c.406 0 .742.325.703.729a5.897 5.897 0 0 1-1.65 3.562a5.669 5.669 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.666 5.666 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17" clip-rule="evenodd" /></svg></button>
                            <button className="btn back-btn flex items-center justify-center" onClick={() => setView('clock')}><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="#9f8c14" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06" clip-rule="evenodd" /></svg> Back</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountDown;
