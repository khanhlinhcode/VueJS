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
