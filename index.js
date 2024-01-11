const NAME_KEY = "NameUser";
const modalOfQuestionOfName = document.querySelector(".hi-what-you-name");
const modalOfCurrentName = document.querySelector(".hi-your-name");
const currentName = modalOfCurrentName.querySelector(".name");
const bntForApproveName = modalOfQuestionOfName.querySelector("#submit");
const input = modalOfQuestionOfName.querySelector("#input");

function writeOrShowName() {
    const nameOfUser = JSON.parse(localStorage.getItem(NAME_KEY) || "[]");
    currentName.innerText = `${nameOfUser}`;
    if (Array.isArray(nameOfUser)) {
        modalOfCurrentName.style.display = "none";
        modalOfQuestionOfName.style.display = "flex";
    } else {
        modalOfCurrentName.style.display = "flex";
        modalOfQuestionOfName.style.display = "none";
    }
}

window.addEventListener("load", () => {
    writeOrShowName();
});

bntForApproveName.addEventListener("click", (e) => {
    e.preventDefault();
    const userInput = input.value;
    if (!userInput.trim()) {
        input.style.outline = "solid 3px red";
        setTimeout(() => {
            input.style.outline = "none";
        }, 1000);
    } else {
        localStorage.setItem(NAME_KEY, JSON.stringify(userInput));
        writeOrShowName();
    }
});
