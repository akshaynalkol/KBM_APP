import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import './Quiz.css';

import play from '../Sounds/play.mp3';
import correct from '../Sounds/correct.mp3';
import wrong from '../Sounds/wrong.mp3';


export default function Quiz({ data, setStop, questionNo, setQuestionNo }) {
    const [question, setQuestion] = useState(null);
    const [selectdAnswere, setSelectedAnswere] = useState(null);
    const [className, setClassName] = useState(null);
    const [letsPlay] = useSound(play);
    const [correctAnswere] = useSound(correct);
    const [wrongAnswere] = useSound(wrong);

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    useEffect(() => {
        if (questionNo === 16) {
            setStop(true);
        }
        setQuestion(data[questionNo - 1]);
    }, [data, questionNo]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    }

    const handleClick = (ans) => {
        setSelectedAnswere(ans)
        setClassName('active');
        delay(3000, () => setClassName(ans.correct ? 'correct' : "wrong"));
        delay(5000, () => {
            if (ans.correct) {
                correctAnswere();
                delay(1000, () => {
                    setQuestionNo(prev => prev + 1);
                    setSelectedAnswere(null);
                });
            }
            else {
                wrongAnswere();
                delay(1000, () => {
                    setStop(true);
                })
            }
        });
    }

    return (
        <>
            <div className="d-flex flex-column justify-content-evenly align-items-center h-100">
                <div className="question text-center border border-1 rounded border-white p-3 mb-md-0 mb-3">
                    {question?.question}
                </div>
                <div className="answere row g-3">
                    {
                        question?.answere.map((val, index) => {
                            return (
                                <div key={index} className="col-md-6">
                                    <div className={`ans rounded-4 ${selectdAnswere === val ? className : ''}`}
                                        onClick={() => handleClick(val)}>{val.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}