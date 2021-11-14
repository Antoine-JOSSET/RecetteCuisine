//header :
const SearchBar = document.querySelector(".SearchBar");
const SearchIcon = document.querySelector(".SearchIcon");
const SearchInput = document.querySelector("input");
SearchIcon.addEventListener("click", () => {
    SearchBar.classList.toggle("open");
    if (SearchBar.classList.contains("open")) {
        SearchInput.focus();
        SearchInput.setSelectionRange(
            SearchInput.value.length,
            SearchInput.value.length
        );
    } else {
        function clearSelection() {
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            } else if (document.selection) {
                document.selection.empty();
            }
        }
    }
});

//form :
var FormInput = document.querySelectorAll(".input");
FormInput.forEach((item) => {
    item.addEventListener("keydown", (event) => {
        setTimeout(() => {
            if (item.checkValidity()) {
                item.classList.add("itsgood");
            } else {
                item.classList.remove("itsgood");
            }
            if (item.value) {
                item.classList.add("up");
            } else {
                item.classList.remove("up");
            }
            console.log(item.value);
        }, 5);
    });
});

const passwordTextItem1 = document.querySelector(".passwordText_item1");
const passwordTextItem2 = document.querySelector(".passwordText_item2");
passwordTextItem1.addEventListener("click", () => {
    passwordTextItem2.classList.toggle("active");
});