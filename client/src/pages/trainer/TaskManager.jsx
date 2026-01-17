import React from 'react';
import Card from '../../components/ui/Card';

const TaskManager = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Task Module</h1>
            <Card className="!max-w-full">
                <p>Create tasks and grade student submissions here.</p>
            </Card>
        </div>
    );
};
export default TaskManager;
