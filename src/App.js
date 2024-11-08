import React from "react";
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Completed from "./Completed";
import Proceeding from "./Proceeding";
import Important from "./Important";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 
                        Routes안에 이렇게 작성합니다. 
                        Route에는 react-router-dom에서 지원하는 props들이 있습니다.

                        path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
                        element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
                 */}
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/proceeding" element={<Proceeding />} />
          <Route path="/important" element={<Important />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
