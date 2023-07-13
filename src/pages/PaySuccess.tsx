import React from "react";
import background from "../image/bg.png";
import imgSuccess from "../image/paysuces.png";
import arrowLeft from "../image/arrow-left.png";
import arrowRight from "../image/arrow-right.png";
import imgQR from "../image/qr1.png";
import tick from "../image/tick.png";
const PaySuccess = () => {
  return (
    <div>
      <div className="content">
        <div className="main-home">
          <div className="payment-success">
            <img src={background} alt="" className="img-bg" />
            <div className="title">
              <p className="text-title-payment">Thanh toán thành công</p>
            </div>

            <div className="content-main">
              <div className="left-box1">
                <div className="left-box2">
                  <div className="left-box3">
                    <div className="left-box4">
                      <div className="row">
                        <div className="col-3">
                          <img src={imgQR} alt="" className="img-QR" />
                          <p className="name-QR">ALT20210501</p>
                          <p className="des-QR">VÉ CỔNG</p>
                          <p className="bor-QR">---</p>
                          <p className="date-QR">Ngày sử dụng: 31/05/2021</p>
                          <img src={tick} alt="" className="tick-QR" />
                        </div>
                      </div>
                      <button className="arrow-left-events" type="submit">
                        <img
                          src={arrowLeft}
                          alt=""
                          className="icon-left-events"
                        />
                      </button>

                      <button className="arrow-right-events" type="submit">
                        <img
                          src={arrowRight}
                          alt=""
                          className="icon-right-events"
                        />
                      </button>
                    </div>
                  </div>
                  <p className="quantity">Số lượng : 12 vé</p>
                  <p className="count-page">Trang 1/3</p>
                </div>
              </div>
              <img src={imgSuccess} alt="" className="imgSuccess" />
              <div className="button-download">
                <button className="btn-download" type="submit">
                  Tải về
                </button>
              </div>

              <div className="button-email">
                <button className="btn-email" type="submit">
                  Gửi Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaySuccess;
