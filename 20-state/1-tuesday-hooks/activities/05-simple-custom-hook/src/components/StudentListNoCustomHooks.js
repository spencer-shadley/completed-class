import API from '../utils/API';
import React from 'react';
import { useEffect, useState } from 'react';

function StudentListNoCustomHooks() {
    const [students, setStudents] = useState(['Spencer']);

    useEffect(() => {
        window.setInterval(() => {
            setStudents(API.findUpdatedStudents());
        }, 2000)
    }, []);

    return <>
            {students.map(student => {
                return <div key={Math.random()}>{student}</div>;
            })}
        </>
}

export default StudentListNoCustomHooks;