import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const TrainerDashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <h1 className="text-xl font-bold text-primary-600">LMS Trainer</h1>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">Logged in as {user?.role}</span>
                            <Button
                                variant="secondary"
                                onClick={logout}
                                className="!w-auto !py-2 !px-4"
                            >
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Trainer Dashboard</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Button onClick={() => window.location.href = '/trainer/courses'}>Course Module</Button>
                        <Button onClick={() => window.location.href = '/trainer/content'}>Content Module</Button>
                        <Button onClick={() => window.location.href = '/trainer/tasks'}>Task Module</Button>
                        <Button onClick={() => window.location.href = '/trainer/grades'}>Student Grades</Button>
                        <Button onClick={() => window.location.href = '/trainer/feedback'}>Feedback Review</Button>
                    </div>

                    <p className="text-gray-600">
                        This is the protected dashboard for trainers. Only users with the 'trainer' role can see this.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="h-64 bg-primary-50 rounded-xl border border-primary-100 p-6 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-primary-600 mb-2">0</span>
                            <span className="text-gray-500">Active Students</span>
                        </div>
                        <div className="h-64 bg-primary-50 rounded-xl border border-primary-100 p-6 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-primary-600 mb-2">0</span>
                            <span className="text-gray-500">Courses Published</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TrainerDashboard;
