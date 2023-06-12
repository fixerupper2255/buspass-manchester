const setUp = () => {
    let part1 = document.querySelector("#part1");
    let part2 = document.querySelector("#part2");
    let color = document.querySelector("#color").value;
    let color_placeholder = document.querySelector("#animated");
    console.log(color_placeholder)
    let text = document.querySelector("#word").value;
    let word_placeholder = document.querySelector(".word-holder");
    let bgcolor = ["blue-pic.png", "orange-pic.png", "green-pic.jpeg", "grey-pic.jpeg", "pink-pic.png"];
    let first4 = color.substring(0, 4);
    console.log(first4)
    for (let i = 0; i < bgcolor.length; i++) {
        let bg4 = bgcolor[i].substring(0, 4);
        console.log(bg4)
        if(first4.toLowerCase() == bg4.toLowerCase()){
            color_placeholder.style.backgroundImage = `url('img/${bgcolor[i]}')`;
            console.log(`color is: ${color}, bgcolor is: ${bgcolor[i]}`);
            break;
        }
    }
    part1.style.display = "none";
    part2.style.display = "block";
    word_placeholder.innerHTML = text;
}