import API from '../utils/API';
import { useEffect, useState } from 'react';

export default function useStudentList() {
    const [students, setStudents] = useState(['Spencer']);

    useEffect(() => {
        window.setInterval(() => {
            setStudents(API.findUpdatedStudents());
        }, 2000)
    }, []);

    return [students, setStudents];
}
