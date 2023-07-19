import { Button, DatePicker, Modal } from "antd";
import dayjs from "dayjs";
import React, { ChangeEvent, useState } from "react";
import background from "../image/bg.png";
import payment1 from "../image/img-payment.png";
import vector from "../image/Vector.png";
import calendarImg from "../image/calendar.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createFormData } from "../redux/slice/homeSlice";
import sad from "../image/sad.png";
import { CloseCircleOutlined } from "@ant-design/icons";

const Payment = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState({
    numCard: "",
    name: "",
    dateIsage: date,
    cvv: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const location = useLocation();
  const formData = location.state.formData;

  const handleDateChange = (e: any) => {
    setDate(dayjs(e).format("DD/MM/YYYY"));
  };

  const price = Number(formData.quantity) * Number(formData.price);
  const totalPrice =
    price.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " vnđ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data?.numCard || !data.name || !data.cvv) {
      showModal();

      return;
    } else {
    }

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
                          disabled
                        />
                      </div>

                      <div className="form-input-left-2">
                        <p className="label">Số lượng vé</p>
                        <input
                          type="text"
                          className="input-leftbox-2"
                          defaultValue={formData.quantity ?? ""}
                          disabled
                        />
                        <p className="ticket">vé</p>
                      </div>

                      <div className="form-input-left-3">
                        <p className="label">Ngày sử dụng</p>
                        <input
                          type="text"
                          className="input-leftbox-3"
                          defaultValue={formData.date ?? ""}
                          disabled
                        />
                      </div>

                      <div className="form-input-left-4">
                        <p className="label">Thông tin liên hệ</p>
                        <input
                          type="text"
                          className="input-leftbox-4"
                          defaultValue={formData.name ?? ""}
                          disabled
                        />
                      </div>

                      <div className="form-input-left-5">
                        <p className="label">Điện thoại</p>
                        <input
                          type="text"
                          className="input-leftbox-5"
                          defaultValue={formData.phone ?? ""}
                          disabled
                        />
                      </div>

                      <div className="form-input-left-6">
                        <p className="label">Email</p>
                        <input
                          type="text"
                          className="input-leftbox-6"
                          defaultValue={formData.email ?? ""}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Modal
                title={<span className="BgModalErrorPay"></span>}
                open={isModalOpen}
                wrapClassName="custom-model"
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                style={{ padding: 0 }}
                bodyStyle={{ padding: 0 }}
                closeIcon={
                  <CloseCircleOutlined
                    style={{
                      opacity: "0",
                    }}
                  />
                }
              >
                <p style={{ padding: "14px 30px 0px", fontSize: "15px" }}>
                  Hình như đã có lỗi xảy ra khi thanh toán...
                  <br /> Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ
                  và thử lại.
                </p>
                <img src={sad} alt="" className="sadImg" />
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
                            value={data.numCard}
                            name="numCard"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-input2">
                          <p className="label">Họ và tên chủ thẻ</p>
                          <input
                            type="text"
                            className="input-rightbox-2"
                            value={data.name}
                            name="name"
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-input3">
                          <p className="label">Ngày hết hạn</p>

                          <input
                            type="text"
                            className="input-rightbox-3"
                            name="dateIsage"
                            value={date}
                            onChange={handleChange}
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
                            value={data?.cvv}
                            onChange={handleChange}
                            name="cvv"
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
