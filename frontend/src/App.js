import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';

import './App.css';
import Landing from './pages/shared/Landing/Landing';
import Login from './pages/shared/Login/Login';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import UpdateProfilePage from './pages/UpdateProfilePage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import CategoriesPage from './pages/CategoriesPage';
import QuizPage from './pages/QuizPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminCategoriesPage from './pages/AdminCategoriesPage';
import AdminAddCategoryPage from './pages/AdminAddCategoryPage';
import AddWord from './pages/admin/AddWord/AddWord';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/profile/update" exact component={UpdateProfilePage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/users/:id" exact component={UserPage} />
          <Route path="/categories" exact component={CategoriesPage} />
          <Route path="/categories/:id" exact component={QuizPage} />
          <Route path="/admin/dashboard" exact component={AdminDashboardPage} />
          <Route path="/admin/categories" exact component={AdminCategoriesPage} />
          <Route path="/admin/categories/category/add" exact component={AdminAddCategoryPage} />
          <Route path="/admin/categories/category/word/add" exact component={AddWord} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
