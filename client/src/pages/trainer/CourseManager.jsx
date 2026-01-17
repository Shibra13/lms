import React from 'react';
import Card from '../../components/ui/Card';

const CourseManager = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Course Module</h1>
            <Card className="!max-w-full">
                <p>View courses, manage enrollments, and edit course sections here.</p>
            </Card>
        </div>
    );
};
export default CourseManager;
