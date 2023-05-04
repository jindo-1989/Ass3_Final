// function handleSubmit() {
//   // lấy giá trị của input email và chuyển sang in thường
//   const emailValue = document
//     .getElementById("email")
//     .valueMax.toLocaleLowerCase();
//   // lấy element của thẻ p hiển thị lỗi
//   const errorEmail = document.getElementById("error-email");
//   // điều kiện để là một email
//   const checkMail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   // dùng match để kiểm tra với email vừa nhập

//   const check = emailValue.match(checkMail);
//   // lấy phần chứa thông tin user
//   const sectionContent = document.querySelector("#info .section-content");

//   console.log("check section", sectionContent);
//   // lấy element để kiểm soát submit
//   const submitControl = document.querySelector("submit-email");
//   if (check) {
//     sectionContent.style.display = "block";
//     submitControl.style.display = "none";
//     errorEmail.innerHTML = "";
//   } else {
//     errorEmail.innerHTML = "Vui lòng nhập đúng đinh dạng email";
//   }
// }
