import { Button, DatePicker, Modal } from "antd";
import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import background from "../image/bg.png";
import payment1 from "../image/img-payment.png";
import vector from "../image/Vector.png";
import calendarImg from "../image/calendar.png";
// import { FormDataContext } from "./Home";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createFormData } from "../redux/slice/homeSlice";
import sad from "../image/sad.png";

const Payment = () => {
  const [error, setError] = useState(false);
  const [date, setDate] = useState("");
  // const data = useContext(FormDataContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const location = useLocation();
  const formData: any = {
    packages: new URLSearchParams(location.search).get("packages"),
    name: new URLSearchParams(location.search).get("name"),
    quantity: new URLSearchParams(location.search).get("quantity"),
    price: new URLSearchParams(location.search).get("price"),
    email: new URLSearchParams(location.search).get("email"),
    phone: new URLSearchParams(location.search).get("phone"),
    date: new URLSearchParams(location.search).get("date"),
  };

  const handleDateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
  };

  // const handleInputSubmit = () => {
  //   setFormCompleted(!data?.numCard || !data.name || !data.date || !data.cvv);
  // };

  const price = Number(formData.quantity) * Number(formData.price);
  const totalPrice =
    price.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " vnđ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!data?.numCard || !data.name || !data.date || !data.cvv) {
    //   showModal();
    //   return
    // }else {}

    const formInput = {
      ...formData,
      price: totalPrice,
      date: formData.date,
    };
    const response = await dispatch(createFormData(formInput) as any);
    const ticketId = response.payload.id;
    navigate(`/payment/success/${ticketId}`);
  };

  return (
    <div>
      <div className="content">
        <div className="main-home">
          <div className="payment">
            <img src={background} alt="" className="img-bg" />
            <div className="title">
              <p className="text-title-payment">Thanh toán</p>
              <img src={payment1} alt="" className="img6" />
            </div>

            <div className="content-main">
              <div className="left-box1">
                <div className="left-box2">
                  <div className="left-box3">
                    <div className="left-box4">
                      <div className="form-input-left-1">
                        <p className="label">Số tiền thanh toán</p>
                        <input
                          type="text"
                          className="input-leftbox-1"
                          defaultValue={totalPrice}
                        />
                      </div>

                      <div className="form-input-left-2">
                        <p className="label">Số lượng vé</p>
                        <input
                          type="text"
                          className="input-leftbox-2"
                          defaultValue={formData.quantity ?? ""}
                        />
                        <p className="ticket">vé</p>
                      </div>

                      <div className="form-input-left-3">
                        <p className="label">Ngày sử dụng</p>
                        <input
                          type="text"
                          className="input-leftbox-3"
                          defaultValue={formData.date ?? ""}
                        />
                      </div>

                      <div className="form-input-left-4">
                        <p className="label">Thông tin liên hệ</p>
                        <input
                          type="text"
                          className="input-leftbox-4"
                          defaultValue={formData.name ?? ""}
                        />
                      </div>

                      <div className="form-input-left-5">
                        <p className="label">Điện thoại</p>
                        <input
                          type="text"
                          className="input-leftbox-5"
                          defaultValue={formData.phone ?? ""}
                        />
                      </div>

                      <div className="form-input-left-6">
                        <p className="label">Email</p>
                        <input
                          type="text"
                          className="input-leftbox-6"
                          defaultValue={formData.email ?? ""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                open={isModalOpen}
                cancelText={false}
                onCancel={handleCancel}
                footer={null}
              >
                <p className="text-modal">
                  Gửi liên hệ thành công. <br /> Vui lòng kiên nhẫn đợi phản hồi
                  từ chúng tôi, bạn nhé!
                </p>
              </Modal>

              <div className="box-title-left">
                <p className="text">VÉ CỔNG - VÉ GIA ĐÌNH</p>

                <div className="box-title-left2"></div>
              </div>
              <div className="midle-col">
                <img src={vector} alt="" className="img-vector" />
              </div>

              <div className="right-box1">
                <div className="right-box2">
                  <div className="right-box3">
                    <div className="right-box4">
                      <form action="">
                        <div className="form-input1">
                          <p className="label">Số thẻ</p>
                          <input
                            type="text"
                            className="input-rightbox-1"
                            // value={data?.numCard}
                            // onChange={handleInputSubmit}
                          />
                        </div>

                        <div className="form-input2">
                          <p className="label">Họ và tên chủ thẻ</p>
                          <input
                            type="text"
                            className="input-rightbox-2"
                            // value={data?.name}
                            // onChange={handleInputSubmit}
                          />
                        </div>

                        <div className="form-input3">
                          <p className="label">Ngày hết hạn</p>

                          <input
                            type="text"
                            className="input-rightbox-3"
                            defaultValue={date}
                          />
                          <div className="btn-date">
                            <Button className="btndate">
                              <img
                                src={calendarImg}
                                alt=""
                                className="calendar
                                "
                              />
                            </Button>

                            <DatePicker
                              picker="date"
                              className="date"
                              onChange={handleDateChange}
                              style={{
                                width: "80px",
                                height: "50px",
                                opacity: 0,
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-input4">
                          <p className="label">CVV/CVC</p>
                          <input
                            type="password"
                            className="input-rightbox-4"
                            // value={data?.cvv}
                            // onChange={handleInputSubmit}
                          />
                        </div>

                        <div className="box-btn-book">
                          <button
                            className="btn-book"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            THANH TOÁN
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-title-right">
                <p className="text">THÔNG TIN THANH TOÁN</p>

                <div className="box-title-right2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
