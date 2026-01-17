import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
// Student Pages
import StudentHome from './pages/student/StudentHome';
import CourseLibrary from './pages/student/CourseLibrary';
import CourseDetails from './pages/student/CourseDetails';
import LessonViewer from './pages/student/LessonViewer';
import StudentFeedback from './pages/student/StudentFeedback';
import ProfileSettings from './pages/student/ProfileSettings';

// Trainer Pages
import TrainerDashboard from './pages/trainer/TrainerDashboard';
import CourseManager from './pages/trainer/CourseManager';
import ContentManager from './pages/trainer/ContentManager';
import TaskManager from './pages/trainer/TaskManager';
import StudentGrades from './pages/trainer/StudentGrades';
import FeedbackReview from './pages/trainer/FeedbackReview';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './pages/admin/ManageUsers';
import ManageCourses from './pages/admin/ManageCourses';
import Reports from './pages/admin/Reports';
import Settings from './pages/admin/Settings';

import Unauthorized from './pages/Unauthorized';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Student Routes */}
          <Route element={<ProtectedRoute allowedRoles={['student']} />}>
            <Route path="/student/home" element={<StudentHome />} />
            <Route path="/student/courses" element={<CourseLibrary />} />
            <Route path="/student/course-details" element={<CourseDetails />} />
            <Route path="/student/lessons" element={<LessonViewer />} />
            <Route path="/student/feedback" element={<StudentFeedback />} />
            <Route path="/student/profile" element={<ProfileSettings />} />
          </Route>

          {/* Protected Trainer Routes */}
          <Route element={<ProtectedRoute allowedRoles={['trainer']} />}>
            <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
            <Route path="/trainer/courses" element={<CourseManager />} />
            <Route path="/trainer/content" element={<ContentManager />} />
            <Route path="/trainer/tasks" element={<TaskManager />} />
            <Route path="/trainer/grades" element={<StudentGrades />} />
            <Route path="/trainer/feedback" element={<FeedbackReview />} />
          </Route>

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/courses" element={<ManageCourses />} />
            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
