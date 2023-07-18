import { Modal } from "antd";
import React, { useState } from "react";
import background from "../image/bg.png";
import contact1 from "../image/img-contact-1.png";
import loaction1 from "../image/location-contact.png";
import email1 from "../image/email-contact.png";
import phone1 from "../image/phone.png";
import { useDispatch } from "react-redux";
import { Contacts, createFormData } from "../redux/slice/contactSlice";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch: any = useDispatch();
  const [data, setData] = useState<Contacts>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const onChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
  showModal()

   await dispatch(createFormData(data));
    console.log(data);
  };

  return (
    <div>
      <div className="content">
        <div className="contact">
          <div className="main">
            <img src={background} alt="" className="img-bg" />
            <div className="title-contact">
              <p className="text-title">Liên hệ</p>
            </div>
            <div className="content-main">
              <div className="left-box1-contact">
                <div className="left-box2-contact">
                  <div className="left-box3-contact">
                    <div className="left-box4-contact">
                      <div
                        className="text-top"
                        style={{ marginLeft: "7px", paddingRight: "30px" }}
                      >
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse ac mollis justo. Etiam volutpat
                          tellus quis risus volutpat, ut posuere ex facilisis.
                        </p>
                      </div>

                      <div className="form-input-contact">
                        <div className="box-name">
                          <input
                            type="text"
                            placeholder="Tên"
                            className="input-contact-name"
                            value={data.name}
                            onChange={onChangeContact}
                            name="name"
                          />
                        </div>
                        <div className="box-email">
                          <input
                            type="email"
                            placeholder="Email"
                            className="input-contact-email"
                            value={data.email}
                            onChange={onChangeContact}
                            name="email"
                          />
                        </div>

                        <div className="box-phone">
                          <input
                            type="text"
                            placeholder="Số điện thoại"
                            className="input-contact-phone"
                            value={data.phone}
                            onChange={onChangeContact}
                            name="phone"
                          />
                        </div>

                        <div className="box-address">
                          <input
                            type="text"
                            placeholder="Địa chỉ"
                            className="input-contact-address"
                            value={data.address}
                            onChange={onChangeContact}
                            name="address"
                          />
                        </div>

                        <div className="box-mess">
                          <input
                            type="text"
                            placeholder="Lời nhắn"
                            className="input-contact-mess"
                            value={data.message}
                            onChange={onChangeContact}
                            name="message"
                          />
                        </div>

                        <div className="button-contact">
                          <button
                            className="btn-contact"
                            
                            // onClick={handleClick}
                            onClick={handleSubmit}
                            
                          >
                            Gửi liên hệ
                          </button>
                          <Modal
                            open={isModalOpen}
                            cancelText={false}
                            onCancel={handleCancel}
                            footer={null}
                          >
                            <p className="text-modal">
                              Gửi liên hệ thành công. <br /> Vui lòng kiên nhẫn
                              đợi phản hồi từ chúng tôi, bạn nhé!
                            </p>
                          </Modal>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="img-contact">
                <img src={contact1} alt="" className="img1" />
              </div>

              <div className="box-right-contact">
                <div className="box-right-address">
                  <div className="box-right-address-1">
                    <div className="box-right-address-2">
                      <div className="box-right-address-3">
                        <p className="address-br-contact">Địa chỉ:</p>
                        <p className="address-br-contact-text">
                          86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh
                        </p>

                        <img
                          src={loaction1}
                          alt=""
                          className="icon-location-contact"
                        />
                        <div className="circle-address"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="box-right-email">
                  <div className="box-right-email-1">
                    <div className="box-right-email-2">
                      <div className="box-right-email-3">
                        <p className="email-br-contact ">Email:</p>
                        <p className="email-br-contact-text">
                          investigate@your-site.com
                        </p>
                        <img
                          src={email1}
                          alt=""
                          className="icon-email-contact"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="box-right-phone">
                  <div className="box-right-phone-1">
                    <div className="box-right-phone-2">
                      <div className="box-right-phone-3">
                        <p className="phone-br-contact">Điện thoại:</p>
                        <p className="phone-br-contact-text">
                          +84 145 689 798{" "}
                        </p>
                        <img
                          src={phone1}
                          alt=""
                          className="icon-phone-contact"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
