<!--
    - cách cài đặt
    - VueInstance
    - data và method => dữ liệu và hàm,
    - dữ liệu dành cho cái thành phần mà nó quản lí, hoặc mình quản lí sản phẩm nào đó hiển thị lên trang web sp có thông tin nào thì mình phải khai báo data bên vueinstance
    - hệ thống phản ứng Reactivity - giúp chúng ta giám sát thuộc tính này xem có bất cứ sự thay đổi về dữ liệu nó sẽ tự động cập nhật render ra giao diện
    - method là hàm hỗ trợ trong quá trình tính toán của mình
 -->

<!--
    - vừa là web tĩnh vừa làm tương tác với sever
    - Data binding (ràng buộc dữ liệu)
    - javascript Expression (sử dụng biểu thức javascript trong vuejs)
  -->

<!--
    - khai báo event cho sự kiện có hai trường hợp code nó thực thi,
        + một là lần đầu ngừoi dùng tải trang
        + hai là tải lại trang khi nó nhận được sự tương tác của người dùng bao gồm các sư kiện như là click, mousemove, mouseover, mouseleave,
        + sự dụng cái từ khoá là v-on để lắng nghe cái sự kiện khi lắng nghe xong nó sẽ chạy một số đoạn code thông qua một số function nào đó
   -->
<!--
      - xử lí sự kiện trong javasript thông thường nhưng sử dụng cái này thì sẽ giảm được một số đoạn code
      - do khi đăng nhập bằng submit thông thường thì nó sẽ bị chuyển hướng đi còn mình hiện tại đang hướng tới singel page application thì sẽ không cho nó chuyển hưởng mà submit mình phải xử lí nó và sử dụng tới cái tính chất quen thuộc của javascript là "preventdefault" -> nó sẽ ngăn chặn cái sự kiện mặc định của phần tử đó về form cái phần tử mặc định của nó sẽ gửi dữ liệu lên serve
      - nhưng mà vue cung cấp một Event modifier để mình không cần phải viết lại
      - hoặc sử dụng một phần tử khác đó chính là "stoppropagation" -> ngăn chặn sự kiện đó lan toả ra phần tử cha sử dụng khi add thuộc tính cho phần tử con khi phần tử con chạy thì nó cũng sẽ gây ảnh hưởng lan toả lên phần tử cha
   -->
<!--
      key modifier khi mình nhấn enter thì code sẽ chạy, còn thông thường thì mình phải kiểm tra cái key code mà người dùng nhập vào, bây giờ vue nó chỉ quan tâm tới logic xử lí form còn các vấn đề về key thì xử dụng key modifier
     -->
<!--
    computed là thuộc tính truyền vào đối tượng Vue và nó sẽ có nhiêu thuộc tính bên trong và mỗi thuộc tính là một function và nó sẽ được set trên dữ liệu có sẵn, dựa trên data
    - nó cũng giống như là methods nhưng khác nhau một chỗ là nó phải là là một cái lời gọi hàm và thêm (),
    - tại sao phải sử dụng cái computed vì các hàm thông thường nó sẽ chạy các hàm không mong muốn khi code không liên quan làm giảm cái hiệu xuất người dùng và hiệu xuất chương trình
    - nó được khai báo như một hàm nhưng mà nó sẽ được lưu vào đối tượng vue và hàm thực thi khi dữ liệu trong này bị thay đổi thôi, biến nào trong đó thay đổi thì mới gọi còn không thì không gọi, tốc độ chương trình sẽ được tăng hơn sử dụng methods
 -->
<!-- ràng buộc dữ liệu hai chiều dữ liệu hai chiều được thể hiện ở chỗ dữ liệu của mình sẽ được gán vào ô input và đồng thời ô input cũng ràng buộc cai dữ liệu mà người dùng nhập vào, Vue cũng cung cấp một cái chỉ thị để thực hiện cái này nhanh hơn thông qua v-model
 -->
<!-- class and style Bindings ràng buộc class và style bản chất nó     cũng là một attribute áp dụng chỉ thị v-bind
    - về Binding inline style để ràng buộc object thay đổi cái style mặc định của phần tử key của object là tên của thuộc tính trong css viết theo cammocare, lưu ý khi lên mạng lấy link thì mình sẽ copy bằng open image in new tab, lấy link url bỏ vào cái tham số backgroud giả lập lấy từ sever và bỏ vào một biến nếu mình muốn hiển thị ra ngoài phải có v-bing để ràng buộc biến ra ngoài, sửa chữ i trong image thành in hoa, đưa vào object lun có thuộc tính là backgroudImage:co giá trị là cái ảnh nếu ở dưới data có link ảnh và muốn lấy qua {{ backgroundImage:'url'(' + bg + ')'}} thì mình phải nối chuỗi chứ không đuọc viết như bình thường nếu viết bình thường nó sẽ hiểu là một cái chuỗi, lúc này cái bg sẽ thành một biến khi render ra chuõi này nó sẽ gắn với cái biến bg để rende ra
 -->
<!--
    Biểu thức điều kiện trong vue nó dùng dể render ra các phần tử hTML nào đó theo điều kiện nhất định v-if(sử dụng nhiều), v-else, v-else-if(chỉ thị mới) trong tư duy vue rất đơn giản ta tạo ra một cái biến
 -->
<!-- list Rendering(vong lap)
    khi ta có lượng dữ liệu đỗ về từ sever thì nhiệm vụ của mình là render ra được cái mảng đó vào html là xong, sử dụng v-for,
    ==> lưu ý về v-for, v-if cũng như mức độ ưu tiên:
 -->
<!--
    ôn về vùng nhớ trog javascript 
    - array: bảng chất nó là **object**
  -->
