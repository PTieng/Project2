import React, { useEffect, useState } from "react";
import background from "../image/bg.png";
import imgSuccess from "../image/paysuces.png";
import arrowLeft from "../image/arrow-left.png";
import arrowRight from "../image/arrow-right.png";
import imgQR from "../image/qr1.png";
import tick from "../image/tick.png";
// import {  useAppDispatch } from "../redux/store/store";
import { HomeInput } from "../redux/slice/homeSlice";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

const PaySuccess = () => {
  // const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<HomeInput | null>(null);

  useEffect(() => {
    const docRef = firestore.collection("bookTickets").doc(id);
    const fetData = async () => {
      try {
        const dataU = await docRef.get();
        if (dataU) {
          setData(dataU.data() as HomeInput);
        } else {
          console.log("error");
        }
      } catch (err) {}
    };
    fetData();
  }, [id]);

  console.log(data);

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
                        {data && data.quantity > 0 ? (
                          Array.from({ length: data.quantity }).map(
                            (_, index) => (
                              <div
                                className="col-3"
                                style={{ marginRight: "13px" }}
                                key={index}
                              >
                                <img src={imgQR} alt="" className="img-QR" />
                                <p className="name-QR">ALT20210501</p>
                                <p className="des-QR">VÉ CỔNG</p>
                                <p className="bor-QR">---</p>
                                <p className="date-QR">
                                  Ngày sử dụng: {data.date}
                                </p>
                                <img src={tick} alt="" className="tick-QR" />
                              </div>
                            )
                          )
                        ) : (
                          <p>No tickets found.</p>
                        )}
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
                  <p className="quantity">Số lượng : {data?.quantity} vé</p>
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
