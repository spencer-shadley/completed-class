import React from 'react';
import useStudentList from '../utils/useStudentList';

function StudentListCustomHooks() {
    const [students] = useStudentList();

    return <>
            {students.map(student => {
                return <div key={Math.random()}>{student}</div>;
            })}
        </>
}

export default StudentListCustomHooks;