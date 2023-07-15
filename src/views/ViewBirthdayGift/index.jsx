import React, { useState } from "react";
import "./birthDay.scss";
import { IMAGE_URL } from "./imageURL";

const ViewBirthdayGift = () => {
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <>
      <div class="wrapper">
        <div class="lid one"></div>
        <div class="lid two"></div>
        <div class="envelope"></div>
        <div onClick={() => setOpenLetter(true)} class="letter cursor-pointer">
          <p>Hello em yêu</p>
        </div>
        <img />
      </div>

      {openLetter && (
        <div onClick={() => setOpenLetter(false)} className="full-letter">
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="content"
          >
            <p>
              Gửi{" "}
              <span className="font-semibold">
                em bé Kaylin,
                người anh thương, người vợ tương lai của anh,
              </span>
            </p>
            <p>
              Đây là bức thư được viết bằng code cũng là món quà bất ngờ anh ấp
              ủ cả tháng trời để tạo bất ngờ cho em vào dịp sinh nhật này, có
              thể em nghĩ mấy cái này dễ làm nhanh mà nhưng mà anh làm mấy cái
              này bằng code chay nên cần rất nhiều thời gian nghiên cứu thế nên
              phải plan từ rất lâu.
            </p>
            <p>
              Dịp sinh nhật nào cũng sẽ đặc biệt nhưng đối với anh dịp đặc biệt
              nhất sẽ là hôm nay vì đây là sinh nhật đầu tiên em với anh có
              nhau, trải qua bao nhiêu là chuyện cãi nhau, giận hờn có, chia tay
              cũng có nhưng mà mình vẫn sát cánh cùng nhau. Anh muốn đây sẽ là
              lá thư mang nhiều năng lượng tích cực nên anh sẽ không nói
              những chuyện không hay, anh chỉ muốn chúc em hôm nay sẽ là ngày
              tuyệt vời nhất của em, những điều em mong muốn hay ước nguyện sẽ
              thành hiện thực, những nỗi buồn chóng qua đi những điều tươi mới
              sẽ đến. Anh với tư cách là người bảo vệ em, người em trao niềm tin
              tưởng, là bờ vai gánh vác gia đình nhỏ anh hứa sẽ cố gắng hết sức
              mình, cố gắng thật nhiều để cuộc sống của tụi mình sau này sẽ ấm
              no hạnh phúc và tất nhiên có cả các đứa nhỏ, các em của em, bố mẹ
              của em và cả gia đình của anh. Em là người con gái cả, anh là
              người con trai duy nhất anh đã dự đoán trước được tương lai có bao
              nhiêu thử thách đang chờ đợi, sẽ khó cho hai đứa mình lắm đây
              nhưng không sao, miễn anh còn có em thì anh vẫn tiếp tục bước lên. Anh sẽ vì chúng ta, hãy tin tưởng
              anh!
            </p>
            <p>
              Thêm một điều nữa anh viết lá thư này bằng code em đừng nghĩ nó
              hời hợt nha nó làm anh mất nhiều ngày suy nghĩ ý tưởng á, và phải
              bắt tay vào nghiên cứu, nhìn nó đơn sơ đơn điệu nhưng mà anh cũng
              bỏ ra khá nhiều thời gian nghiên cứu, tất cả chỉ với mong muốn anh có thể làm cho em một cái gì đó thật hay thật bất ngờ cho em vì tụi mình đang ở khoản cách xa, đây là cách anh bù đắp em đừng chê nhaaa! Miễn khi nào em còn giữ
              đường dẫn này thì lá thư này vẫn còn mãi tồn tại, anh muốn ngày
              sinh này thiệt là đặc biệt nên anh viết nó. Thư truyển thống,
              email sẽ không đặc biệt bằng một lá thư viết bằng code đúng không
              em (anh mong em cũng nghĩ thế haha), có được ông bồ IT thì phải khác em nhỉ.
            </p>

            <p>
              Lời cuối cùng, anh chúc em có được tất cả những điều em nguyện ước
              và sẽ thành công trong tương lai. Anh yêu em, mãi mãi yêu em.
            </p>
            <p className="text-right">
              Anh yêu của em,{" "}
              <span className="font-sans italic font-semibold">Rồng Đen</span>
            </p>

            <div className="mt-32 mb-96">Kéo xuống đi chưa hết đâu...</div>

            <p>Những tấm hình với các cột mốc của tụi mình nè em:</p>
            <div className="grid grid-cols-2">
              {IMAGE_URL.map((i) => (
                <img src={i} key={i} alt="" className="max-w-full" />
              ))}
            </div>

            <button onClick={() => setOpenLetter(false)} className="bg-pink-400 px-4 py-1 rounded-lg text-white w-full my-4">Đóng</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewBirthdayGift;
