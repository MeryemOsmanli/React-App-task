import "./App.css";
import ModeChange from "./components/dark-light mode/ModeChange";
import FetchData from "./components/fetchdata/FetchData";
// import EditTodo from "./components/edit/EditTodo";
// import CompleteTodo from "./components/complete/CompleteTodo";
// import DeleteTodos from "./components/deletetodos/DeleteTodos";
// import Input from "./components/input/Input";
// import ThreeInput from "./components/threeinput/ThreeInput";
// import Todos from "./components/todos/Todos";
// import Navbar from "../src/components/navbar/Navbar";
// import Container from "./components/container/Container";
// import datas from "./components/data/Data";
// import Modal from "./components/modal/Modal";

function App() {
  return (
    <>
      <div className="parent">
        {/* <Container sendData={datas} /> */}
        {/* <Navbar /> */}
        {/* <Input /> */}
        {/* <Todos /> */}
        {/* <ThreeInput /> */}
        {/* <DeleteTodos /> */}
        {/* <CompleteTodo /> */}
        {/* <EditTodo /> */}
        {/* <ModeChange /> */}
        <FetchData/>
      </div>
    </>
  );
}

export default App;
