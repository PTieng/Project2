import React, { useEffect, useState } from "react";
import background from "../image/bg.png";
import imgSuccess from "../image/paysuces.png";
import arrowLeft from "../image/arrow-left.png";
import arrowRight from "../image/arrow-right.png";
import imgQR from "../image/qr1.png";
import tick from "../image/tick.png";
import { HomeInput } from "../redux/slice/homeSlice";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";

const PaySuccess = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<HomeInput | null>(null);

  useEffect(() => {
    const docRef = firestore.collection("bookings").doc(id);
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
  const nameTicket = "ALT20210501";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = data?.quantity
    ? Array.from({ length: data.quantity }).slice(startIndex, endIndex)
    : [];
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

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
                        {visibleItems.length > 0 ? (
                          visibleItems.map(() => (
                            <div
                              className="col-3"
                              style={{ marginRight: "13px" }}
                              key={data?.id}
                            >
                              <img src={imgQR} alt="" className="img-QR" />
                              <p className="name-QR">{nameTicket}</p>
                              <p className="des-QR">VÉ CỔNG</p>
                              <p className="bor-QR">---</p>
                              <p className="date-QR">
                                Ngày sử dụng: {data?.date}
                              </p>
                              <img src={tick} alt="" className="tick-QR" />
                            </div>
                          ))
                        ) : (
                          <p className="no-tickets">No tickets found.</p>
                        )}
                      </div>
                      <button
                        className="arrow-left-events"
                        type="submit"
                        onClick={handlePrevPage}
                        id="prev"
                        disabled={currentPage === 1}
                      >
                        <img
                          src={arrowLeft}
                          alt=""
                          className="icon-left-events"
                        />
                      </button>

                      <button
                        className="arrow-right-events"
                        type="submit"
                        onClick={handleNextPage}
                        id="next"
                        disabled={endIndex >= (data?.quantity ?? 0)}
                      >
                        <img
                          src={arrowRight}
                          alt=""
                          className="icon-right-events"
                        />
                      </button>
                    </div>
                  </div>
                  <p className="quantity">Số lượng : {data?.quantity} vé</p>
                  <p className="count-page">
                    Trang {currentPage}/
                    {Math.ceil((data?.quantity ?? 0) / itemsPerPage)}
                  </p>
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
