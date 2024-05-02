/**
 * 
 */
let count = 0;
function createInputFile(){
    count++;
    // div (wrap)
    const div = document.createElement('div');
    div.classList.add('inputWrap');

    // label
    const inputFile = document.createElement('label');
    inputFile.classList.add('picture');
    inputFile.htmlFor = 'picture__input'+count;
    inputFile.setAttribute('tabIndex', '0');

    // span
    const pictureImage = document.createElement('span');
    pictureImage.classList.add('picture__image');

    const pictureImageTxt = 'Choose an image';
    pictureImage.innerHTML = pictureImageTxt;

    inputFile.appendChild(pictureImage);

    // input
    const input = document.createElement('input');
    input.type = 'file';
    input.name = 'picture__input'+count;
    input.id = 'picture__input'+count;
    input.classList.add('inputDisplay');

    div.appendChild(inputFile);
    div.appendChild(input);

    input.addEventListener("change", function (e) {
        console.log(e);
        const inputTarget = e.target;
        console.log(inputTarget);
        const file = inputTarget.files[0];
        
        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
                const readerTarget = e.target;

                const img = document.createElement("img");
                img.src = readerTarget.result;
                img.classList.add("picture__img");

                pictureImage.innerHTML = "";
                pictureImage.appendChild(img);
            });

            reader.readAsDataURL(file);
        } else {
            pictureImage.innerHTML = pictureImageTxt;
        }
    });

    // document.querySelector('#image_section').insertBefore(div);
    document.querySelector('#image_section').insertBefore(div, document.querySelector('#addBtn'));
    
}
document.querySelector('#addBtn span').addEventListener("click", (e)=>{
    e.stopImmediatePropagation();  
    console.log(e.target.parentNode.parentNode);
    if (count >= 3){
        e.target.parentNode.remove();
    }
    createInputFile();
});