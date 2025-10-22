
//query///
const fontSize= document.getElementById("fontSize");
const bgColor= document.getElementById("bgColor");
const btn= document.getElementById("btn");
const main= document.querySelector("main");

//initial setup///
//setvalue function///
const setValues =(FontSize,BackgroundColor)=>{

    fontSize.value=FontSize;
    bgColor.value=BackgroundColor;
    main.style.fontSize=FontSize;
    main.style.backgroundColor=BackgroundColor;
}

//initial setup function///
const initialSetup=()=>{
    const selectedFontSize=localStorage.getItem("fontsize");
    const selectedBackgroundColor=localStorage.getItem("bgcolor");

    if(selectedFontSize && selectedBackgroundColor){
      setValues(selectedFontSize,selectedBackgroundColor);
    }
    if(!selectedFontSize && !selectedBackgroundColor){
        setValues("20px","green");
    }
    if(!selectedFontSize && selectedBackgroundColor){
        setValues("20px",selectedBackgroundColor);
    }
    if(selectedFontSize && !selectedBackgroundColor)
    {
        setValues(selectedFontSize,"green");
    }
};

//function changefontsize//
const changeFontSize =(event) =>{
    const selectedFont=event.target.value;
    main.style.fontSize=selectedFont;
    localStorage.setItem("fontsize",selectedFont);
};
////function changebgcolor//
const changeBgColor =(event) =>{
    const selectedBackground=event.target.value;
    main.style.backgroundColor=selectedBackground;
    localStorage.setItem("bgcolor",selectedBackground);
};
///btn clear local storage/////
const clearLocalStorage =() =>{
    setValues("20px","green");
    localStorage.removeItem("bgcolor");
    localStorage.removeItem("fontsize");
};

//adding event listener///
fontSize.addEventListener("change",changeFontSize);
bgColor.addEventListener("change",changeBgColor);
btn.addEventListener("click",clearLocalStorage);

initialSetup();

