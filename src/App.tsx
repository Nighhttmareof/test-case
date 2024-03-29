
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Blog from './components/blog';
import PostPage from './components/postPage';
const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path='/blog' element={<Blog />} />
          <Route path="/blog/posts/:id" element={<PostPage />} />
          <Route path="*" element={<Navigate to="/blog" replace />} />
        </Routes>
        </BrowserRouter>

      </Provider>
    </>
  );
}

export default App;
