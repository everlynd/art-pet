import { useEffect, useState } from 'react';

interface TimerProps {
    deadline: string;
}

export const ExpiresTimer = ({ deadline }: TimerProps) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getTime = (deadline: string) => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div>
                <div style={{ fontSize: '16px' }}>{days}</div>
                <div style={{ fontSize: '13px' }}>Day</div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600' }}>:</div>
            <div>
                <div style={{ fontSize: '16px' }}>{hours}</div>
                <div style={{ fontSize: '13px' }}>Hrs</div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600' }}>:</div>
            <div>
                <div style={{ fontSize: '16px' }}>{minutes}</div>
                <div style={{ fontSize: '13px' }}>Min</div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600' }}>:</div>
            <div>
                <div style={{ fontSize: '16px' }}>{seconds}</div>
                <div style={{ fontSize: '13px' }}>Sec</div>
            </div>
        </>
    );
};
