setTimeout(() => {
    gsap.to('#dino', {
        opacity: 1,
        duration: 1,
    })
    gsap.to('#world', {
        opacity: 1,
        duration: 1,
    })
}, 1000);

document.getElementById('searchBtn').addEventListener('click', () => {
    let val = document.getElementById('searchDinoInp').value;
    fetch(`https://dinosaur-facts-api.shultzlab.com/dinosaurs`)
        .then((res) => res.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].Name.toLowerCase() === val.toLowerCase()) {
                    let popup = document.createElement('div');
                    let popupContent = `
                        <h1>${data[i].Name}</h1>
                        <p>${data[i].Description}</p>
                    `;
                    popup.setAttribute('id', 'popup');
                    popup.style.position = 'absolute';
                    popup.style.top = '50%';
                    popup.style.left = '50%';
                    popup.style.transform = 'translate(-50%, -50%)';
                    popup.style.background = 'rgba(0, 0, 0, 0.8)';
                    popup.style.color = 'white';
                    popup.style.padding = '20px';
                    popup.style.borderRadius = '10px';
                    popup.style.zIndex = '999';
                    popup.style.cursor = 'pointer';

                    popup.innerHTML = popupContent;


                    document.body.append(popup);


                    popup.addEventListener('click', (e) => {
                        gsap.to(popup, {
                            x: e.clientX,
                            y: e.clientY,
                        });
                    });

                    popup.addEventListener('dblclick', () => {
                        popup.remove();
                    });

                    break; 
                }
            }
        });
});


document.getElementById('popup').addEventListener('dblclick', (e)=>{
    var x = e.clientX;
    var y = e.clientY;


})
// Maanas@#!321