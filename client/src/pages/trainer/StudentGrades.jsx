import React from 'react';
import Card from '../../components/ui/Card';

const StudentGrades = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Student Grades</h1>
            <Card className="!max-w-full">
                <p>View and manage task marks, quiz marks, and final grades.</p>
            </Card>
        </div>
    );
};
export default StudentGrades;
