import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";

const Modal = () => {
  const dispatch = useDispatch(); // 디스패치를 사용하여 액션을 보냄
  const { modalType, task } = useSelector((state) => state.modal);
  // console.log(modalType, task);

  const handleClose = () => {
    dispatch(closeModal()); // 모달을 닫는 액션 디스패치
  };

  const showModalTitle = (modalType, str1, str2, str3) => {
    switch (modalType) {
      case "update":
        return str1;
      case "details":
        return str2;
      default:
        return str3;
    }
  };

  const modalTitle = showModalTitle(
    modalType,
    "할일 수정하기",
    "할일 상세보기",
    "할일 추가하기"
  );

  return (
    <div className="modal fixed bg-black bg-opacity-50 w-full h-full left-0 top-0 flex items-center justify-center z-50">
      <div className="form-wrapper bg-gray-700 rounded-md w-1/2 h-[40vh] relative p-4">
        <h2 className="text-xl py-2 border-b border-gray-300 w-fit font-semibold">
          {modalTitle}
        </h2>
        <IoMdClose
          className="absolute right-5 top-5 cursor-pointer"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default Modal;