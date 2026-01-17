import React from 'react';
import Card from '../../components/ui/Card';

const ContentManager = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Course Content</h1>
            <Card className="!max-w-full">
                <p>Manage lessons, insert videos/PDFs, and update content here.</p>
            </Card>
        </div>
    );
};
export default ContentManager;
