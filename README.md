# Atomic Desgin
Gồm 5 giai đoạn:
- Atoms > Molecules > Organisms > Templates > Pages


1, Atoms: Là khối xây dựng cơ bản nhất trong giao diện
- Gồm các phần tử HTML cơ bản
- Là các phần tử mà không thể chia nhỏ thêm được nữa
Folder: atoms
VD: Button.js , Input.js , Image.js , Label.js , ...

2, Molecules: Là những nhóm liên kết với nhau và là những đơn vị cơ bản nhỏ nhất của 1 khối ( Nhóm chứa liên kết Group các Atoms )
- Đóng vai trò là xương sống của Atomic DS
Folder: molecules
VD:
  + GroupCheckbox.js: Chứa nhiều Checkbox
  + GroupSearch.js: Chứ Button và Input
  ...

3. Organisms: Thực hiện kết hợp các Molecules để tạo thành các phần giao diện
Folder: organisms
VD: Tạo ra 1 Header có Logo, Menu, Search
  Header          => Organisms
    Logo          => Molecules
    Menu          => Molecules
    Search        => Molecules

4, Templates: Là việc đặt các Organisms để tạo thành các bố cục, cấu trúc của 1 page
Folder: templates
VD: Trang ExampleTemplate: Header, BreadCrumb, Content, Footer
  ExampleTemplate          => Templates
    Header      => Organisms
    BreadCrumb  => Organisms
    Content     => Organisms
    Footer      => Organisms

5, Pages: là các trường hợp cụ thể của các templates, các nội dung ô chứa sẽ được thay thế bằng nội dung mô tả chính xác
Folder: pages
VD: page Example.js

Kết hợp React cần chú ý: ( Để có thể tái sử dụng lại nhiều hơn )
- Atomic Design nên có một file chứa tất cả biến và nó phải được import trong mỗi component
- Atom nên được viết mà không có margin và position
- Chỉ molecule và organism có thể được cài đặt position của atom, nhưng những khối này cũng không thể style cho margin và position.
- Template chỉ có một chức năng: đó là cài đặt bố cục cho page, nhưng không có vị trí cụ thể cho component.
- Page sẽ render các component dựa theo một template đã được định nghĩa sẵn và từ đây, Atomic Design sẽ được kết nối đến toàn bộ phần còn lại của app.
