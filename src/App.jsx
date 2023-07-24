import 'styles/reset.scss'
import 'styles/base.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from "pages/MainPage/MainPage"
import LoginPage from "pages/LoginPage/LoginPage"
import TrailsPage from "pages/TrailsPage/TrailsPage"
import SingleTrailPage from "pages/SingleTrailPage/SingleTrailPage"
import ReviewsPage from "pages/ReviewsPage/ReviewsPage"
import SingleReviewPage from "pages/SingleReviewPage/SingleReviewPage"
import EditReviewPage from "pages/EditReviewPage/EditReviewPage"
import UserPage from "pages/UserPage/UserPage"
import AdminLoginPage from "pages/AdminLoginPage/AdminLoginPage"
import AdminMainPage from "pages/AdminMainPage/AdminMainPage"
import ErrorPage from "pages/ErrorPage/ErrorPage"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="regist" element={<LoginPage />} />
          <Route path="trail" element={<TrailsPage />} />
          <Route path="trail/:trailID" element={<SingleTrailPage />} />
          <Route path="review" element={<ReviewsPage />} />
          <Route path="review/:reviewID" element={<SingleReviewPage />} />
          <Route path="review/:reviewID/edit" element={<EditReviewPage />} />
          <Route path="newReview" element={<EditReviewPage />} />
          <Route path="user/:userID/notification" element={<UserPage />} />
          <Route path="user/:userID/setting" element={<UserPage />} />
          <Route path="user/:userID/reviewCollection" element={<UserPage />} />
          <Route path="user/:userID/follower" element={<UserPage />} />
          <Route path="user/:userID/following" element={<UserPage />} />
          <Route path="user/:userID/trailCollection" element={<UserPage />} />
          <Route path="user/:userID/myReviews" element={<UserPage />} />
          <Route path="admin/login" element={<AdminLoginPage />} />
          <Route path="admin/allUser" element={<AdminMainPage />} />
          <Route path="admin/blockUser" element={<AdminMainPage />} />
          <Route path="admin/reportReview" element={<AdminMainPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
