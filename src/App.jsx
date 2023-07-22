import "styles/reset.scss"
import "styles/base.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import TrailsPage from "pages/TrailsPage";
import SingleTrailPage from "pages/SingleTrailPage";
import ReviewsPage from "pages/ReviewsPage";
import SingleReviewPage from "pages/SingleReviewPage";
import EditReviewPage from "pages/EditReviewPage";
import UserPage from "pages/UserPage";
import AdminLoginPage from "pages/AdminLoginPage";
import AdminMainPage from "pages/AdminMainPage";
import ErrorPage from "pages/ErrorPage";


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
  );
}

export default App;
